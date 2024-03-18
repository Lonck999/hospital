<template>
    <div class="container">
        <Header />
        <div class="content">
            <router-view>
            </router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup lang='ts'>
import request from './utils/request';
import {  onMounted } from 'vue';
onMounted(()=>{
    request.get('/hosp/hospital/1/10').then(res=>{
        console.log('請求回來了',res);
    })
})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        max-width: 1200px;
        width: 100%;
        min-height: 700px;
    }
}
</style>