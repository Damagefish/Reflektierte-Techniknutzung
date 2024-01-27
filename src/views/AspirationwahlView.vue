<template>
    <HeaderComp/>
    <h4>Wir müssen uns auf die obersten Prioritäten konzentrieren, um wirklich effektiv zu sein.</h4>
    <h4>Überlege dir ein langfristiges Ziel, dass du erreichen möchtest und wähle den passenden Lebensbereich aus.</h4>
    <h4>Beschreibe außerdem kurz, wie dein aktueller Stand ist.</h4>
    <div id= "tags">
       <selectedTags/>
    </div>
    <div id = "SollZustand">
        <textfield>
            Das möchte ich im Leben erreichen:
        </textfield>
        <input v-model="aspiration"/>
    </div>
    <div id="IstZustand">
        <textfield>So sieht mein aktueller Stand aus:</textfield>
        <input v-model="istZustand"/>
    </div>
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="{setAspiration(); setIstZustand();$router.push('/meilensteine-waehlen') }" />
    
    </template>
    
    <script>
    import LebensbereicheComp from '@/components/LebensbereicheComp.vue';
    import HeaderComp from '@/components/HeaderComp'
    import selectedTags from '@/components/SelectedTags.vue'
    export default{
    
        data(){
            return{
                tags: [], 
                aspiration: '', 
                istZustand: '',
            }
    
        },
        components:{
           // LebensbereicheComp,
            selectedTags, 
            HeaderComp
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