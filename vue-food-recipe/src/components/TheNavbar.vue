<script setup>

</script>

<template>
    <main>
       <img src="../assets/logofr.svg">
       <div class="nav-txt">
        <p>Home</p>
        <p>Search</p>
       </div> 
    </main>
</template>

<style scoped>
main{
    display: flex;
    justify-content: space-between;
    padding: 20px 120px;
    background: #FF9F59;
    align-items: center;
}
.nav-txt{
    display: flex;
    gap: 72px;
}
.nav-txt p{
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
}
</style>