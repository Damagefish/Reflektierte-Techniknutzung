<template>
    <HeaderComp/>
    <div>
        <h4>Moin {{ $store.getters.getName }}!</h4>
            <h4>Wähle zuerst die Lebensbereiche aus, die dir besonders wichtig sind.</h4>
            <h4>Stell dir folgende Fragen, um herauszufinden, was du in deinen Lebensbereichen erreichen möchtest:</h4>
            <div style="page-break-after: always;"></div>
            <i>Was ist dir im Leben besonders wichtig?</i>
            <div style="page-break-after: always;"></div>
            <i>Was macht dich glücklich?</i>
            <div style="page-break-after: always;"></div>
            <i>Was möchtest du erreichen?</i>
        <LebensbereicheComp ref ="Lebensbereiche"/>
        </div>
</template>

<script>

import LebensbereicheComp from '@/components/LebensbereicheComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
export default {
    components:{
        LebensbereicheComp,
        HeaderComp
    },
    methods:{
    }
}
</script>


<style>


</style>