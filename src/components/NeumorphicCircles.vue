<template>
    <div class="neumorphic-circles">
      <div v-for="(color, index) in colors" :key="index" class="neumorphic-circle" :style="{ backgroundColor: color }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colors: ['#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#ffffff', '#d9d9d9'] 
      };
    }
  };
  </script>
  
  <style scoped>
  .neumorphic-circles {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
  
  .neumorphic-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff; 
    transition: box-shadow 0.3s ease-in-out;
  }
  
  .neumorphic-circle:hover {
    box-shadow: inset 5px 5px 10px #a8a8a8, inset -5px -5px 10px #ffffff; 
  }
  </style>
