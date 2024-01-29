<template>
  <div class="lebensbereiche-comp">
    <div>
      
      <div class="tags-container">
        <div
          class="tag"
          v-for="tag in tags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="{ 'selected': selectedTags.includes(tag) }"
        >
          {{ tag }}
        </div>
      </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Lebensbereich hinzufügen" v-model.trim="tag" @keypress.prevent.stop.enter="addTag">
            <font-awesome-icon :icon="['fas', 'circle-plus']" @click.prevent.stop="addTag" id = "circlePlus"/>
          </div>
        </div>
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click = "setSelectedTags(); $router.push('/AspirationwahlView')" id = "arrowRight"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['eigene Gesundheit', 'Gesundheit anderer', 'Familie', 'Einkommen', 'Soziales', 'Beruf' ],
      selectedTags: [],
      tag: ''
    };
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    addTag() {
       if (this.tag && ! this.tags.includes(this.tag)) {
        this.tags.push(this.tag);
        this.tag = '';
        }
    }, 
    setSelectedTags(){
      this.$store.commit('setSelectedTags', this.selectedTags);
    }
  },
};
</script>

<style scoped>

@media (min-width: 620px) and (max-width: 1280px){

  #arrowRight{
      margin-left: 182px;
      height: 45px;
      color: #f4f4f4;
    }
  #circlePlus{
    height: 45px;
    color: #f4f4f4;
  }
  .tags-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
      margin-top: 4px;
    }
    .input-wrapper{
      display:flex;
      justify-content: center;
    }
    
}
@media (max-width: 619px){

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
    }
  #arrowRight{
      margin-left: 182px;
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
  background-color: #776661;
}

.tag.selected {
  background-color: #2ecc71;
  color: #fff;
 /* box-shadow: inset 5px 5px 10px #6C86C2, inset -5px -5px 10px #7893B6;*/
}
</style>