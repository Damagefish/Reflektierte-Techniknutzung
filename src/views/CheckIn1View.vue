<template>
  <div id="app">
    <div v-if="!showNewEntry && !showEntries">
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

    <div v-if="showEntries">
      <h1>Eintrag vom {{ selectedEntry.date }}</h1>
      <p>Wohlbefinden: {{ selectedEntry.wellBeing }}</p>
      <p>Störfaktoren: {{ selectedEntry.disturbances.join(', ') }}</p>
      <p>Tipp: {{ selectedEntry.selectedTip }}</p>
      <p>Besser machen: {{ selectedEntry.improveText }}</p>
      <!-- Anzeige von Tipps basierend auf der Auswahl -->
      <div id="tipps-container">
        {{ zeigeTippsInEintrag(selectedEntry.selectedTip) }}
      </div>
      <button @click="showEntries = false">Zurück</button>
    </div>

    <div v-if="showNewEntry">
      <h1>Neuen Eintrag erstellen</h1>
      <form @submit.prevent="addNewEntry">

        <label>Wohlbefinden bewerten:</label>
        <input type="range" v-model="wellBeing" min="1" max="5">
        <p>Aktuelle Bewertung: {{ wellBeing }}</p>

        <label>Störfaktoren im Alltag:</label>
        <select v-model="selectedDisturbances" multiple>
          <option value="Handy">Handy</option>
          <option value="Party">Party</option>
          <!-- Weitere Optionen können hier hinzugefügt werden -->
        </select>

        <label>Tipp auswählen:</label>
        <select id="tip" name="tips" v-model="selectedTip" @change="zeigeTipps">
          <option value="Tipp1">Tipp 1</option>
          <option value="Tipp2">Tipp 2</option>
          <option value="Tipp3">Tipp 3</option>
          <!-- Weitere Tipps können hier hinzugefügt werden -->
        </select>

        <div id="tipps-container">
          <!-- Hier werden die Tipps basierend auf der Auswahl angezeigt -->
          {{ zeigeTippsInEintrag(selectedTip) }}
        </div>

        <label>Besser machen:</label>
        <textarea v-model="improveText"></textarea>

        <button @click="cancelNewEntry" class="cancel">Abbrechen</button>
        <button type="submit">Eintrag speichern</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: JSON.parse(localStorage.getItem('entries')) || [],
      showNewEntry: false,
      showEntries: false,
      wellBeing: 3,
      selectedDisturbances: [],
      selectedEntry: null,
      selectedTip: '',
      improveText: '',
    };
  },
  methods: {
    showNewEntryForm() {
        this.showNewEntry = true;
      },
      cancelNewEntry() {
        this.showNewEntry = false;
        this.wellBeing = 3;
        this.selectedDisturbances = [];
      },
      addNewEntry() {
        const newEntry = {
          date: new Date().toLocaleDateString(),
          wellBeing: this.wellBeing,
          disturbances: this.selectedDisturbances,
          selectedTip: this.selectedTip, 
          improveText: this.improveText,
        };
        this.entries.push(newEntry);
        this.showNewEntry = false;
        this.wellBeing = 3;
        this.selectedDisturbances = [];
        this.selectedTip = '';
        this.improveText = '';
        localStorage.setItem('entries', JSON.stringify(this.entries));
      },
      openEntry(index) {
        this.selectedEntry = this.entries[index];
        this.showEntries = true;
      },
      deleteEntry(index) {
        this.entries.splice(index, 1);
        localStorage.setItem('entries', JSON.stringify(this.entries));
      },
      zeigeTipps() {
        var tippsContainer = document.getElementById("tipps-container");
        tippsContainer.innerHTML = "";

        if (this.selectedTip === "Tipp1") {
          tippsContainer.innerHTML = "<p>Hier sind Tipps für Tipp 1.</p>";
        } else if (this.selectedTip === "Tipp2") {
          tippsContainer.innerHTML = "<p>Hier sind Tipps für Tipp 2.</p>";
        } else if (this.selectedTip === "Tipp3") {
          tippsContainer.innerHTML = "<p>Hier sind Tipps für Tipp 3.</p>";
        }
      },
      zeigeTippsInEintrag(selectedTip) {
        if (selectedTip === "Tipp1") {
          return "Hier sind Tipps für Tipp 1.";
        } else if (selectedTip === "Tipp2") {
          return "Hier sind Tipps für Tipp 2.";
        } else if (selectedTip === "Tipp3") {
          return "Hier sind Tipps für Tipp 3.";
        }
        return "";
      },
  },
};
</script>

<style scoped>
body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    #app {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    h1 {
      color: #333;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
      position: relative;
    }

    button {
      margin-left: 10px;
      cursor: pointer;
      padding: 5px 10px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 3px;
    }

    button.cancel {
      background-color: #e74c3c; 
    }

    button.cancel:hover {
      background-color: #a13529;
    }

    button:hover {
      background-color: #2980b9;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
    }

    input[type="range"] {
      margin-bottom: 10px;
    }

    select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-bottom: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    button[type="submit"] {
      background-color: #2ecc71;
      color: #fff;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;
      margin-top: 10px;
    }

    button[type="submit"]:hover {
      background-color: #27ae60;
    }
</style>
