<template>
  <div class="lebensbereiche-comp">
    <div class="frame">
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
      <div class="bottom-border"></div>
    </div>
    <div class="add-more-container">
      <p>Möchtest du weitere Lebensbereiche hinzufügen?</p>
      <button @click="addMoreTags">Hinzufügen</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6'],
      selectedTags: [],
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
    addMoreTags() {
      // Beispiel: Füge drei neue Tags hinzu
      const newTags = ['TagX'];
      this.tags = [...this.tags, ...newTags];
    },
  },
};
</script>

<style scoped>
.lebensbereiche-comp {
  width: 50%;
  margin: auto;
}

.frame {
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
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

.bottom-border {
  position: absolute;
  bottom: -1px;
  left: 20px;
  right: 20px;
  height: 1px;
  background-color: #ddd;
}

.add-more-container {
  text-align: center;
  margin-top: 20px;
}

.add-more-container p {
  margin-bottom: 20px;
}

.add-more-container button {
  background-color: #e0e0e0;
  border: 1px solid #d3d3d3;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 8px;
}

.add-more-container button:hover {
  box-shadow: 5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff;
}
</style>