<template>
    <div class="neumorphic-frame">
      <p>{{ textContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      textContent: {
        type: String,
        default: '', // Standardwert, falls nichts übergeben wird
      },
    },
  };
  </script>
  
  <style scoped>
  .neumorphic-frame {
    background-color: #d9e3f0;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 10px 10px 20px #bfc9d9, -10px -10px 20px #ffffff;
    width: 100%;
    max-width: 600px; /* Anpassung der maximalen Breite nach Bedarf */
    margin: 20px auto; /* Zentriert das Element horizontal */
    /* Weitere Stile je nach Bedarf... */
  }
  
  p {
    margin: 0; /* Setze den Absatzabstand auf 0, um den Abstand des Textes zu minimieren */
    /* Weitere Stile je nach Bedarf... */
  }
  </style>