<template>
    <div class="main-screen" @mousemove="moveSmallCircle" @mouseup="stopDragSmallCircle">
      <div
        class="big-circle2"
        @mousedown="startDragBigCircle2"
        @mousemove="dragBigCircle2"
        @mouseup="stopDragBigCircle2"
        :style="{ top: bigCirclePosition2.y + 'px', left: bigCirclePosition2.x + 'px' }"
      >
        <MeilenSteine /> 
    </div>
      <div
        class="big-circle"
        @mousedown="startDragBigCircle"
        @mousemove="dragBigCircle"
        @mouseup="stopDragBigCircle"
        :style="{ top: bigCirclePosition.y + 'px', left: bigCirclePosition.x + 'px' }"
      ></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import MeilenSteine from '@/components/MeilenSteine.vue'; 
  
  export default {
    name: 'MainScreen',
    components: {
       MeilenSteine,
    },
    setup() {
      const bigCirclePosition2 = ref({ x: 100, y: 100 });
      const bigCirclePosition = ref({ x: 300, y: 300 });
      let isDraggingBigCircle = ref(false);
      let isDraggingBigCircle2 = ref(false);
      let dragStart = ref({ x: 0, y: 0 });
      let dragStart2 = ref({ x: 0, y: 0 });
  
      const startDragBigCircle = (event) => {
        isDraggingBigCircle.value = true;
        dragStart.value = { x: event.clientX, y: event.clientY };
      };
  
      const dragBigCircle = (event) => {
        if (isDraggingBigCircle.value) {
          const offsetX = event.clientX - dragStart.value.x;
          const offsetY = event.clientY - dragStart.value.y;
  
          bigCirclePosition.value.x += offsetX;
          bigCirclePosition.value.y += offsetY;
  
          dragStart.value = { x: event.clientX, y: event.clientY };
        }
      };
  
      const stopDragBigCircle = () => {
        isDraggingBigCircle.value = false;
      };
  
      const startDragBigCircle2 = (event) => {
        isDraggingBigCircle2.value = true;
        dragStart2.value = { x: event.clientX, y: event.clientY };
      };
  
      const dragBigCircle2 = (event) => {
        if (isDraggingBigCircle2.value) {
          const offsetX = event.clientX - dragStart2.value.x;
          const offsetY = event.clientY - dragStart2.value.y;
  
          bigCirclePosition2.value.x += offsetX;
          bigCirclePosition2.value.y += offsetY;
  
          dragStart2.value = { x: event.clientX, y: event.clientY };
        }
      };
  
      const stopDragBigCircle2 = () => {
        isDraggingBigCircle2.value = false;
      };
  
      return {
        bigCirclePosition,
        isDraggingBigCircle,
        dragStart,
        startDragBigCircle,
        dragBigCircle,
        stopDragBigCircle,
        bigCirclePosition2,
        isDraggingBigCircle2,
        dragStart2,
        startDragBigCircle2,
        dragBigCircle2,
        stopDragBigCircle2,
      };
    },
  };
  </script>
  
  <style scoped>
  .main-screen {
    position: relative;
    height: 100vh;
  }
  
  .big-circle,
  .big-circle2 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #e0e5ec;
    box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff;
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: move;
  }
  </style>