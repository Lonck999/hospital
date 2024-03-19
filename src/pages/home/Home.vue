<template>
    <div class="home">
        <Carousel />
        <Search />
        <el-row gutter="20">
            <el-col :span="20">
                <Sort />
                <Region />
                <div class="hospital">
                    <Card class="card" v-for="( item, index ) in hasHospitalArr" :key="index" :hospitalInfo="item" />
                </div>
                <el-pagination v-model:current-page="pageNow" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                    :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
                    @current-change="currentChange" @size-change="sizeChange" />
            </el-col>
            <el-col :span="4">456</el-col>
        </el-row>
    </div>
</template>
    
<script setup lang='ts'>
// 輪播圖
import Carousel from './carousel/Carousel.vue'
// 搜索
import Search from './search/Search.vue'
// 排序
import Sort from './sort/Sort.vue'
// 地區
import Region from './region/Region.vue'
// 醫院訊息
import Card from './card/Card.vue'

import { ref, onMounted } from 'vue'

import { reqHospital } from '@/api/home/home.ts'

let pageNow = ref<number>(1)
let pageSize = ref<number>(10)
let hasHospitalArr = ref([])
let total = ref(0)

onMounted(() => {
    getHospitalInfo()
})

const getHospitalInfo = async () => {
    let result: any = await reqHospital(pageNow.value, pageSize.value)
    if (result.status === 200) {
        hasHospitalArr.value = result.data.data.content
        total.value = result.data.data.totalElements
    }
}

const currentChange = () => {
    getHospitalInfo()
}

const sizeChange = () => {
    pageNow.value = 1
    getHospitalInfo()
}
</script>
    
<style scoped lang="scss">
.home {
    max-width: 1200px;
    width: 100%;
    margin-top: 6%;
}

.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        width: 48%;
        margin: 10px 0;
    }
}
</style>