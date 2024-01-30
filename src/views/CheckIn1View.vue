<template>
  <div id="app">
    <div v-if="!showNewEntry && !showEntries">
      <h1>Letzte Tagebucheinträge</h1>
      <h2>Statistiken</h2>
      <!-- <p>Durchschnittliches Wohlbefinden: {{ averageWellBeing.toFixed(2) }}</p> -->
      <!-- <p>Häufigster Störfaktor: {{ mostCommonDisturbance }}</p> -->
      <!-- <p>Häufigster Tipp: {{ mostCommonTip }}</p> -->

      
      <div class="flex-container">

        <div class="flex-child disturbance">
          <p>Was dich am meisten ablenkt und beschäftigt</p>
          <h3>{{ mostCommonDisturbance }}</h3>
        </div>
        
        <div class="flex-child tip">
          <p>Diesen Tipp verendest du am meisten</p>
          <h3>{{ mostCommonTip }}</h3>
        </div>
        
      </div>



      <div class="row">
        <div class="column">
          <div class="card">
            <p>Was dich am meisten ablenkt und beschäftigt</p>
            <h3>{{ mostCommonDisturbance }}</h3>
          </div>
        </div>

        
        <div class="column">
          <div class="card">
            <p>Diesen Tipp verendest du am meisten</p>
            <h3>{{ mostCommonTip }}</h3>
          </div>
        </div>
      </div> 
      
