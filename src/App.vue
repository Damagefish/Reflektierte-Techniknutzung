<!-- App.vue -->
<template>
  <div>
    <section class="abstand"> </section>
    <nav>
      <router-link to="/test1View">test1View</router-link> | 
      <router-link to="/barchart">Bar Chart</router-link> | 
      <router-link to="/BackgroundView">Background</router-link> 
     
      
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d31c35;
}

 .abstand{
  height: 15px;
 }
</style>