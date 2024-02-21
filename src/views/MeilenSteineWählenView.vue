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
   .footer {
    display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;
  border: 2px solid #555; 
  border-radius: 8px;
  margin-top: 10px; 
  position: fixed;
  width: 92.5%;
  }
</style>