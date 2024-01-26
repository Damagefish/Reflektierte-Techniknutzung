<template>

    <h4>Wir müssen uns auf die obersten Prioritäten konzentrieren, um wirklich effektiv zu sein.</h4>
    <h4>Überlege dir ein langfristiges Ziel, dass du erreichen möchtest und wähle den passenden Lebensbereich aus.</h4>
    <h4>Beschreibe außerdem kurz, wie dein aktueller Stand ist.</h4>
    <div id= "tags">
        <LebensbereicheComp/>
    </div>
    <div id = "SollZustand">
        <select>
            <option>Ich möchte</option>
            <option>Ich sollte</option>
            <option>Ich will</option>
        </select>
        <input v-model="aspiration"/>
    </div>
    <div id="IstZustand">
        <select>
            <option>Ich habe</option>
            <option>Ich kann</option>
            <option>Ich beherrsche</option>
        </select>
        <input v-model="istZustand"/>
        <div>
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="{setAspiration(); setIstZustand();}" />
        </div>
    </div>
    
    </template>
    
    <script>
    import LebensbereicheComp from '@/components/LebensbereicheComp.vue'
    export default{
    
        data(){
            return{
                tags: [], 
                aspiration: '', 
                istZustand: '',
            }
    
        },
        components:{
            LebensbereicheComp
        }, 
        methods:{
            setAspiration(){
                this.$store.commit('setAspiration', this.aspiration);
            },
            setIstZustand(){
                this.$store.commit('setIstZustand', this.istZustand);
            },
        }
    }
    </script>
    
    <style>
    
    
    </style>