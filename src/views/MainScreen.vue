<template>
  <div class="container">
    <div class="frame">
      
    </div>

    <div class="rectangle horizontal" @click="handleClick">
      <div v-if="getAspirationFromStore" class="store-data">
        <p>{{ getAspirationFromStore }}</p>
      </div>
      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="showIstZustand" class="store-data">
          <h1>IST ZUSTAND</h1>
          <p>{{ getIstZustandFromStore }}</p>
          <h1>EVENTS</h1>
          <div v-for="(event, index) in getEventsArrFromStore" :key="index" class="store-data">
            <h2> {{ event.day }}. {{ event.month }}. {{ event.year }}</h2>
            <div v-for="(eventDetail, detailIndex) in event.events" :key="detailIndex">
              <p>{{ eventDetail.title }}</p>
              <p>{{ eventDetail.time }}</p>
              <p :style="{ backgroundColor: eventDetail.anotherInputBackgroundColor }">{{ eventDetail.anotherInput }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getAspirationFromStore() {
      return this.$store.getters.getAspiration;
    },
    getIstZustandFromStore() {
      return this.$store.getters.getIstZustand;
    },
    getMeilensteinInputFromStore() {
      return this.$store.getters.getMeilensteinInput;
    },
    getZielInputFromStore() {
      return this.$store.getters.getZielInput;
    },
    getEventsArrFromStore() {
      return this.$store.getters.getEventsArr;
    },
  },
  data() {
    return {
      showAdditionalInfo: false,
      showIstZustand: false,
    };
  },
  methods: {
    handleClick() {
      this.showIstZustand = !this.showIstZustand;
      this.showAdditionalInfo = true;
    },
    setAnotherInputBackgroundColor() {
      this.$set(this.eventDetail, 'anotherInputBackgroundColor', 'white');
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 375px; /* Maximale Breite für iPhone SE */
  height: 100vh; /* Volle Höhe des Viewports */
  border: 1px solid #ccc;
  margin: 0 auto; /* Zentrierung auf dem Bildschirm */
  z-index: 1;
}

.rectangle {
  position: relative; /* Änderung von absolute zu relative */
  width: 100%; /* Volle Breite des Containers */
  height: auto; /* Automatische Höhe basierend auf dem Inhalt */
  border-radius: 16px;
  cursor: pointer;
  margin-top: 20px; /* Abstand zum vorherigen Element */
  background: linear-gradient(145deg, #d2d6db, #f3f5f8);
  box-shadow: 10px 10px 20px #4b4444, -10px -10px 20px #4b4444;
}

.store-data {
  background-color: white;
}

.additional-info-container {
  background-color: white;
  padding: 10px; /* Zusätzlicher Abstand für den Inhalt */
}

.frame {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
}
</style>