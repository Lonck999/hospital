<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="goHome">
                <img src="../assets/logo.png" alt="">
                <p>德霖網路預約掛號中心</p>
            </div>
            <div class="right">
                <p class="help">幫助中心</p>
                <p class="login">登入/註冊</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';

let $router = useRouter()

const goHome = () => {
    $router.push({
        path: '/home',
    })
}
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;

    .content {
        position: fixed;
        z-index: 999;
        max-width: 1200px;
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        container-type: inline-size;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 16%;
                margin-right: 10px;
            }

            p {
                font-size: 2cqw;
                color: #55a6fe;
            }
        }

        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2cqw;
            color: #939393;

            .help,
            .login {
                margin-right: 10px;
            }
        }
    }
}
</style>