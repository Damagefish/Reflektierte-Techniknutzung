<template>
    <div class="rContainer">
        <img class="mtg-image" :src="image"/>
        <div>
            <div>
                {{ label }} 
            </div>
            <div>
                 {{ attribute }}   
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'RecipeItem',
    data() {
        return{
            image: require('@/assets/mtg.jpg'),
            label: 'MTG',
            attribute: 'Knight, Crow'
        };
    }
}
</script>

<style scoped>
    .rContainer{
        border: 1px solid rgba(0, 0, 0, 2);
        padding: 8px;
        border-radius: 8px;
        margin: 8px;
        display: flex;
        gap: 8px;
    }

    .mtg-image{
        height: 60px;
    }
</style>