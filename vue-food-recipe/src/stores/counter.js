import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipeStore = defineStore('recipe', () => {
  const recipeData = ref([])
  const recipename = ref('')
  
  async function getRecipeData() {
    try {
      console.log(recipename.value)
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${recipename.value}`)
      recipeData.value = response.data.meals
    } catch (error) {
      console.error(error)
    }
  }

  function updateRecipe(name){
    recipename.value = name
  }

  return { recipeData, recipename,getRecipeData, updateRecipe}
})
