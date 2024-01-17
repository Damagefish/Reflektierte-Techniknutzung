<template>
    <div>
      <h2>Meilensteine Wählen</h2>
      <MeilenSteine />
    </div>
  </template>
  
  <script>
  import MeilenSteine from '@/components/MeilenSteine.vue';
  
  export default {
    name: 'MeilenSteineWählenView',
    components: {
      MeilenSteine,
    },
  };
  </script>
  
  <style scoped>
  
  </style>