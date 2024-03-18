<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                <p>服務電話：(02)2981-2670</p>
            </div>
            <div class="right">
                <span>聯絡我們</span>
                <span>合作對象</span>
                <span>用戶協議</span>
                <span>隱私協議</span>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.bottom {
    width: 100%;
    height: 50px;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    container-type: inline-size;

    .content {
        max-width: 1200px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8cqw;

        .left{
            p{
                padding-left: 15px;
            }
        }

        .right{
            span{
                margin: 0 5px;
            }
        }
    }
}
</style>