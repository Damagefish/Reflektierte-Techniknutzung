<template>
  <div>
    <h2>Meilensteine Wählen</h2>
    <KalenderComp/>
    <!-- Fehlender Header-->
    <!--Erklärungstext was zu tun ist-->
    {{ $store.state.aspirationTags }}
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