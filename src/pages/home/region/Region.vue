<template>
    <div class="region">
        <div class="content">
            <div class="left">地區：</div>
            <ul>
                <!-- <li v-for="(r, index) in regionList" :key="index" class="active">{{ r }}</li> -->
                <li :class="{ active: activeFlag == '' }" @click="changeRegion('')">全部</li>
                <li v-for="region in RegionArr" :key="region.value" @click="changeRegion(region.value)"
                    :class="{ active: activeFlag == region.value }">{{ region.name }}</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { reqHospitalArea } from '@/api/home/home'
import type { HospitalAreaResponseData, HospitalAreaArr } from '@/api/home/type'
import { onMounted, ref } from 'vue';

let RegionArr = ref<HospitalAreaArr>([])
let activeFlag = ref<string>('')

onMounted(() => {
    getRegion()
})

const getRegion = async () => {
    let result: HospitalAreaResponseData = await reqHospitalArea('Beijin')
    if (result.status === 200) {
        RegionArr.value = result.data.data
    }
}

const changeRegion = (region: string) => {
    activeFlag.value = region
    $emit('getRegion', region)
}

let $emit = defineEmits(['getRegion'])


</script>
    
<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top: 10px;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            max-width: 48px;
            width: 100%;
        }

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                margin-right: 10px;
                margin-bottom: 10px;

                &.active {
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
}
</style>