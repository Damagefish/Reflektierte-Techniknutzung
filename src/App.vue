<template>
  <Header></Header>
  <Namenseingabe></Namenseingabe>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import Namenseingabe from '@/components/Namenseingabe.vue'; // Hier fehlte der Doppelpunkt
export default {
  components: {
    Header,
    Namenseingabe 
  }
}
</script>

<style>
  body{
    margin: 0;
  }


  input {
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 30px;
  }
</style>
