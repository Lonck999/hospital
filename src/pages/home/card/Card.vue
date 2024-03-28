<template>
    <el-card class="box-card" shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospital-name">
                    {{ hospitalInfo.hosname }}
                </div>
                <div class="tip">
                    <div class="sort">
                        <img src="../../../assets/hospital.png" alt="">
                        <span>{{ hospitalInfo.param.hostypeString }}</span>
                    </div>
                    <div class="time">
                        <img src="../../../assets/clock.png" alt="">
                        <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}開始</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>
    
<script setup lang='ts'>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

let $router = useRouter()

const goDetail = () => {
    $router.push({
        path: '/hospital/register',query: { hoscode:props.hospitalInfo.hoscode }
    })
}

let props = defineProps(['hospitalInfo'])
// console.log(hos)
</script>
    
<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: space-between;

    .right {
        img {
            max-width: 50px;
            width: 100%;
        }
    }

    .left {
        width: 60%;

        .tip {
            color: #7f7f7f;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            .sort,
            .time {
                display: flex;
                align-items: center;

                span {
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>