<template>
    <div>
        <h4>Moin! Wähle zuerst die Lebensbereiche aus, die dir besonders wichtig sind. 
            Stell dir folgende Fragen, um herauszufinden, was du in deinen Lebensbereichen erreichen möchtest: 
            <div style="page-break-after: always;"></div>
            <i>Was ist dir im Leben besonders wichtig?</i>
            <div style="page-break-after: always;"></div>
            <i>Was macht dich glücklich?</i>
            <div style="page-break-after: always;"></div>
            <i>Was möchtest du erreichen?</i>
        </h4>
        <TagComponent/>
        <NewTag ref="TagComponent"/>
        <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
        </div>
</template>

<script>

import NewTag from '@/components/NewTag.vue'
import TagComponent from '@/components/TagComponent.vue'
import Vue from 'vue';
export default {
    components:{
        NewTag,
        TagComponent
    },
    methods:{
        addTag(){
            this.$refs.TagComponent.addTag();
        }
    }
}
</script>


<style>


</style>
