<template>
  <div>
    <h1>Neuen Eintrag erstellen</h1>
    <form @submit.prevent="save">
      <label>Wohlbefinden bewerten:</label>
      <input type="range" v-model="wellBeing" min="1" max="5">
      <p>Aktuelle Bewertung: {{ wellBeing }}</p>

      <label>Störfaktoren im Alltag:</label>
      <select v-model="selectedDisturbances" multiple>
        <option value="Handy">Handy</option>
        <option value="Party">Party</option>
        <!-- Weitere Optionen können hier hinzugefügt werden -->
      </select>

      <button @click="cancel" class="cancel">Abbrechen</button>
      <button type="submit">Eintrag speichern</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wellBeing: 3,
      selectedDisturbances: [],
    };
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    save() {
      this.$emit('save');
    },
  },
};
</script>

<style scoped>
/* Spezifische CSS für diese Komponente */
</style>