<template>
  <div class="outer-container">
    <div class="middle">
      <div v-if="getAspirationFromStore" class="store-data" @click="handleAspirationClick">
        <p>{{ getAspirationFromStore }}</p>
      </div>

      <!-- Container für alle Informationen -->
      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="getIstZustandFromStore" class="store-data">
          <h1>IST ZUSTAND</h1>
          <p>{{ getIstZustandFromStore }}</p>
        </div>
        <div v-if="getMeilensteinInputFromStore" class="store-data">
          <h1>MEILENSTEIN</h1>
          <p>{{ getMeilensteinInputFromStore }}</p>
        </div>
        <div v-if="getZielInputFromStore" class="store-data">
          <h1>ZIELE</h1>
          <p>{{ getZielInputFromStore }}</p>
        </div>
      </div>
      <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click = "$router.push('/KalenderView')"/>
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
  },
  data() {
    return {
      showAdditionalInfo: false,
    };
  },
  methods: {
    handleAspirationClick() {
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
</style>