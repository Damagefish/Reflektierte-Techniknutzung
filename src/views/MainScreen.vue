<template>
  <div class="outer-container">
    <div class="middle">
      <div v-if="getAspirationFromStore" class="store-data" @click="handleAspirationClick">
        <p>{{ getAspirationFromStore }}</p>
      </div>

      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="showIstZustand" class="store-data">
          <h1>IST ZUSTAND</h1>
          <p>{{ getIstZustandFromStore }}</p>
        </div>
        <div v-else class="events-container">
          <h1>EVENTS</h1>
          <div v-for="(event, index) in getEventsArrFromStore" :key="index" class="store-data">
            <h2>Day {{ event.day }}</h2>
            <div v-for="(eventDetail, detailIndex) in event.events" :key="detailIndex">
              <p>{{ eventDetail.title }}</p>
              <p>{{ eventDetail.time }}</p>
              <p>{{ eventDetail.anotherInput }}</p>
            </div>
          </div>
        </div>
      </div>

      <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="$router.push('/KalenderView')"/>
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
    handleAspirationClick() {
      this.showIstZustand = !this.showIstZustand;
      this.showAdditionalInfo = true;
    },
  },
};
</script>

<style scoped>
.middle {
  flex: 1;
  margin: 0 20px;
}

.store-data {
  cursor: pointer;
  border: 2px solid #87ceeb;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
}

.additional-info-container {
  display: flex;
  flex-wrap: wrap;
}

.additional-info-container .store-data {
  flex: 1;
  margin-right: 20px;
}

.events-container {
  margin-top: 20px;
}

.events-container h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>