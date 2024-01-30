<template>
  <div class="container">
    <div class="frame">
      <h4>Moin {{ $store.getters.getName }}!</h4>
      <h4>Hier siehst deine ausgewählten Aspirationen</h4>
    </div>

    <div class="rectangle horizontal" @click="handleClick">
      <div v-if="getAspirationFromStore" class="store-data">
        <p>{{ getAspirationFromStore }}</p>
      </div>
      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="showIstZustand" class="store-data">
          <h4>IST ZUSTAND</h4>
          <p>{{ getIstZustandFromStore }}</p>
          <h4>Meilensteine</h4>
          <div v-for="(event, index) in getEventsArrFromStore" :key="index" class="store-data">
            <h4> {{ event.day }}. {{ event.month }}. {{ event.year }}</h4>
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
  max-width: 375px;
  height: 100vh;
  border: 1px solid #ccc;
  margin: 0 auto;
  z-index: 1;
}

.rectangle {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 16px;
  cursor: pointer;
  margin-top: 20px;
  background: linear-gradient(145deg, #d2d6db, #f3f5f8);
  box-shadow: 10px 10px 20px #4b4444, -10px -10px 20px #4b4444;
}

.store-data {
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.additional-info-container {
  background-color: white;
  padding: 10px;
}

.frame {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
}

h4 {
  background-color: white;
  color: black;
  border-radius: 1px;
  border: 1px solid #87ceeb; /* Leicht blauer Border */
  padding: 10px; /* Optional: Füge etwas Abstand zwischen dem Text und dem Border hinzu */
}

.store-data p {
  background-color: white;
  color: black;
}
</style>