<!--
      <ul>
        <li v-for="(entry, index) in entries" :key="index">
          {{ entry.date }} - {{ entry.content }}
          <button @click="openEntry(index)">{{ entry.date }}</button>
          <button @click="deleteEntry(index)">X</button>
        </li>
      </ul>
      <button @click="showNewEntryForm">Neuen Eintrag erstellen</button>
    -->


      <button @click="showNewEntryForm">Neuen Eintrag erstellen</button>
      <ul>
        <li v-for="(entry, index) in entries" :key="index">
            {{ entry.content }}
          <button @click="openEntry(index)">{{ entry.date }}</button>
          <button class="delete" @click="deleteEntry(index)">X</button>
        </li>
      </ul>

    </div>
      

      
      
              
    
    <!-- CHECK-IN EINTRAG ANSEHEN -->
    <div v-if="showEntries">
      <h1>Check-In vom {{ selectedEntry.date }}</h1>
      <p>Wohlbefinden: {{ selectedEntry.highlight }}</p>
      <p>Highlight: {{ selectedEntry.improveText }}</p>
      <p>Störfaktoren: {{ selectedEntry.disturbances.join(', ') }}</p>
      <p>Tipp: {{ selectedEntry.selectedTip }}</p>
      <!-- Anzeige von Tipps basierend auf der Auswahl -->
      <div id="tipps-container">
        {{ zeigeTippsInEintrag(selectedEntry.selectedTip) }}
      </div>
      <p>Besser machen: {{ selectedEntry.improveText }}</p>
      <button @click="showEntries = false">Zurück</button>
    </div>

    <!-- NEUEN CHECK-IN EINTRAG ERSTELLEN -->
    <div v-if="showNewEntry">
      <h1>Neuen Eintrag erstellen</h1>
      <form @submit.prevent="addNewEntry">
        
        <label>Wohlbefinden bewerten:</label>
        <div class="slidecontainer">
          <input type="range" v-model="wellBeing" min="1" max="5" class="slider" id="myRange">
        </div>
        <p>Aktuelle Bewertung: {{ wellBeing }} </p>
        
        <label>Was waren deine Highlights der letzten Zeit:</label>
        <textarea v-model="highlight" placeholder="Warum fühlst du dich so?"></textarea>  

        <label>Störfaktoren im Alltag:</label>
        <select v-model="selectedDisturbances" multiple> <!-- multiple --> 
          <option value="Handynutzung">Handynutzung</option>
          <option value="Social  Media">Social  Media</option>
          <option value="YouTube">YouTube</option>
          <option value="Arbeitsstress">Arbeitsstress</option>
          <option value="Familienprobleme">Familienprobleme</option>
          <!-- Weitere Optionen können hier hinzugefügt werden -->
        </select>

        <!-- Anzeige von Störfaktor-Informationen basierend auf der Auswahl 
        <div v-if="disturbanceInfo">
          <p>{{ disturbanceInfo }}</p>
        </div> 
        -->
        
        <label>Tipp auswählen:</label>
        <select id="tip" name="tips" v-model="selectedTip" @change="zeigeTipps">
          <option value="Tipp 1">Motivation finden</option>
          <option value="Tipp 2">Prioritäten setzen</option>
          <option value="Tipp 3">Folge deinem Herz</option>
          <option value="Tipp 4">Schaffe Klarheit</option>
          <option value="Tipp 5">Positiver Ausblick</option>
          <option value="Tipp 6">Neue Perspektiven</option>
          <option value="Tipp 7">Entscheidungen treffen</option>
          <!-- Weitere Tipps können hier hinzugefügt werden -->
        </select>

        <div id="tipps-container">
          <!-- Hier werden die Tipps basierend auf der Auswahl angezeigt -->
          {{ zeigeTippsInEintrag(selectedTip) }}
        </div>

        <label>Besser machen:</label>
        <textarea v-model="improveText" placeholder="Schreibe hier, wie du deinen Tag verbessern kannst. Deine Gedanken sind wichtig!"></textarea>

        <button @click="cancelNewEntry" class="cancel">Abbrechen</button>
        <button type="submit">Eintrag speichern</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        entries: JSON.parse(localStorage.getItem('entries')) || [],
        showNewEntry: false,
        showEntries: false,
        wellBeing: 3,
        selectedDisturbances: [],
        selectedEntry: null,
        selectedTip: '',
        highlight: '',
        improveText: '',
      },

      computed: {
        averageWellBeing() {
          if (this.entries.length === 0) {
            return 0;
          }

          const sumWellBeing = this.entries.reduce((acc, entry) => acc + entry.wellBeing, 0);
          return sumWellBeing / this.entries.length;
          
        },
        mostCommonDisturbance() {
          if (this.entries.length === 0) {
            return "N/A";
          }

          const disturbancesCount = {};
          this.entries.forEach(entry => {
            entry.disturbances.forEach(disturbance => {
              disturbancesCount[disturbance] = disturbancesCount[disturbance] + 1 || 1;
            });
          });

          const mostCommon = Object.keys(disturbancesCount).reduce((a, b) =>
            disturbancesCount[a] > disturbancesCount[b] ? a : b
          );

          return mostCommon;
        },
        mostCommonTip() {
          if (this.entries.length === 0) {
            return "N/A";
          }

          const tipsCount = {};
          this.entries.forEach(entry => {
          const tip = entry.selectedTip;
          tipsCount[tip] = tipsCount[tip] + 1 || 1;
          });

          const mostCommon = Object.keys(tipsCount).reduce((a, b) =>
          tipsCount[a] > tipsCount[b] ? a : b
          );

            return mostCommon;
        },
      },


      methods: {
        showNewEntryForm() {
          this.showNewEntry = true;
        },
        cancelNewEntry() {
          this.showNewEntry = false;
          // Zurücksetzen der Formulardaten, wenn abgebrochen wird
          this.wellBeing = 3;
          this.selectedDisturbances = [];
        },
        addNewEntry() {
          const newEntry = {
            date: new Date().toLocaleDateString(),
            wellBeing: this.wellBeing,
            highlight: this.highlight,
            disturbances: this.selectedDisturbances,
            selectedTip: this.selectedTip, 
            improveText: this.improveText,
          };
          this.entries.unshift(newEntry); // push -> Ende. unshift -> Anfang
          this.showNewEntry = false;
          // Zurücksetzen der Formulardaten nach dem Speichern
          this.wellBeing = 3;
          this.highlight = '',
          this.selectedDisturbances = [];
          this.selectedTip = '';
          this.improveText = '';
          // Speichern der Einträge im localStorage
          localStorage.setItem('entries', JSON.stringify(this.entries));
        },
        openEntry(index) {
          this.selectedEntry = this.entries[index];
          this.showEntries = true;
        },
        deleteEntry(index) {
          this.entries.splice(index, 1);
          // Aktualisieren der Einträge im localStorage nach dem Löschen
          localStorage.setItem('entries', JSON.stringify(this.entries));
        },
        zeigeTipps() {
        // Hole das Container-Element für die Tipps
        var tippsContainer = document.getElementById("tipps-container");

        // Leere den Container, um alte Tipps zu entfernen
        tippsContainer.innerHTML = "";
       
        // Füge neue Tipps basierend auf der Auswahl hinzu
        if (this.selectedTip === "Tipp 1") {
          tippsContainer.innerHTML = `
          <h3>Motivation finden</h3>
          <p>Entdecke deine tiefsten Antriebe und Ziele, um eine nachhaltige Motivation zu schaffen.</p>
          <ol>
          <li>Motivationsbedarf: Identifiziere, wofür du Motivation benötigst.</li>
          <li>Warum es wichtig ist: Analysiere, warum dies für dich von wirklicher Bedeutung ist.</li>
          <li>Unterstützung für Ziele: Bestimme, welche Ressourcen du benötigst, um dein Ziel zu verfolgen.</li>
          <li>Handlungsschritte: Entwickle konkrete Schritte, um dein Ziel zu erreichen.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 2") {
          tippsContainer.innerHTML = `
          <h3>Prioritäten setzen</h3>
          <p>Strukturiere deine Aufgaben nach Dringlichkeit und Wichtigkeit, um effizienter zu handeln.</p>
          <ol>
          <li>Eiligkeit erkennen: Identifiziere, welche Aufgaben dringend erledigt werden müssen.</li>
          <li>Wirkliche Bedeutung: Betrachte, welche Aufgaben langfristig wichtig sind.</li>
          <li>Zeitmanagement: Schaffe Zeit, indem du unwichtige Aufgaben delegierst oder aufschiebst.</li>
          <li>Prioritäten setzen: Bestimme deine ersten und zweiten Prioritäten.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 3") {
          tippsContainer.innerHTML = `
          <h3>Folge deinem Herz</h3>
          <p>Richte dein Leben nach deinen Werten und Zielen aus, um erfüllt zu leben.</p>
          <ol>
          <li>Lebenswichtige Aspekte: Identifiziere, was dir im Leben wichtig ist.</li>
          <li>Bedeutung verstehen: Analysiere, warum diese Aspekte für dich von Bedeutung sind.</li>
          <li>Klare Ziele: Setze klare Ziele, die du wirklich erreichen möchtest.</li>
          <li>Umsetzungsstrategien: Entwickle Wege, um diese Ziele zu erreichen.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 4") {
          tippsContainer.innerHTML = `
          <h3>Schaffe Klarheit</h3>
          <p>Beseitige Unklarheiten und fokussiere deine Gedanken auf klare Ziele.</p>
          <ol>
          <li>Unklarheiten identifizieren: Analysiere, was dir nicht klar ist.</li>
          <li>Zielsetzungen klären: Definiere deine Ziele klar und präzise.</li>
          <li>Gegenwart reflektieren: Schau auf deine aktuelle Situation und analysiere sie.</li>
          <li>Handlungsoptionen: Betrachte verschiedene Handlungsoptionen.</li>
          <li>Gewissheiten erkennen: Identifiziere, was du sicher weißt.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 5") {
          tippsContainer.innerHTML = `
          <h3>Positiver Ausblick</h3>
          <p>Gestalte deine Einstellung bewusst, um positiver auf Herausforderungen zu reagieren.</p>
          <ol>
          <li>Bedarf an Positivität: Bestimme, wann eine positivere Einstellung nötig ist.</li>
          <li>Verhaltensmuster: Reflektiere, wie du dich in solchen Situationen verhältst.</li>
          <li>Werte in Situationen: Kläre, was dir in diesen Momenten wichtig ist.</li>
          <li>Entscheidung für Glück: Entscheide dich bewusst für ein glücklicheres Verhalten.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 6") {
          tippsContainer.innerHTML = `
          <h3>Neue Perspektiven</h3>
          <p>Betrachte Probleme oder Herausforderungen aus neuen Blickwinkeln, um frische Lösungsansätze zu finden.</p>
          <ol>
          <li>Problembeschreibung: Definiere klar, welches Problem vorliegt.</li>
          <li>Bedarf an neuer Perspektive: Überlege, warum eine neue Sichtweise wichtig ist.</li>
          <li>Optimales Handeln: Stelle dir vor, wie du handeln würdest, wenn du sorglos und glücklich wärst.</li>
          <li>Langfristige Erinnerung: Bedenke, wie du dich in sechs Monaten an deine Gedanken erinnern möchtest.</li>
          </ol>`;
        } else if (this.selectedTip === "Tipp 7") {
          tippsContainer.innerHTML = `
          <h3>Entscheidungen treffen</h3>
          <p>Analysiere deine Optionen und triff kluge Entscheidungen im Einklang mit deinen Zielen.</p>
          <ol>
          <li>Verfügbare Optionen: Erkenne alle Optionen, die dir zur Verfügung stehen.</li>
          <li>Entscheidungsbedarf: Kläre, warum eine Entscheidung getroffen werden muss.</li>
          <li>Zielbewusstsein: Halte vor Augen, welches übergeordnete Ziel du verfolgst und was dir wirklich wichtig ist.</li>
          <li>Weisheit in der Entscheidung: Frage dich, was eine weise Person in dieser Situation tun würde.</li>
          </ol>`;
        }
        // Weitere Bedingungen für andere Tipps hinzufügen
        },
        zeigeTippsInEintrag(selectedTip) {
        // Hole das Container-Element für die Tipps
        
        // Funktion, die Tipps basierend auf der Auswahl zurückgibt
        if (selectedTip === "Tipp 1") {
          return `
          <h3>Motivation finden</h3>
          <p>Entdecke deine tiefsten Antriebe und Ziele, um eine nachhaltige Motivation zu schaffen.</p>
          <ol>
          <li>Motivationsbedarf: Identifiziere, wofür du Motivation benötigst.</li>
          <li>Warum es wichtig ist: Analysiere, warum dies für dich von wirklicher Bedeutung ist.</li>
          <li>Unterstützung für Ziele: Bestimme, welche Ressourcen du benötigst, um dein Ziel zu verfolgen.</li>
          <li>Handlungsschritte: Entwickle konkrete Schritte, um dein Ziel zu erreichen.</li>
          </ol>`;
        } else if (selectedTip === "Tipp 2") {
          return "Hier sind Tipps für Tipp 2.";
        } else if (selectedTip === "Tipp 3") {
          return "Hier sind Tipps für Tipp 3.";
        }
        // Weitere Bedingungen für andere Tipps hinzufügen
        return ""; // Rückgabe eines leeren Strings, wenn keine Übereinstimmung gefunden wurde
        },
        
      },
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
    
    .slider {
      -webkit-appearance: none; 
      width: 100%;
      height: 15px;
      border-radius: 5px;  
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: #04AA6D;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #04AA6D;
      cursor: pointer;
    }

    h1 {
      color: #333;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between; /* Rechtsbündige Ausrichtung der Buttons */
      align-items: center; /* Zentrierte vertikale Ausrichtung der Inhalte */
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
      border-radius: 5px;
    }
    
    button:hover {
      background-color: #2980b9;
    }
    
    button.cancel {
      background-color: #e74c3c; 
    }

    button.cancel:hover {
      background-color: #a13529;
    }

    button.delete {
      color: #e74c3c; 
      background-color: #f9f9f9;
      font-weight: bold;
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

    textarea {
      height: 80px; /* Höhe des Textfelds erhöhen */
      resize: none; /* Vertikales Resize aktivieren */
      border: #333;
      padding: 5%;
      margin: 5%;
    }

    /* Default-Wert für das Textfeld */
    textarea::placeholder {
      color: #aaa;
      font-style: italic;
    }





/* Float four columns side by side */
.column {
  float: center;
  width: 100%;
  padding: 0 5px;
}

.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

/* Style the info cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 5px;
  text-align: center;
  background-color: #444;
  color: white;
  border-radius: 5px;
  
}

.stats {font-size:50px;}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.flex-container {
    display: flex;
    background-color: gainsboro;
    text-align: center;
}

.flex-child {
    color: #04AA6D;
}  

.flex-child:first-child {
    color: red;
} 
</style>
