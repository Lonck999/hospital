<template>
    <div class="hospital">
        <div class="menu">
            <div class="top">
                <el-icon><HomeFilled /></el-icon>
                <p> / 醫院訊息</p>
            </div>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
                    <el-icon><icon-menu /></el-icon>
                    <span>預約掛號</span>
                </el-menu-item>
                <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>醫院詳情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>預約通知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                    <span>停診訊息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查詢/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail.ts';
import {
    Document,
    Menu as IconMenu,
    InfoFilled,
    Setting,
    Search,
    HomeFilled
} from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';

const $router = useRouter();
const $route = useRoute();
let detailStore = useDetailStore();
console.log('456',detailStore)

const changeActive = (path: string) => {
    $router.push(path);
}

onMounted(() => {
    detailStore.getHospital($route.query.hoscode);
})
</script>
    
<style scoped lang="scss">
.hospital {
    max-width: 1200px;
    width: 100%;
    margin-top: 80px;
    display: flex;

    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        .top{
            color: #7f7f7f;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
    }
    .content {
        flex: 8;
    }
}</style>