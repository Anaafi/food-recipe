<script setup>
import TheNavbar from '../components/TheNavbar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <TheNavbar />
    <div class="content">
      <div class="title">
        <h2>Find recipes for the ingredients you have on hand</h2>
        <RouterLink to="/list"><button>Search Now</button></RouterLink>
      </div>
      <div>
        <img src="../assets/food.png">
      </div>
      
    </div>
  </main>
</template>

<style scoped>
main{
  background: #FF9F59;

}
.content{
  display: flex;
  justify-content: space-between;
  padding-left: 120px;
  padding-top: 50px;
  
}
.title{
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}
.title h2{
  color: #000;
  font-family: IBM Plex Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 62.4px */
  letter-spacing: -1.92px;

}
button{
  border-radius: 8px;
  background: #000;
  padding: 20px 60px;
  color: #FFF;
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.96px;
}
</style>