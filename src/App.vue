<!-- App.vue -->
<template>
  <div>
    <section class="abstand"> </section>
    <nav>
    </nav>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',

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