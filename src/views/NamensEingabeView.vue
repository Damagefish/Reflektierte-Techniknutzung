<template>
  <HeaderComp/>
    <div>
        <div class = "textbox">
          <div v-if="shown"> <!--Button zum Installieren der App-->
          <button @click="installPWA" class = "install-button">
            Installieren!
          </button>
          </div>

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
            name: '',
            isFooterVisible: true,
            shown: false,
        }
    },
    methods:{
        changeName(){
            this.$store.commit('changeName', this.name);
        },
        dismissPrompt() {
          this.shown = false
        },
        installPWA() {
          this.installEvent.prompt()
          this.installEvent.userChoice.then((choice) => {
          this.dismissPrompt() // Hide the prompt once the user's clicked
      })
    },
    }, 
    components:{
      HeaderComp
    },

    beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },
  }
  </script>
  
  <style scoped>
  .install-button:hover{
      background-color: #87CEEB;
      color: #403b3e;
    }
  @media (max-width: 619px){
    
    #arrowRight{
      position: absolute;
      right: 20px;
      bottom: 65px;
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
      margin-top: 90px;
    }
    h2{
      background-color: #f4f4f4;
      color: black;
    }
    h4{
      background-color: #f4f4f4;
      color: black;
    }
    .install-button{
      position: absolute;
      top: 85px;
      right: 66px;
      color: #f4f4f4;
      background-color: #1B789D;
      border: 1px solid #ddd;
      width: 100px;
      height: 45px;
      border-radius: 15px;
    }
  }
  
  @media(min-width: 620px){

  h2{
      background-color: #f4f4f4;
      color: black;
    }
  h4{
      background-color: #f4f4f4;
      color: black;
    }
  #frame{
    background-color: #f4f4f4;
  }
  input {
      font-size: 16px;
      font-size: max(16px, 1em);
      font-family: inherit;
      padding: 0.25em 0.5em;
      background-color: #f4f4f4;
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
    margin-top: 90px;
  }

  #arrowRight{
    position: absolute;
    right: 20px;
    bottom: 65px;
    color: white;
  }
  .install-button{
      position: absolute;
      top: 120px;
      right: 66px;
      color: #f4f4f4;
      background-color: #1B789D;
      border: 1px solid #ddd;
      width: 100px;
      height: 45px;
      border-radius: 15px;
    } 
}
 </style>
  