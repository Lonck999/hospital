<template>
    <el-card class="box-card" shadow="hover">
        <div class="content">
            <div class="left">
                <div class="hospital-name">
                    德美診所
                </div>
                <div class="tip">
                    <div class="sort">
                        <img src="../../../assets/hospital.png" alt="">
                        <span>眼科</span>
                    </div>
                    <div class="time">
                        <img src="../../../assets/clock.png" alt="">
                        <span>08:00-17:00</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img src="../../../assets/logo.png" alt="">
            </div>
        </div>
    </el-card>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style lang="scss" scoped>
    .content{
        display: flex;
        justify-content: space-between;
        .right{
            img{
                max-width: 50px;
                width: 100%;
            }
        }
        .left{
            width: 60%;
            .tip{
                color: #7f7f7f;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;

                .sort, .time{
                    display: flex;
                    align-items:center;
                    span{
                        margin-left: 5px;
                    }
                }
            }
        }
    }
</style>