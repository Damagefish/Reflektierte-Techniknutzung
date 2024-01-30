<template>
  <div class="container">
    <div class="rectangle horizontal" @click="handleClick">
      <div v-if="getAspirationFromStore" class="store-data">
        <p>{{ getAspirationFromStore }}</p>
      </div>
    </div>
    <div class="rectangle vertical" @click="handleClick">
      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="showIstZustand" class="store-data">
          <h1>IST ZUSTAND</h1>
          <p>{{ getIstZustandFromStore }}</p>
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
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 50vw;
  height: 65vh;
  border: 1px solid #ccc;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
}

.rectangle {
  position: absolute;
  border-radius: 16px;
  cursor: pointer;
}

.horizontal {
  width: 50%;
  height: 160px;
  top: 25px;
  left: 25%;
  background: linear-gradient(145deg, #d2d6db, #f3f5f8);
  box-shadow: 10px 10px 20px #4b4444, -10px -10px 20px #4b4444;
}

.vertical {
  width: 75%;
  height: 200px;
  top: 32.5%;
  left: 11.5%;
  background: linear-gradient(145deg, #d2d6db, #f3f5f8);
  box-shadow: 10px 10px 20px #4b4444, -10px -10px 20px #4b4444;
}

.store-data{

  background-color: white;
}

.additional-info-container{
  background-color: white;
}
</style>