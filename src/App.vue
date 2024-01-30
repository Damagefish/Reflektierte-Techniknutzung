<!-- App.vue -->
<template>
  <div>
    <section class="abstand"> </section>
    <nav>
    </nav>
    <router-view />
    <Footer>
      <FooterSection>Teil 1</FooterSection>
      <FooterSection>Teil 2</FooterSection>
      <FooterSection>Teil 3</FooterSection>
    </Footer>
  </div>
</template>

<script>
import Footer from './components/FooterComp.vue';
import FooterSection from './components/FooterSection.vue';


export default {
  name: 'App',
  components: {
    Footer,
    FooterSection,
   
  },
};
</script>

<style>
*{
  background-color: #494448;
}
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f4f4;
}

 .abstand{
  height: 15px;
 }
</style>