<template>
  <div>
    
    <KalenderComp/>
    <Footer v-if="!$store.state.calendarFirstEnter">
      <FooterSection>Teil 1</FooterSection>
      <FooterSection>Teil 2</FooterSection>
      <FooterSection>Teil 3</FooterSection>
    </Footer>
  </div>
  
</template>

<script>
import Footer from '@/components/FooterComp.vue';
import FooterSection from '@/components/FooterSection.vue';
import KalenderComp from '@/components/KalenderComp.vue'

export default {
  name: 'MeilenSteineWählenView',
  components: {
    KalenderComp,
    Footer,
    FooterSection,
  },
data() {
  return {
   };
},
};
</script>

<style scoped>

</style>