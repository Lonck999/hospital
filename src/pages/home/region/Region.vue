<template>
    <div class="region">
        <div class="content">
            <div class="left">{{ region }}</div>
            <ul>
                <!-- <li v-for="(r, index) in regionList" :key="index" class="active">{{ r }}</li> -->
                <li class="active">全部</li>
                <li>三重區</li>
                <li>中和區</li>
                <li>永和區</li>
                <li>蘆洲區</li>
                <li>土城區</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    const region = ref('地區：')
    // const regionList = ref(['全部', '三重區', '中和區', '永和區', '蘆洲區', '土城區'])
    
</script>
    
<style scoped lang="scss">
    .region{
        color: #7f7f7f;
        margin-top: 10px;

        .content{
            display: flex;

            .left{
                margin-right: 10px;
                max-width: 48px;
                width: 100%;
            }

            ul{
                display: flex;
                flex-wrap: wrap;

                li{
                    margin-right: 10px;
                    margin-bottom: 10px;

                    &.active{
                        color: #55a6fe;
                        font-weight: 900;
                    }
                }

                li:hover{
                    color: #55a6fe;
                    cursor: pointer;
                }
            }
        }
    }
</style>