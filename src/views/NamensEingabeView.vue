<template>
  <HeaderComp/>
    <div>
        <h4>Willkommen! Ich bin der Erzähler, der dich durch deine Zielsetzung begleitet</h4>
        <h4>Bevor wir beginnen: Wie soll ich dich ansprechen?</h4>
        <input v-model="name" placeholder="Wie soll ich dich ansprechen?"/>
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click = "changeName(); $router.push('/LebensbereicheView')"/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp';
  export default {
    data() {
        return {
            name: ''
        }
    },
    methods:{
        changeName(){
            this.$store.commit('changeName', this.name);
        }
    }, 
    components:{
      HeaderComp
    }
    
  }
  </script>
  
  <style scoped>
  h4{
    color: black;
  }
  textarea{
    background-color: brown;
    color: white;
  }
  input{
    text-align: center;
    width: 170px;
  }
  #arrowRight{
    justify-content: right;
    align-items: end;
    color: white;
  }
  .button{
    background-color: white;
  }
  </style>
  