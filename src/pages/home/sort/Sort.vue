<template>
    <div class="sort">
        <h1>醫院：</h1>
        <div class="content">
            <div class="left">分類：</div>
            <ul class="hospital">
                <li class="active">全部</li>
                <li>小兒科</li>
                <li>眼科</li>
                <li>內科</li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style scoped lang="scss">
    .sort{
        color: #7f7f7f;

        h1{
            font-weight: 900;
            margin: 10px 0;
        }

        .content{
            display: flex;
           
            .left{
                margin-right: 10px;
            }

            .hospital{
                display: flex;

                li{
                    margin-right: 10px;
                }

                & .active{
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
</style>