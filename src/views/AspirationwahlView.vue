<template>

<h4>Wir müssen uns auf die obersten Prioritäten konzentrieren, um wirklich effektiv zu sein.</h4>
<h4>Überlege dir ein langfristiges Ziel, dass du erreichen möchtest und wähle den passenden Lebensbereich aus.</h4>
<h4>Beschreibe außerdem kurz, wie dein aktueller Stand ist.</h4>
<div id= "tags">
    <TagComponent/>
</div>
<div id = "SollZustand">
    <select>
        <option>Ich möchte</option>
        <option>Ich sollte</option>
        <option>Ich beherrsche</option>
    </select>
    <input/>
</div>
<div id="IstZustand">
    <select>
        <option>Ich habe</option>
        <option>Ich kann</option>
        <option>Ich beherrsche</option>
    </select>
    <input/>
    <div>
    <font-awesome-icon :icon="['fas', 'circle-arrow-right']" />
    </div>
</div>

</template>

<script>
import TagComponent from '@/components/TagComponent.vue'
export default{

    components:{
        TagComponent
    }
}
</script>

<style>


</style>
