<template>
  <div class="footer">
    <div class="footer-section"> <font-awesome-icon :icon="['fas', 'chart-column']" @click="$router.push('/barchart')"/></div>
    <div class="footer-section"> <font-awesome-icon :icon="['fas', 'house']" @click="$router.push('/mainscreen')"/></div>
    <div class="footer-section"> <font-awesome-icon :icon="['fas', 'clock']" @click="$router.push('/checkIn1View')"/></div>
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