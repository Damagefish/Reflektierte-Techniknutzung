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

@media (min-width: 620px){ /*Tablet Ansicht*/

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
    
}
@media (max-width: 619px){ /*Smartphone Ansicht*/

  input {
      font-size: 16px;
      font-size: max(16px, 1em);
      font-family: inherit;
      padding: 0.25em 0.5em;
      background-color: #f4f4f4;
      width: 180px;
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
      flex-wrap: nowrap;
      margin-top: 10px;
    }
  #arrowRight{
      position: absolute;
      right: 20px;
      bottom: 65px;
      margin-left: 182px;
      margin-top: 40px;
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
  background-color: #85A0A9;
  color: #fff;
}
</style>