<template>
  <div class="header">
    <div
      class="circle"
      ref="circle1"
      @mouseover="highlightCircle('circle1')"
      @mouseout="resetHighlight('circle1')"
      @click="navigateTo('/')"
    >
    <!-- @click="navigateTo('/')" -->
    <!--  <router-link to="/" @click="navigateTo('/')">1</router-link> -->  
    </div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle2"
      @mouseover="highlightCircle('circle2')"
      @mouseout="resetHighlight('circle2')"
      @click="navigateTo('LebensBereicheView')"
    >
    
    </div>

    <div class="connector"></div>
    <div
  class="circle"
  ref="circle3"
  @mouseover="highlightCircle('circle3')"
  @mouseout="resetHighlight('circle3')"
  @click="navigateTo('/AspirationwahlView')"
>
  
</div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle4"
      @mouseover="highlightCircle('circle4')"
      @mouseout="resetHighlight('circle4')"
      @click="navigateTo('meilensteine-waehlen')"
    >
    
    
    </div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle5"
      @mouseover="highlightCircle('circle5')"
      @mouseout="resetHighlight('circle5')"
      @click="navigateTo('/WochenAblaufView')"
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

    highlightCircle(circleRef) {
      const circle = this.$refs[circleRef];
      if (circle) {
        circle.style.boxShadow = 'inset 8px 8px 15px #bcbcbc, inset -8px -8px 15px #ffffff';
      }
    },

    resetHighlight(circleRef) {
      const circle = this.$refs[circleRef];
      if (circle) {
        circle.style.boxShadow = '5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff';
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

.circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
  box-shadow: 5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.circle:hover {
  box-shadow: 8px 8px 15px #bcbcbc, -8px -8px 15px #ffffff;
}

.circle:active {
  transform: scale(0.9);
}

.inner-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #4d4d4d;
  background-color: #e0e0e0;
  position: absolute;
}

.connector {
  position: relative;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 2px;
  background-color: black;
  box-shadow: 5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff;
}
</style>