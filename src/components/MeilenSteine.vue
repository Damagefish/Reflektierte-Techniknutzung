<template>
  <div class="center-container">
    <div class="neumorphic-container meilenstein-inputs">
      <div>
        <label for="aspirationSelect">Aspiration:</label>
        <select v-model="selectedAspiration" id="aspirationSelect" class="neumorphic-select">
          <option value="ziel1">Ziel 1</option>
          <option value="ziel2">Ziel 2</option>
          <!-- Weitere Optionen können nach Bedarf hinzugefügt werden -->
        </select>
      </div>
      <div>
        <label for="dateMeilenstein">Datum:</label>
        <input v-model="selectedDate" type="date" id="dateMeilenstein" class="neumorphic-input" />
      </div>
      <div>
        <label for="timeMeilenstein">Zeit:</label>
        <input v-model="selectedTime" type="time" id="timeMeilenstein" class="neumorphic-input" />
      </div>
      <button @click="showResult" class="neumorphic-button">Anzeigen</button>
    </div>
    <div v-if="showResultData" class="neumorphic-container ergebnis-feld">
      <p>Aspiration: {{ selectedAspiration }}</p>
      <p>Datum: {{ selectedDate }}</p>
      <p>Zeit: {{ selectedTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAspiration: '',
      selectedDate: '',
      selectedTime: '',
      showResultData: false,
    };
  },
  methods: {
    showResult() {
      this.showResultData = true;
    },
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.neumorphic-container {
  background-color: #8392a3;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 10px 10px 20px #bfc9d9, -10px -10px 20px #ffffff;
  width: 30%;
  margin: 10px;
}

.neumorphic-input,
.neumorphic-select {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #d9e3f0;
  box-shadow: inset 8px 8px 16px #bfc9d9, inset -8px -8px 16px #ffffff;
  margin-bottom: 15px;
}

.ergebnis-feld {
  margin-top: 20px;
}

.neumorphic-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #d9e3f0;
  box-shadow: inset 8px 8px 16px #bfc9d9, inset -8px -8px 16px #ffffff;
  margin-top: 15px;
  cursor: pointer;
}
</style>