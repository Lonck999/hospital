<template>
    <div class="sort">
        <h1>醫院：</h1>
        <div class="content">
            <div class="left">分類：</div>
            <ul class="hospital">
                <li :class="{ active: activeFlag == '' }" @click="changeArea('')">全部</li>
                <li v-for="area in AreaArr" :key="area.value" @click="changeArea(area.value)"
                    :class="{ active: activeFlag == area.value }">{{ area.name }}</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { reqHospitalArea } from '@/api/home/home'
import type { HospitalAreaResponseData, HospitalAreaArr } from '@/api/home/type'
import { onMounted, ref } from 'vue';

let AreaArr = ref<HospitalAreaArr>([])

let activeFlag = ref<string>('')

onMounted(() => {
    getAreaList()
})

// 獲取醫院分類
const getAreaList = async () => {
    let result: HospitalAreaResponseData = await reqHospitalArea('HosType')
    if (result.data.code === 200) {
        AreaArr.value = result.data.data
    }
}

// 切換分類
const changeArea = (area: string) => {
    activeFlag.value = area
    $emit('getArea', area)
}

let $emit = defineEmits(['getArea'])
</script>

<style scoped lang="scss">
.sort {
    color: #7f7f7f;

    h1 {
        font-weight: 900;
        margin: 10px 0;
    }

    .content {
        display: flex;

        .left {
            margin-right: 10px;
        }

        .hospital {
            display: flex;

            li {
                margin-right: 10px;
            }

            & .active {
                color: #55a6fe;
                font-weight: 900;
            }
        }

        li:hover {
            color: #55a6fe;
            cursor: pointer;
        }
    }
}
</style>