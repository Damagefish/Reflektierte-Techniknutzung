<template>
    <div>
      <h2>KalenderView</h2>
      <KalenderComp />
    </div>
  </template>
  
  <script>
  import KalenderComp from '@/components/KalenderComp.vue';
  
  export default {
    components: {
      KalenderComp, // Verwende hier den korrekten Komponentennamen
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>