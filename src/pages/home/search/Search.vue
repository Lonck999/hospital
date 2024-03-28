<template>
    <div class="search">
        <el-autocomplete @select="goDetail" :trigger-on-focus="false" clearable placeholder="輸入醫院名字" v-model="hosname"
            :fetch-suggestions="fetchData" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { reqHospitalInfo } from '@/api/home/home.ts'
import type { HospitalInfo } from '@/api/home/type.ts'

let $router = useRouter()

const hosname = ref<string>('')

const fetchData = async (keyword: string, cd: any) => {
    let result: HospitalInfo = await reqHospitalInfo(keyword)
    console.log(result.data.data)
    let showData = result.data.data.map(item => {
        return {
            value: item.hosname,
            hoscode: item.hoscode
        }
    })

    cd(showData)
}

const goDetail = (item: any) => {
    $router.push({
        path: '/hospital/register',query: { hoscode:item.hoscode }
    })
}

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