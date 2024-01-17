<template>
    <div>
        <h4>Willkommen! Ich bin der Erzähler, der dich durch deine Zielsetzung begleitet</h4>
        <h4>Bevor wir beginnen: Wie soll ich dich ansprechen?</h4>
        <input v-model="name" placeholder="Wie soll ich dich ansprechen?"/>
        <p> Willkommen {{ name }}</p>
        <div id="arrowRight">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
    </div>
</template>

<script>
import vue from 'vue-class-component'
export default {
    data() {
        return {
            name: ''
        }
    }
}
</script>

<style scoped>

h4{
    color: black;
}
textarea{
    background-color: brown;
    color: white;
}
input{
    text-align: center;
    width: 170px;
}
.name{
    color: blue;
}
#arrowRight{
    justify-content: right;
    align-items: end;
}
</style>
