<template>
    <div>
        <div class="input-wrapper">
            <input type="text" v-model.trim="tag" @keypress.prevent.stop.enter="addTag">
            <button @click.prevent.stop="addTag">Add</button>
        </div>

        <div class="tags">
            <textfield class="tag" v-for="(tag, index) in tags" :key="index">
                <div style="page-break-after: always;"></div>
                <div id = "box">
                <span>{{ tag }}</span>
                <span @click="tags.splice(index, 1)">&times;</span>
                </div>
            </textfield>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            value: {
                type: Array,
                default: () => []
            }
        },
        watch: {
            tags(n, o) {
                this.$emit('input', n);
            }
        },

        data() {
            return {
                tag: '',
                tags: this.value || []
            };
        },

        methods: {
            addTag() {
                if (this.tag && ! this.tags.includes(this.tag)) {
                    this.tags.push(this.tag);
                    this.tag = '';
                }
            }, 
            addBasicTags(tags){
                this.tag = 'Gesundheit';
                if(!this.tags.includes(this.tag)){
                    this.tags.push(this.tag);
                    }    
            }, 
            beforeMount() {
               addBasicTags();
            },
        }
    }
</script>

<style>

#box{
    background-color: green;
    color: white;
    margin-left: 856px;
    margin-right: 856px;
    margin-top: 10px;
}

</style>