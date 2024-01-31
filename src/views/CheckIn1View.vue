<template>
  <div id="app">
    
    <div v-if="!showNewEntry && !showEntries">
      <h1>Letzten Check-Ins</h1>
      <!-- <p>Durchschnittliches Wohlbefinden: {{ averageWellBeing.toFixed(2) }}</p> -->
      <!-- <p>Häufigster Störfaktor: {{ mostCommonDisturbance }}</p> -->
      <!-- <p>Häufigster Tipp: {{ mostCommonTip }}</p> -->

      
      <div class="flex-container">
        <div class="flex-child disturbance">
          <p>Was dich am meisten ablenkt und beschäftigt</p>
          <h3 class="stat1">{{ mostCommonDisturbance }}</h3>
        </div>
        
        <div class="flex-child tip">
          <p>Diesen Tipp verendest du am meisten</p>
         <h3 class="stat2">{{ mostCommonTip }}</h3>

        </div>
      </div>
    
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
      <p>Wohlbefinden: {{ wellBeing }} </p>
      <p>Deine Gedanken: {{ selectedEntry.highlight }}</p>
      <p>Störfaktoren: {{ selectedEntry.disturbances.join(', ') }}</p>
      <p>Tipp: {{ selectedEntry.selectedTip }}</p>
      <!-- Anzeige von Tipps basierend auf der Auswahl -->
      <div id="tipps-container">
        <!-- {{ zeigeTippsInEintrag(selectedEntry.selectedTip) }} -->
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
        
        <label>Welche Gedanken schweben dir durch den Kopf?</label>
        <textarea v-model="highlight" placeholder="Schreib auf..."></textarea>  

        <label>Störfaktoren im Alltag:</label>
        <select v-model="selectedDisturbances" multiple> <!-- multiple --> 
          <option value="Handynutzung">Handynutzung</option>
          <option value="Social Media">Social  Media</option>
          <option value="YouTube">YouTube</option>
          <option value="Arbeitsstress">Arbeitsstress</option>
          <option value="Familienprobleme">Familienprobleme</option>
          <!-- Weitere Optionen können hier hinzugefügt werden -->
        </select>
        
        <label>Tipp auswählen:</label>
        <select id="tip" name="tips" v-model="selectedTip" @change="zeigeTipps">
          <option value="Motivation finden">Motivation finden</option>
          <option value="Prioritäten setzen">Prioritäten setzen</option>
          <option value="Folge deinem Herz">Folge deinem Herz</option>
          <option value="Schaffe Klarheit">Schaffe Klarheit</option>
          <option value="Positiver Ausblick">Positiver Ausblick</option>
          <option value="Neue Perspektiven">Neue Perspektiven</option>
          <option value="Entscheidungen treffen">Entscheidungen treffen</option>
          <!-- Weitere Tipps können hier hinzugefügt werden -->
        </select>

        <div id="tipps-container">
          <!-- Hier werden die Tipps basierend auf der Auswahl angezeigt -->
          {{ zeigeTippsInEintrag(selectedTip) }}
        </div>

        <label>Welche Schritte willst du jetzt unternehmen?</label>
        <textarea v-model="improveText" placeholder="Schreib auf..."></textarea>

        <button @click="cancelNewEntry" class="cancel">Abbrechen</button>
        <button type="submit">Eintrag speichern</button>
      </form>
    </div>
  </div>
  <Footer>
      <FooterSection>Teil 1</FooterSection>
      <FooterSection>Teil 2</FooterSection>
      <FooterSection>Teil 3</FooterSection>
    </Footer>
</template>

