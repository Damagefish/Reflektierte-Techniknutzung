<template>
  <div>
    
    <KalenderComp/>
   
  </div>
  <Footer>
      <FooterSection>Teil 1</FooterSection>
      <FooterSection>Teil 2</FooterSection>
      <FooterSection>Teil 3</FooterSection>
    </Footer>
</template>

<script>
import Footer from './components/FooterComp.vue';
import FooterSection from './components/FooterSection.vue';
import KalenderComp from '@/components/KalenderComp.vue'

export default {
  name: 'MeilenSteineWählenView',
  components: {
    KalenderComp,
  },
data() {
  return {
   };
},
};
</script>

<style scoped>

</style>