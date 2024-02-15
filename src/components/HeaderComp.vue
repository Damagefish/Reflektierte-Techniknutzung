<template>
  <div class="header">
    <div
      class="circle"
      ref="circle1"
      @click="navigateTo('/')"
      :class = "{'highlighted': isSameRoute('NamensEingabeView') || checkHighlightFirst(), 'current': isSameRoute('NamensEingabeView')}"
    >
    </div>
    <div class="connector" id = "connector1" :class = "{'highlighted': checkHighlightFirst()}"></div>
    <div
      class="circle"
      ref="circle2"
      @click="navigateTo('LebensBereicheView')"
      :class = "{'highlighted': checkHighlightFirst(), 'current': isSameRoute('LebensBereicheView')}"
    >
    
    </div>

    <div class="connector" id = "connector2" :class = "{'highlighted': checkHighlightSecond()}" ></div>
    <div
  class="circle"
  ref="circle3"
  @click="navigateTo('/AspirationwahlView')"
  :class = "{'highlighted': checkHighlightSecond(), 'current': isSameRoute('AspirationsWahlView')}"
>
  
</div>
    <div class="connector" id = "connector3" :class = "{'highlighted': checkHighlightThird()}"></div>
    <div
      class="circle"
      ref="circle4"
      @click="navigateTo('meilensteine-waehlen')"
      :class = "{'highlighted': checkHighlightThird(), 'current': isSameRoute('meilensteine-waehlen')}"
    >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
  this.$router.push({ path: route });
    },
    isSameRoute(route){
      return this.$route.name == route;
    },
    checkHighlightFirst(){
      if((this.$route.name == 'LebensBereicheView') || (this.$route.name == 'AspirationsWahlView') ||(this.$route.name == 'meilensteine-waehlen')){
          return true;
      }
    }, 
    checkHighlightSecond(){
      if((this.$route.name == 'AspirationsWahlView') ||(this.$route.name == 'meilensteine-waehlen')){
          return true;
      }
    },
    checkHighlightThird(){
      if((this.$route.name == 'meilensteine-waehlen')){
          return true;
      }
    },
  },
};
</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle.highlighted{
    background-color: #1B789D;
  }

.circle.current{
  background-color: #87CEEB;
}

.connector.highlighted{
  background-color:#87CEEB
}

.connector {
  position: relative;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 2px;
  background-color: #f4f4f4;
}

@media(max-width: 499px){
  .circle {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  }
}


@media (min-width: 500px) and (max-width: 1280px){

  .circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
}

}
@media (min-width: 1281px){
.circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
.connector {
  position: relative;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 2px;
  background-color: black;
}

}
</style>