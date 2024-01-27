
<template>
  <div>
    <h1>Kalender</h1>
    <KalenderComp />
  </div>
</template>

<script>
import KalenderComp from '@/components/KalenderComp.vue';

export default {
  components: {
    KalenderComp
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>