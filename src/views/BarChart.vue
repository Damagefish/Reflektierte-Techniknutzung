<template>
  <div class="center-container">
    <h2>Bar Charts</h2>
    <div class="neumorphic-chart-container" style="height: 150px;">
      <canvas ref="chart1" class="neumorphic-chart" style="height: 100%;"></canvas>
    </div>
    <div class="neumorphic-chart-container" style="height: 150px;">
      <canvas ref="chart2" class="neumorphic-chart" style="height: 100%;"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
  mounted() {
    this.renderChart1();
    this.renderChart2();
  },
  methods: {
    renderChart1() {
      const ctx = this.$refs.chart1.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [30, 50, 20],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    },
    renderChart2() {
      const ctx = this.$refs.chart2.getContext('2d');  
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Label A', 'Label B', 'Label C'],
          datasets: [
            {
              label: 'Dataset 2',
              data: [10, 70, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.neumorphic-chart-container {
  background-color: #d9e3f0;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px #bfc9d9, -10px -10px 20px #ffffff;
}

.neumorphic-chart {
  width: 100%;
  border-radius: 10px;
  background-color: #d9e3f0;
  box-shadow: inset 8px 8px 16px #bfc9d9, inset -8px -8px 16px #ffffff;
}
</style>