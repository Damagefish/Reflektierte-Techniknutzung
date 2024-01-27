<template>
  <HeaderComp/>
    <div>
      <h2>Meilensteine Wählen</h2>
      <TextFieldComp :textContent="vordefinierterText" />
      <MeilenSteine />
    </div>
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="$router.push('/WochenAblaufView')" />
  </template>
  
  <script>
  import MeilenSteine from '@/components/MeilenSteine.vue';
  import TextFieldComp from '@/components/TextFieldComp.vue';
  import HeaderComp from '@/components/HeaderComp'

  export default {
    name: 'MeilenSteineWählenView',
    components: {
      MeilenSteine,
      TextFieldComp,
      HeaderComp
    },
  data() {
    return {
      vordefinierterText: 'Suche dir im nächsten Schritt konkrete Meilensteine, die du erreichen willst.  Denk daran, dass die Meilensteine realistische Ziele sein sollen. Was brauchst du, um dein Ziel zu erreichen?',
    };
  },
};
</script>
  
  <style scoped>
  
  </style>