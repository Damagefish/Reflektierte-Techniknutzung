<template>
  <div class="container">
    <div class="frame">
      <h4>Moin {{ $store.getters.getName }}!</h4>
      <h4>Hier siehst deine ausgewählten Aspirationen</h4>
    </div>

    <div class="rectangle horizontal" @click="handleClick">
      <div v-if="getAspirationFromStore" class="store-data" :style="{ height: storeDataHeight, backgroundColor: '#403B3E' }">

   
        <p>{{ getAspirationFromStore }}</p>
      </div>
      <section></section>
      <div v-if="showAdditionalInfo" class="additional-info-container">
        <div v-if="showIstZustand" class="store-data rounded">
          <h4>IST ZUSTAND</h4>
          <p>{{ getIstZustandFromStore }}</p>
          <h4 id="meilensteine-subheading">Meilensteine</h4>
          <div v-for="(event, index) in getEventsArrFromStore" :key="index" class="store-data rounded">
            <h4> {{ event.day }}. {{ event.month }}. {{ event.year }}</h4>
            <div v-for="(eventDetail, detailIndex) in event.events" :key="detailIndex" class="infos rounded">
              <p>{{ eventDetail.title }}</p>
              <p>{{ eventDetail.time }}</p>
              <p :style="{ backgroundColor: eventDetail.anotherInputBackgroundColor }">{{ eventDetail.anotherInput }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="spacer"></div>
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
    storeDataHeight() {
    
    const pElementHeight = 30; 
    const margin = 5; 
    return `calc(${pElementHeight}px + ${margin}px)`;
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
.section {
  padding-bottom: 10px;
}

.container {
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 89vh;
  border: 1px solid #ccc;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
}

.rectangle {
  position: relative;
  width: 95%;
  height: auto;
  border-radius: 16px;
  cursor: pointer;
  margin-top: 20px;
  background: rgb(64, 59, 62);
  box-shadow: 10px 10px 20px #222222, -10px -10px 20px #222222;
}

.store-data {
  background-color: #222222;
  color: white;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 0px solid #444444;
  width: 90%;
  margin: 0 auto;
}

.additional-info-container {
  padding: 0px;
  
  background: linear-gradient(145deg, #403B3E, #403B3E);
}

#meilensteine-subheading {
  margin-bottom: 5px; 
}
.infos {
  background-color: #222222;
  color: white;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
 
  margin-bottom: 2px;
  z-index: 2;
}

.infos p[data-v-4da0aabf] {
    margin-bottom: 8px !important;
}

.frame {
  padding: 24px;
  border: 1px solid #444444;
  border-radius: 20px;
}

h4 {
  background-color: #444444;
  color: white;
  border-radius: 16px;
  border: 1px solid #444444;
  padding: 12px;
}

.store-data p {
  background-color: #1B789D;
  color: white;
  padding: 10px; 
  width: 50%; 
  box-sizing: border-box; 
  margin: 0 auto; 
  border-radius: 8px; 

}

.rounded {
  border-radius: 16px;
  padding-top: 10px;
}


</style>