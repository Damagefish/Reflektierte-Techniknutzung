<template>
    <div>
      <select v-model="selectedOption" class="neumorphic-dropdown">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedOption: null,
      };
    },
  };
  </script>
  
  <style scoped>
  .neumorphic-dropdown {
    padding: 8px;
    border: 1px solid #dcdcdc; /* Neumorphic border color */
    background-color: #f0f0f0; /* Neumorphic background color */
    box-shadow: 2px 2px 5px #bebebe, -2px -2px 5px #ffffff; /* Neumorphic box shadow */
    border-radius: 5px; /* Neumorphic border radius */
    outline: none; /* Remove default focus outline */
    transition: box-shadow 0.3s ease; /* Add a transition for smooth effect */
  
    /* Additional styling for the selected option can be added here */
  }
  
  /* Style for the dropdown arrow */
  .neumorphic-dropdown::after {
    content: '\25BC'; /* Unicode character for down arrow */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #888888; /* Adjust arrow color */
  }
  </style>