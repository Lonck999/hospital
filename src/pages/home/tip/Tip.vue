<template>
    <div class="tip">
        <div class="deparment">
            <div class="header">
                <div class="left">
                    <img src="@/assets/sitemap.png" alt="">
                    <span>科別</span>
                </div>
                <div class="right">
                    <span>全部</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
            <div class="content">
                <ul>
                    <li>神經內科</li>
                    <li>消化內科</li>
                    <li>呼吸內科</li>
                    <li>內科</li>
                    <li>神經外科</li>
                    <li>婦科</li>
                    <li>產科</li>
                    <li>兒科</li>
                </ul>
            </div>
        </div>
        <div class="notice">
            <div class="header">
                <div class="left">
                    <img src="@/assets/cloud-computing.png" alt="">
                    <span>平台公告</span>
                </div>
                <div class="right">
                    <span>全部</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
            <div class="content">
                <ul>
                    <li>123123123123123</li>
                    <li>456456456456456</li>
                    <li>789789789789789</li>
                </ul>
            </div>
        </div>
        <div class="notice">
            <div class="header">
                <div class="left">
                    <img src="@/assets/stop.png" alt="">
                    <span>停診公告</span>
                </div>
                <div class="right">
                    <span>全部</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
            <div class="content">
                <ul>
                    <li>123123123123123</li>
                    <li>456456456456456</li>
                    <li>789789789789789</li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped lang="scss">
.tip {
    color: #7f7f7f;

    .deparment {

        .header {
            display: flex;
            justify-content: space-between;

            .left {
                display: flex;

                span {
                    margin-left: 5px;
                }
            }

            .right {
                display: flex;
                align-items: center;
            }
        }

        .content {

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                li {
                    width: 40%;
                    margin-top: 20px;
                }
            }
        }
    }

    .notice {
        margin-top: 20px;

        .header {
            display: flex;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;
                gap: 3px;
            }

            .right {
                display: flex;
                align-items: center;
            }
        }

        .content {

            ul {

                li {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>