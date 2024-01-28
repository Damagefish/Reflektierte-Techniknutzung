<template>
  <HeaderComp/>
  <div>
    <h1>Wochenablauf</h1>
    <h4>Überlege dir nun bis zu 3 konkrete Ziele, die dir dabei helfen deinen 1. Meilenstein zu erreichen.</h4>
    <h4>Diese Ziele sollten dabei gut in dein Alltag integrierbar sein.</h4>
    <h4>Nimm dir dafür ruhig etwas Zeit</h4>
  </div>
  <div id = "Ziel 1">
  <input v-model="goalOne" placeholder="Ziel 1"/>
  </div>
  <div id = "Ziel 2">
  <input v-model="goalTwo" placeholder= "Ziel 2" />
  </div>
  <div id = "Ziel 3">
  <input v-model="goalThree" placeholder= "Ziel 3"/>
  </div>
  <font-awesome-icon :icon="['fas', 'circle-check']" @click="addWeekGoal(goalOne); addWeekGoal(goalTwo); addWeekGoal(goalThree); setWeekGoals(weekGoals)"/>
</template>

<script>

import HeaderComp from '@/components/HeaderComp'
export default {

  data(){
    return{
      goalOne: "",
      goalTwo: "",
      goalThree: "",
      goal: "",
      weekGoals: [],
    }
  },
  components: {
    HeaderComp
  }, 
  methods:{
    setWeekGoals(){
      this.$store.commit('setWeekGoalsOne', this.weekGoals)
      this.weekGoals = []
    }, 
    addWeekGoal(inputGoal){
        this.goal = inputGoal
        this.weekGoals.push(this.goal);
        this.goal = ''
    }
  }

};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>