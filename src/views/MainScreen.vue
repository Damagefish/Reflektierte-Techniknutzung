<template>
  <div class="outer-container">
    <div class="inner-container">
      <h1>Main Screen</h1>
      <DropdownMenu :options="dropdownOptions" />
    </div>
  </div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu.vue";

export default {
  components: {
    DropdownMenu,
  },
  data() {
    return {
      dropdownOptions: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option3", label: "Option 3" },
        { value: "option3", label: "Option 3" },
      ],
    };
  },
};
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 100% Viewport Height */
}

.inner-container {
  padding: 20px;
  border: 2px solid #dcdcdc; /* Neumorphic border color */
  background-color: #f0f0f0; /* Neumorphic background color */
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; /* Neumorphic box shadow */
  border-radius: 10px; /* Neumorphic border radius */
}

/* Additional styling for DropdownMenu can be added here */

</style>