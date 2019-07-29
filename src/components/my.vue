<template>
    <div class="my">
        <div class="my-header">
            <div class="my-hd-one">
                <div>
                    <i class="el-icon-chat-dot-round"></i>
                    <p>消息</p>
                </div>
            </div>
            <div class="my-hd-login">
                <img src="./../../static/img/11.png" alt="">
                <router-link to="/login" tag="div">
                    <span>点击登录</span>
                    <p>车源推荐更精准</p>
                </router-link>
            </div>
            <div class="my-hd-two">
                <div>
                    <span>0</span>
                    <p>购物车</p>
                </div>
                <div>
                    <span>0</span>
                    <p>我的资讯</p>
                </div>
                <div>
                    <span>0</span>
                    <p>浏览历史</p>
                </div>
                <div>
                    <span>0</span>
                    <p>我的订阅</p>
                </div>
            </div>
            <div class="my-hd-three">
                <div>
                    <img src="./../../static/img/12.png" alt="">
                    <p>我卖的车</p>
                </div>
                <div>
                    <img src="./../../static/img/13.png" alt="">
                    <p>我的分期</p>
                </div>
                <div>
                    <img src="./../../static/img/14.jpg" alt="">
                    <p>我的合同</p>
                </div>
                <div>
                    <img src="./../../static/img/15.png" alt="">
                    <p>优惠券</p>
                </div>
            </div>
        </div>

        <div class="my-content">
            <div class="my-ct-one">
                <ul>
                    <li>
                        <div>我的预约</div>
                        <div>></div>
                    </li>
                    <li>
                        <div>优信养车</div>
                        <div>
                            优信认证,品质保障   >
                        </div>
                    </li>
                    <li>
                        <div>我的新车</div>
                        <div>></div>
                    </li>
                </ul>
            </div>

            <div class="my-ct-two">
                <ul>
                    <li>
                        <div>我的预约</div>
                        <div>></div>
                    </li>
                    <li>
                        <div>优信养车</div>
                        <div>
                            优信认证,品质保障   >
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name:'my'
}
</script>

<style lang="scss" scoped>
    .my{
        width: 100%;
        height: 100%;
        background: white;
        .my-header{
            width: 100%;
            height: calc(590rem / (1080/320*20));
            background: #f6520f;
            color: white;
            position: relative;
            .my-hd-one{
                width: 100%;
                height: calc(155rem / (1080/320*20));
                // border: 1px solid;
                position: relative;
                div{
                    position: absolute;
                    right: calc(40rem / (1080/320*20));
                    top: calc(30rem / (1080/320*20));
                    i{
                        font-size: calc(55rem / (1080/320*20));
                    }
                }
            }
            .my-hd-login{
                width: calc(500rem / (1080/320*20));
                height: calc(160rem / (1080/320*20));
                margin-left: calc(60rem / (1080/320*20));
                // background: hotpink;
                display: flex;
                position: relative;
                img{
                    width: calc(160rem / (1080/320*20));
                    height: calc(160rem / (1080/320*20));
                }
                div{
                    margin-left: calc(40rem / (1080/320*20));
                    span{
                        font-size: calc(50rem / (1080/320*20));
                        position: absolute;
                        top: calc(20rem / (1080/320*20));
                    }
                    p{
                        position: absolute;
                        top: calc(110rem / (1080/320*20));
                    }
                }
            }
            .my-hd-two{
                width: calc(845rem / (1080/320*20));
                height: calc(230rem / (1080/320*20));
                // background: hotpink;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                div{
                    margin-top: calc(55rem / (1080/320*20));
                    text-align: center;
                    span{
                        font-size: calc(50rem / (1080/320*20));
                        font-family: "黑体"
                    }
                    p{
                        margin-top: calc(30rem / (1080/320*20));
                    }
                }
            }
            .my-hd-three{
                width: calc(990rem / (1080/320*20));
                height: calc(240rem / (1080/320*20));
                position: absolute;
                background: white;
                display: flex;
                color: black;
                justify-content: space-around;
                margin-left: calc(45rem / (1080/320*20));
                border-radius: calc(20rem / (1080/320*20));
                div{
                    flex: 1;
                    text-align: center;
                }
                img{
                    width: calc(105rem / (1080/320*20));
                    height: calc(105rem / (1080/320*20));
                    margin-top: calc(30rem / (1080/320*20));
                }
                p{
                     margin-top: calc(20rem / (1080/320*20));
                }
            }
        }
        .my-content{
            background: #f7eded;
            padding-top: calc(240rem / (1080/320*20));
            .my-ct-one{
                width: calc(990rem / (1080/320*20));
                height: calc(440rem / (1080/320*20));
                margin: 0 auto;
                background: white;
                border-radius: calc(20rem / (1080/320*20));
                ul{
                    list-style: none;
                    li{
                        display: flex;
                        width: calc(990rem / (1080/320*20));
                        height: calc(146rem / (1080/320*20));
                        line-height: calc(146rem / (1080/320*20));
                        justify-content: space-between;
                        div:nth-of-type(1){
                            margin-left: calc(40rem / (1080/320*20));
                            font-size: calc(40rem / (1080/320*20));
                        }
                        div:nth-of-type(2){
                            margin-right: calc(40rem / (1080/320*20));
                            color: #d9bcb8;
                        }
                    }
                }
            }
            .my-ct-two{
                width: calc(990rem / (1080/320*20));
                height: calc(360rem / (1080/320*20));
                margin-top: calc(65rem / (1080/320*20));
                margin: 0 auto;
                border-radius: calc(20rem / (1080/320*20));
                padding-top: calc(65rem / (1080/320*20));
                ul{
                    list-style: none;
                    
                background: white;
                    li{
                        display: flex;
                        width: calc(990rem / (1080/320*20));
                        height: calc(146rem / (1080/320*20));
                        line-height: calc(146rem / (1080/320*20));
                        justify-content: space-between;
                        div:nth-of-type(1){
                            margin-left: calc(40rem / (1080/320*20));
                            font-size: calc(40rem / (1080/320*20));
                        }
                        div:nth-of-type(2){
                            margin-right: calc(40rem / (1080/320*20));
                            color: #d9bcb8;
                        }
                    }
                }
            }
        }
    }
</style>
