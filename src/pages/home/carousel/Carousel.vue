<template>
    <div>
        <el-carousel height="350px">
            <el-carousel-item v-for="item in 1" :key="item">
                <img class="banner" src="../../../assets/web-banner1.png" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">

.banner {
    width: 100%;
    height: 350px;
}
</style>