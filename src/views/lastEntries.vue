<template>
    <div>
      <h1>Letzte Tagebucheinträge</h1>
      <ul>
        <li v-for="(entry, index) in entries" :key="index">
          {{ entry.date }} - {{ entry.content }}
          <button @click="openEntry(index)">Öffnen</button>
          <button @click="deleteEntry(index)">Löschen</button>
        </li>
      </ul>
      <button @click="showNewEntryForm">Neuen Eintrag erstellen</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['entries'],
    methods: {
      openEntry(index) {
        this.$emit('open-entry', index);
      },
      deleteEntry(index) {
        this.$emit('delete-entry', index);
      },
      showNewEntryForm() {
        this.$emit('show-new-entry-form');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Spezifische CSS für diese Komponente */
  </style>
