<!-- BackgroundComp.vue -->

<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script>
  export default {
    data() {
      return {
        canvas: null,
        ctx: null,
        NUMBER_OF_POINTS: 100,
        POINT_SIZE: 3,
        POINT_VELOCITY: 1,
        POINT_COLOR: "#5ff",
        points: [],
        LINE_THRESHOLD: 100,
        TRAIL_FACTOR: 0.3,
      };
    },
    mounted() {
      this.initCanvas();
      this.init();
    },
    methods: {
      initCanvas() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");
  
        window.addEventListener("resize", this.adjustCanvas);
        this.adjustCanvas();
      },
      adjustCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.fillStyle = this.POINT_COLOR;
        this.LINE_THRESHOLD = this.computeLineThreshold();
      },
      loop() {
        this.clearCanvas();
        this.updatePoints();
        this.drawLines();
        this.drawPoints();
        requestAnimationFrame(this.loop);
      },
      init() {
        this.adjustCanvas();
        this.generatePoints();
        this.drawPoints();
        this.loop();
      },
      generatePoints() {
        for (let i = 0; i < this.NUMBER_OF_POINTS; i++) {
          const x = this.randInt(0, this.canvas.width);
          const y = this.randInt(0, this.canvas.height);
          const vx = this.rand(-this.POINT_VELOCITY, this.POINT_VELOCITY);
          const vy = this.rand(-this.POINT_VELOCITY, this.POINT_VELOCITY);
          const r = this.POINT_SIZE;
          this.points.push({ x, y, r, vx, vy });
        }
      },
      drawPoint(point) {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
      },
      drawPoints() {
        this.points.forEach(this.drawPoint);
      },
      updatePoint(point) {
        point.x += point.vx;
        point.y += point.vy;
        this.restrictToCanvas(point);
      },
      updatePoints() {
        this.points.forEach(this.updatePoint);
      },
      computeLineColor(distance) {
        const ratio = distance / this.LINE_THRESHOLD;
        const alpha = (1 - ratio) ** 0.75;
        const hue = 120 + 50 * ratio;
        return `hsl(${hue}deg,100%,50%,${alpha})`;
      },
      computeLineThreshold() {
        return ((this.canvas.width + this.canvas.height) / 2) * 0.08;
      },
      drawLine(point1, point2) {
        const dist = this.distance(point1, point2);
        if (dist > this.LINE_THRESHOLD) return;
        this.ctx.strokeStyle = this.computeLineColor(dist);
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.stroke();
        this.ctx.closePath();
      },
      drawLines() {
        for (let i = 0; i < this.NUMBER_OF_POINTS; i++) {
          for (let j = i + 1; j < this.NUMBER_OF_POINTS; j++) {
            this.drawLine(this.points[i], this.points[j]);
          }
        }
      },
      randInt(a, b) {
        return a + Math.floor((b - a) * Math.random());
      },
      rand(a, b) {
        return a + (b - a) * Math.random();
      },
      distance(point1, point2) {
        return ((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2) ** 0.5;
      },
      clearCanvas() {
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.globalAlpha = 1 - this.TRAIL_FACTOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 1;
        this.ctx.restore();
      },
      restrictToCanvas(point) {
        if (point.x - point.r >= this.canvas.width) {
          point.x = -point.r;
        } else if (point.x + point.r <= 0) {
          point.x = this.canvas.width + point.r;
        }
        if (point.y - point.r >= this.canvas.height) {
          point.y = -point.r;
        } else if (point.y + point.r <= 0) {
          point.y = this.canvas.height + point.r;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  canvas {
    display: block;
    background-color: black;
  }
  </style>