<template>
  <div>
    <h1>Lebensbereiche</h1>
    <LebensbereicheComp />
  </div>
</template>

<script>
import LebensbereicheComp from '../components/LebensbereicheComp.vue';

export default {
  components: {
    LebensbereicheComp,
  }
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>