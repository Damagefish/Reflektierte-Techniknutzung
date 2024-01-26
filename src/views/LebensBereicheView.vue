<template>
    <div>
        <h4>Moin {{ $store.getters.getName }}!
            Wähle zuerst die Lebensbereiche aus, die dir besonders wichtig sind. 
            Stell dir folgende Fragen, um herauszufinden, was du in deinen Lebensbereichen erreichen möchtest: 
            <div style="page-break-after: always;"></div>
            <i>Was ist dir im Leben besonders wichtig?</i>
            <div style="page-break-after: always;"></div>
            <i>Was macht dich glücklich?</i>
            <div style="page-break-after: always;"></div>
            <i>Was möchtest du erreichen?</i>
        </h4>
        <LebensbereicheComp ref ="Lebensbereiche"/>
        </div>
</template>

<script>

import LebensbereicheComp from '@/components/LebensbereicheComp.vue'
export default {
    components:{
        LebensbereicheComp
    },
    methods:{
    }
}
</script>


<style>


</style>