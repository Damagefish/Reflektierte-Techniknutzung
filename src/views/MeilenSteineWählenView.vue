<template>
  <div>
    <h2>Meilensteine Wählen</h2>
    <KalenderComp/>

  </div>

</template>

<script>
import KalenderComp from '@/components/KalenderComp.vue'

export default {
  name: 'MeilenSteineWählenView',
  components: {
    KalenderComp,
  },
data() {
  return {
   };
},
};
</script>

<style scoped>

</style>