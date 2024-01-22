
<template>
    <div>
      <h1>Background</h1>
      <BackgroundComp />
    </div>
  </template>
  
  <script>
  import BackgroundComp from '@/components/BackgroundComp.vue';
  
  export default {
    components: {
      BackgroundComp
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>