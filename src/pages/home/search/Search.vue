<template>
    <div class="search">
        <el-autocomplete clearable placeholder="輸入醫院名字" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
.search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    :deep(.el-input__wrapper) {
        width: 55vw;
        margin-right: 10px;
    }
}
</style>