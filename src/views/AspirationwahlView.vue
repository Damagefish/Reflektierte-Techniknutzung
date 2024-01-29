<template>
    <HeaderComp/>
    <h4>Wir müssen uns auf die obersten Prioritäten konzentrieren, um wirklich effektiv zu sein.</h4>
    <h4>Überlege dir ein langfristiges Ziel, dass du erreichen möchtest und wähle den passenden Lebensbereich aus.</h4>
    <h4>Beschreibe außerdem kurz, wie dein aktueller Stand ist.</h4>
    <div id= "tags">
        <div class="lebensbereiche-comp">
      <div class="frame2">
        
        <div class="tags-container">
          <div
          class="tag"
          id = "tag"
          v-for="tag in tags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="{ 'selected': tagsSelected.includes(tag)}"
        >
          {{ tag }}
          </div>
        </div>
      </div>
  </div>
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
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="{setAspiration(); setIstZustand(); setAspirationTags(); $router.push('/meilensteine-waehlen') }" />
    
    </template>
    
    <script>
    import LebensbereicheComp from '@/components/LebensbereicheComp.vue';
    import HeaderComp from '@/components/HeaderComp'
    export default{
    
        data(){
            return{
                aspiration: '', 
                istZustand: '',
                tags: this.$store.getters.getSelectedTags,
                tagsSelected: []
            }
        },
        components:{
            HeaderComp
        }, 
        methods:{
            setAspiration(){
                this.$store.commit('setAspiration', this.aspiration);
            },
            setIstZustand(){
                this.$store.commit('setIstZustand', this.istZustand);
            },
            setAspirationTags(){
                this.$store.commit('setAspirationTags', this.tagsSelected)
            },
            toggleTag(tag) {
                 if (this.tagsSelected.includes(tag)) {
                    this.tagsSelected = this.tagsSelected.filter((selectedTag) => selectedTag !== tag);
                } else {
                    this.tagsSelected.push(tag);
                }     
            },
        }
    }
    </script>
    
    <style>
    .lebensbereiche-comp {
    width: 50%;
    margin: auto;
    }
  
    .frame {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin-bottom: 5px;
    }
  
    .frame2 {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin-bottom: 5px;
    }
  
    .frame3{
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    }
    .tag {
    display: inline-block;
    padding: 8px 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    background-color: #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
  
    .tag:hover {
    background-color: #c0c0c0;
    }
  
    .tag.selected {
    background-color: #4caf50;
    color: #fff;
    box-shadow: inset 5px 5px 10px #357a38, inset -5px -5px 10px #61bd61;
    }
    </style>