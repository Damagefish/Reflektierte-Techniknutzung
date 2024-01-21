<template>

<div class = "tag" >
    <button v-bind:class="{'grey': !clickedFirst, 'green': clickedFirst}" @click ="(clickedFirst = !clickedFirst), addBereich('Gesundheit')">
        Gesundheit
    </button>
    <button v-bind:class="{'grey': !clickedSecond, 'green': clickedSecond}" @click ="(clickedSecond = !clickedSecond), addBereich('Sport')">
        Sport
    </button>
    <button v-bind:class="{'grey': !clickedThird, 'green': clickedThird}" @click ="(clickedThird = !clickedThird), addBereich('Familie')">
        Familie
    </button>
</div>

</template>

<script>
export default{
     data(){
     return{
        clickedFirst: false,
        clickedSecond: false,
        clickedThird: false,
        lebensbereiche: []
      }
    }, 
    methods:{
        addBereich(Tag){
            this.lebensbereiche.push(Tag)
        }
    }
}
</script>

<style>

.green{
    background-color: green;
    color: white; 
    margin-left: 10px;
}
.grey{
    background-color: #928471;
}

</style>