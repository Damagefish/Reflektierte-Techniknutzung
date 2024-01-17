<template>
    <div class="footer">
      <div class="footer-section">Teil 1</div>
      <div class="footer-section">Teil 2</div>
      <div class="footer-section">Teil 3</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  .footer-section {
    flex: 1;
    text-align: center;
  }
  </style>
  