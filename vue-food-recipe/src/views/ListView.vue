<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRecipeStore } from '../stores/counter'
import { onUpdated } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const recipeStore = useRecipeStore();
recipeStore.getRecipeData();
onUpdated(() => {recipeStore.getRecipeData()})
</script>

<template>
  <main>
    <div>
        <TheNavbar />
        <div class="box">
            <h2>What ingredients do you have?</h2>
            <div class="input-box">
                <img src="../assets/charm_search.png">
                <input v-model="recipeStore.recipename" type="text" placeholder="noodles">
            </div>
        </div>
        <div class="card-container">
            <div @click="router.push({ name: 'detail', params: { strMeal: recipe.strMeal}} )" class="card" v-for="recipe in recipeStore.recipeData" :key="recipe.idMeal">
                <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
                <p>{{ recipe.strMeal }}</p>
            </div>
        </div>
    </div>
  </main>
</template>

<style>
.box{
    background: #FF9F59;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /*border: 1px solid red;*/
    padding-top: 40px;
    padding-bottom: 78px;
}
.box h2{
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 32px */
    letter-spacing: -1.28px;
}
.input-box{
    display: flex;
    padding: 16px 0px 16px 22px;
    gap: 16px;
    border-radius: 16px;
    background: #FBFBFB;
    align-items: center;
    width: 590px;

}
input{
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 24px */
  
    border: none;
}
.card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: #F8F8F8;
    padding: 100px 120px;
    align-items: center;
    justify-content: center;
}
.card{
    display: flex;
    flex-direction: column;
    padding: 0px 18px 28px 18px;
    background: #fff;
    gap: 20px;
    border-radius: 16px;
}
.card img{
    width: 248px;
    height: 229px;
    border-radius: 8px;
}
@media (min-width: 1024px) {

}
</style>
