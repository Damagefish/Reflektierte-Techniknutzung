<template>
  <HeaderComp/>
    <div>
        <div class = "textbox">
          <h2>Willkommen bei Aspire!</h2> 
          <h4>Diese App begleitet dich dabei deinen Aspirationen nachzugehen</h4>
          <h4>Bevor wir beginnen: </h4>
          <h4>Wie willst du in der App genannt werden?</h4>
        </div>  
        <section>

            
        <input v-model="name" placeholder="Wie willst du genannt werden?" type = "text"/>
        </section>
        <div id= "arrowContainer">
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click = "changeName(); $router.push('/LebensbereicheView')" id = "arrowRight"/>
        </div>
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
  @media (max-width: 1280px){
    
    :root {
      --input-border: #776661;
}
    #arrowRight{
      margin-left: 258px;
      height: 45px;
      color: #f4f4f4
    }
    #arrowContainer{
      margin-top: 40px;
    }
    input {
      font-size: 16px;
      font-size: max(16px, 1em);
      font-family: inherit;
      padding: 0.25em 0.5em;
      background-color: #f4f4f4;
      border: 2px solid var(--input-border);
      border-radius: 4px;
      margin-top: 116px;
      width: 215px;
    }
    .textbox{
      padding: 20px;
      display: border;
      justify-content: baseline;
      border: 1px solid #ddd;
      border-radius: 15px;
      margin-bottom: 5px;
      background-color: #f4f4f4;
      margin-top: 60px;
    }
    h2{
      background-color: #f4f4f4;
      color: black;
    }
    h4{
      background-color: #f4f4f4;
      color: black;
    }
  }
  @media(min-width: 1281px){
  h4{
    color: #f4f4f4;
  }
  #frame{
    background-color: #f4f4f4;
  }
  input{
    text-align: center;
    width: 300px;

  }
  #arrowRight{
    justify-content: right;
    align-items: end;
    color: white;
  }
 
  .button{
    background-color: white;
  }
}

@media (max-width: 375px) {
  /* Specific styles for iPhone SE */
  input {
    margin-top: 10px; /* Adjust as needed for iPhone SE */
  }

  .textbox {
    margin-top: 10px; /* Adjust as needed for iPhone SE */
  }
  #arrowContainer{
      margin-top: -20px;
      height: 50%;
    }
    section{
      margin-bottom: 10px;
    }
}
  </style>
  