<script>
import Footer from '@/components/FooterComp.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {

  components: {
    Footer,
    FooterSection,
   
  },

  data() {
    return {
        entries: JSON.parse(localStorage.getItem('entries')) || [],
        showNewEntry: false,
        showEntries: false,
        wellBeing: 3,
        selectedDisturbances: [],
        selectedEntry: null,
        selectedTip: '',
        highlight: '',
        improveText: '',
      };
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
            return "";
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
            return "";
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
        if (this.selectedTip === "Motivation finden") {
          tippsContainer.innerHTML = `
          <h3>Motivation finden</h3>
          <p>Entdecke deine tiefsten Antriebe und Ziele, um eine nachhaltige Motivation zu schaffen.</p>
          <ol>
          <li>Motivationsbedarf: Identifiziere, wofür du Motivation benötigst.</li>
          <li>Warum es wichtig ist: Analysiere, warum dies für dich von wirklicher Bedeutung ist.</li>
          <li>Unterstützung für Ziele: Bestimme, welche Ressourcen du benötigst, um dein Ziel zu verfolgen.</li>
          <li>Handlungsschritte: Entwickle konkrete Schritte, um dein Ziel zu erreichen.</li>
          </ol>`;
        } else if (this.selectedTip === "Prioritäten setzen") {
          tippsContainer.innerHTML = `
          <h3>Prioritäten setzen</h3>
          <p>Strukturiere deine Aufgaben nach Dringlichkeit und Wichtigkeit, um effizienter zu handeln.</p>
          <ol>
          <li>Eiligkeit erkennen: Identifiziere, welche Aufgaben dringend erledigt werden müssen.</li>
          <li>Wirkliche Bedeutung: Betrachte, welche Aufgaben langfristig wichtig sind.</li>
          <li>Zeitmanagement: Schaffe Zeit, indem du unwichtige Aufgaben delegierst oder aufschiebst.</li>
          <li>Prioritäten setzen: Bestimme deine ersten und zweiten Prioritäten.</li>
          </ol>`;
        } else if (this.selectedTip === "Folge deinem Herz") {
          tippsContainer.innerHTML = `
          <h3>Folge deinem Herz</h3>
          <p>Richte dein Leben nach deinen Werten und Zielen aus, um erfüllt zu leben.</p>
          <ol>
          <li>Lebenswichtige Aspekte: Identifiziere, was dir im Leben wichtig ist.</li>
          <li>Bedeutung verstehen: Analysiere, warum diese Aspekte für dich von Bedeutung sind.</li>
          <li>Klare Ziele: Setze klare Ziele, die du wirklich erreichen möchtest.</li>
          <li>Umsetzungsstrategien: Entwickle Wege, um diese Ziele zu erreichen.</li>
          </ol>`;
        } else if (this.selectedTip === "Schaffe Klarheit") {
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
        } else if (this.selectedTip === "Positiver Ausblick") {
          tippsContainer.innerHTML = `
          <h3>Positiver Ausblick</h3>
          <p>Gestalte deine Einstellung bewusst, um positiver auf Herausforderungen zu reagieren.</p>
          <ol>
          <li>Bedarf an Positivität: Bestimme, wann eine positivere Einstellung nötig ist.</li>
          <li>Verhaltensmuster: Reflektiere, wie du dich in solchen Situationen verhältst.</li>
          <li>Werte in Situationen: Kläre, was dir in diesen Momenten wichtig ist.</li>
          <li>Entscheidung für Glück: Entscheide dich bewusst für ein glücklicheres Verhalten.</li>
          </ol>`;
        } else if (this.selectedTip === "Neue Perspektiven") {
          tippsContainer.innerHTML = `
          <h3>Neue Perspektiven</h3>
          <p>Betrachte Probleme oder Herausforderungen aus neuen Blickwinkeln, um frische Lösungsansätze zu finden.</p>
          <ol>
          <li>Problembeschreibung: Definiere klar, welches Problem vorliegt.</li>
          <li>Bedarf an neuer Perspektive: Überlege, warum eine neue Sichtweise wichtig ist.</li>
          <li>Optimales Handeln: Stelle dir vor, wie du handeln würdest, wenn du sorglos und glücklich wärst.</li>
          <li>Langfristige Erinnerung: Bedenke, wie du dich in sechs Monaten an deine Gedanken erinnern möchtest.</li>
          </ol>`;
        } else if (this.selectedTip === "Entscheidungen treffen") {
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
        if (selectedTip === "Motivation finden") {
          return "Motivation finden";
        } else if (selectedTip === "Prioritäten setzen") {
          return "Prioritäten setzen";
        } else if (selectedTip === "Folge deinem Herz") {
          return "Folge deinem Herz";
        } else if (selectedTip === "Schaffe Klarheit") {
          return "Schaffe Klarheit";
        } else if (selectedTip === "Positiver Ausblick") {
          return "Positiver Ausblick";
        } else if (selectedTip === "Neue Perspektiven") {
          return "Neue Perspektiven";
        } else if (selectedTip === "Entscheidungen treffen") {
          return "Entscheidungen treffen";
        }
        // Weitere Bedingungen für andere Tipps hinzufügen
        return ""; // Rückgabe eines leeren Strings, wenn keine Übereinstimmung gefunden wurde
        },
      },
  };


  
</script>

<style scoped>
body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #494448;
    }

    #app {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #494448;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    
    .slider {
      -webkit-appearance: none; 
      width: 100%;
      height: 15px;
      border-radius: 5px;  
      background: #f4f4f4;
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
      background: #85A0A9;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #85A0A9;
      cursor: pointer;
    }

    h1 {
      color: #f4f4f4;
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
      border-radius: 5px;
      border: #aaa;
      border-style: solid;
      position: relative;
    }

    button {
      margin-left: 10px;
      cursor: pointer;
      padding: 5px 10px;
      background-color: #85A0A9; /* #3498db; */
      color: #f4f4f4;
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
      background-color: #494448;
      font-weight: bold;
    }

    button.newEntry {
      background-color: #85A0A9;
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
      background-color: #494448;
      color: #f4f4f4;
    }

    option {
      color: #f4f4f4;
    }

    .tips {
      color: #f4f4f4;
    }

    button[type="submit"] {
      background-color: #85A0A9;
      color: #f4f4f4;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;
      margin-top: 10px;
    }

    button[type="submit"]:hover {
      background-color: #3498db;
    }

    textarea {
      height: 80px; /* Höhe des Textfelds erhöhen */
      resize: none; /* Vertikales Resize aktivieren */
      border: #494448;
      background-color: #494448;
      padding: 5%;
      margin: 5%;
      color: #f4f4f4;

    }

    /* Default-Wert für das Textfeld */
    textarea::placeholder {
      color: #f4f4f4;
      font-style: italic;
    }

    #tipps-container {
      color: #f4f4f4;
    }




p {
  color: #f4f4f4;
}

label {
  color: #f4f4f4;
  margin-top: 10%;
}

.flex-container {
    display: flex;
    margin: 5%;
    border-radius: 5px;
    border: #f4f4f4;
    border-style: solid;
    text-align: center;
}

.flex-child {
    color: #f4f4f4;
}  

.flex-child:first-child {
    color: #f4f4f4;
} 

button.newEntry {
  background-color: #2ecc71;
  font-weight: bold;
}

button.newEntry:hover {
  background-color: #27ae60;
}

h3.stat1 {
  color: #e74c3c;
}

h3.stat2 {
  color: #27ae60;
}

.footer{
  margin-top: 495px;
}
</style>
