<template>
    <div class="lebensbereiche-comp">
      <div class="frame2">
        
        <div class="tags-container">
          <div
          class="tag"
          id = "tag"
          v-for="tag in tags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="{  }"
        >
          {{ tag }}
          </div>
        </div>
      </div>
      <div class="frame3"> 
      <font-awesome-icon :icon="['fas', 'circle-arrow-right']" @click = "setSelectedTags(); $router.push('/AspirationwahlView')"/>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tags: this.$store.getters.getSelectedTags,
      };
    },
    methods: {
      toggleTag(tag) {
        if (this.selectedTags.includes(tag)) {
          this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
        }
        document.getElementById("tag").classList.toggle("selected")
    },
  }, 
  computed: {
      selectedTags(){
        const selectedTags = this.$store.getters.getSelectedTags
        return selectedTags
      }
  }
} 
  </script>
  
  <style scoped>
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