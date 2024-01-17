<template>
    <div class="center-container">
      <div class="neumorphic-container meilenstein-inputs">
        <div>
          <label for="textMeilenstein">Frei Text:</label>
          <input v-model="freiText" type="text" id="textMeilenstein" class="neumorphic-input" />
        </div>
        <div>
          <label for="dateMeilenstein">Datum:</label>
          <input v-model="selectedDate" type="text" id="dateMeilenstein" class="neumorphic-input" />
        </div>
      </div>
      <div v-if="freiText && selectedDate" class="neumorphic-container ergebnis-feld">
        <p>Meilenstein: {{ freiText }}</p>
        <p>Datum: {{ selectedDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        freiText: '',
        selectedDate: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  
  .neumorphic-container {
    background-color: #d9e3f0;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 10px 10px 20px #bfc9d9, -10px -10px 20px #ffffff;
    width: 50%; 
  }
  
  .neumorphic-input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #d9e3f0;
    box-shadow: inset 8px 8px 16px #bfc9d9, inset -8px -8px 16px #ffffff;
  }
  
  .ergebnis-feld {
    margin-top: 20px;
  }
  </style>