<!-- App.vue -->
<template>
  <div>
    <HeaderComp />
    <section class="abstand"> </section>
    <nav>
      
      <!--
      <router-link to="/">NamensEingabeView</router-link> |

   
      <router-link to="/LebensBereicheView">LebensBereicheView</router-link> |

       <router-link to="/AspirationWählenView">AspirationWählenView</router-link> |

      <router-link to="/meilensteine-waehlen">Meilensteine Wählen</router-link> |

      <router-link to="/WochenAblaufView">Wochenablauf</router-link> |

      <router-link to="/AspirationWählenView">AspirationWählenView</router-link> |

      <router-link to="/meilensteine-waehlen">Meilensteine Wählen</router-link> |

      <router-link to="/WochenAblaufView">Wochenablauf</router-link> |
      -->
      
      
      
      <router-link to="/mainscreen">Main Screen</router-link> | 
      <router-link to="/barchart">Bar Chart</router-link> | 
      <router-link to="/CheckIn1View">Check In 1</router-link> |
      <router-link to="/CheckIn2View">Check In 2</router-link> |
      
      <router-link to="/KalenderView">KalenderView</router-link> |

      <router-link to="/BackgroundView">Background</router-link>
      <!-- <router-link to="/BackgroundView">Background</router-link> -->
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
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    Footer,
    FooterSection,
    HeaderComp,
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