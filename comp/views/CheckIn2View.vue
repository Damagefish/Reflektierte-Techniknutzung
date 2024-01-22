<template>
  <div>
    <h1>Eintrag vom {{ selectedEntry.date }}</h1>
    <p>Wohlbefinden: {{ selectedEntry.wellBeing }}</p>
    <p>Störfaktoren: {{ selectedEntry.disturbances.join(', ') }}</p>
    <button @click="back">Zurück</button>
  </div>
</template>

<script>
export default {
  props: ['selectedEntry'],
  methods: {
    back() {
      this.$emit('back');
    },
  },
};
</script>

<style scoped>
/* Spezifische CSS für diese Komponente */
</style>