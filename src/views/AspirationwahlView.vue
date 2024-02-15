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
    <div class = "input-wrapper">
    <div id = "SollZustand">
            <textfield id = "soll-textfield">
                Das möchte ich im Leben erreichen:
            </textfield>
            <input v-model="aspiration" placeholder="Meine Aspiration"/>
    </div>
        <div id="IstZustand">
            <textfield id = "ist-textfield">So sieht mein aktueller Stand aus:</textfield>
            <input v-model="istZustand" placeholder= "Mein Ist-Zustand"/>
        </div>
    </div>
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click="{setAspiration(); setIstZustand(); setAspirationTags(); addAspiration(); $router.push('/meilensteine-waehlen') }" id = "arrowRight"/>

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
            addAspiration(){
                this.$store.commit('addAspiration', this.aspiration)
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

@media (min-width: 620px) and (max-width: 1280px){ /**Tablet Ansicht */

#arrowRight{
    position: absolute;
    right: 162px;
    bottom: 295px;
    margin-left: 382px;
    margin-top: 48px;
    height: 45px;
    color: #f4f4f4;
  }
#circlePlus{
  height: 40px;
  color: #f4f4f4;
}
.tags-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
input {
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #f4f4f4;
    border: 2px solid var(--input-border);
    border-radius: 4px;
    width: 188px;
    height: 30px;
    margin-right: 10px;
    margin-top: 1px;
  }
  .input-wrapper{
    display:flex;
    justify-content: center;
    margin-top: 10px;
  }
  #soll-textfield{
    margin-right: 10px;
  }
  #ist-textfield{
    margin-right: 27px;
  }
}

@media (max-width: 619px){ /**Handy-Ansicht*/

input {
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #f4f4f4;
    border: 2px solid var(--input-border);
    border-radius: 4px;
    width: 190px;
    height: 20px;
    margin-right: 10px;
    margin-top: 1px;
}
#circlePlus{
  height: 30px;
  color: #f4f4f4;
}
.input-wrapper{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
  }
#arrowRight{
    position: absolute;
    right: 20px;
    bottom: 65px;
    margin-left: 253px;
    margin-top: 208px;
    height: 45px;
    color: #f4f4f4;
  }
.tags-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 15px;
}
#IstZustand{
    margin-top: 15px;
}
}
.lebensbereiche-comp {
    width: 50%;
    margin: auto;
    }

.tag {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
  background-color: #928471;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
  
    .tag:hover {
    background-color: #c0c0c0;
    }
  
    .tag.selected {
    background-color: #85A0A9;
    color: #fff;
    box-shadow: inset 5px 5px 10px #5A6C9B, inset -5px -5px 10px #687DA0;
    }
    </style>