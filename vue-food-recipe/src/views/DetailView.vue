<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '../stores/counter'
import { onMounted } from 'vue';

const recipeStore = useRecipeStore();
//console.log(recipeStore)
const route = useRoute();
recipeStore.updateRecipe(route.params.strMeal);
//recipeStore.getRecipeData();
//console.log(recipeStore.recipeData)

onMounted(() => {recipeStore.getRecipeData();
    console.log(recipeStore.recipeData)
})

</script>

<template>
    <main>
        <TheNavbar />
        <div>
            <p> {{ recipeStore.recipeData[0]?.strMeal }} </p>
            
        </div>
    </main>
</template>

<style scoped>

</style>