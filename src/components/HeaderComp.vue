<template>
  <div class="header">
    <div
      class="circle"
      ref="circle"
      @mouseover="highlightCircle"
      @mouseout="resetHighlight"
    >
      1
    </div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle"
      @mouseover="highlightCircle"
      @mouseout="resetHighlight"
    >
      2
    </div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle"
      @mouseover="highlightCircle"
      @mouseout="resetHighlight"
    >
      3
    </div>
    <div class="connector"></div>

    <div
      class="circle"
      ref="circle"
      @mouseover="highlightCircle"
      @mouseout="resetHighlight"
    >
      4
    </div>
    <div class="connector"></div>
    <div
      class="circle"
      ref="circle"
      @mouseover="highlightCircle"
      @mouseout="resetHighlight"
    >
      5
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    highlightCircle() {
      if (this.$refs.circle) {
        this.$refs.circle.style.boxShadow =
          '8px 8px 15px #bcbcbc, -8px -8px 15px #ffffff';
      }
    },
    resetHighlight() {
      if (this.$refs.circle) {
        this.$refs.circle.style.boxShadow =
          '5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff';
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
}

.circle:hover {
  box-shadow: 8px 8px 15px #bcbcbc, -8px -8px 15px #ffffff;
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