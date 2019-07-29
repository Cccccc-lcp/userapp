<template>
    <div class="details">
        <div class="details-data" v-for="(item,key) in arr" :key="key">
            <router-link to='/' tag='div' class="ds-data-hui">返回</router-link>
            <div class="swiper-container ds-data-img">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,key) in list" :key="key">
                        <img :src='"http://localhost:81/image/"+item' />
                        
                    </div>
                </div>
            </div>

            <div class="ds-data-price">
                <div>
                    <span>{{item.total_prices}}</span>
                    <span>车价分析></span>
                    <p>原价  {{item.year_type}}万</p>
                </div>
                <img src="./../../static/img/26.png" alt="">
            </div>
            <div class="ds-data-title">
                <div class="ds-data-title-one">
                    <div>
                        <span>包物流</span>
                        <span>由西北仓运往北京</span>
                    </div>
                    <div>·•·</div>
                </div>
                <div class="ds-data-title-two">
                    {{item.model}}
                </div>
                <div class="ds-data-title-three">
                    优信金牌认证
                </div>
            </div>

            <div class="ds-data-payments">
                <img src="./../../static/img/27.png" alt="">    
            </div> 

            <div class="ds-data-archives">
                <div>车辆档案</div>
                <div>编号：{{item.number}}</div>
            </div>


            <div class="ds-data-detailed">
                <div class="ds-data-detailed-placingtime">
                    <div>{{item.particular_year}}</div>
                    <div>{{item.placingtimetime}}</div>
                </div>

                <div class="ds-data-detailed-mileage">
                    <div>表显里程</div>
                    <div>{{item.kilometre}}</div>
                </div>

                <div class="ds-data-detailed-sitecard">
                    <div>可异地上牌</div>
                    <div>{{item.sitecard}}</div>
                </div>

                <div class="ds-data-detailed-placingtime">
                    <div>颜色</div>
                    <div>{{item.color}}</div>
                </div>

                <div class="ds-data-detailed-mileage">
                    <div>旋轮增压</div>
                    <div>{{item.let}}</div>
                </div>

                <div class="ds-data-detailed-sitecard">
                    <div>提车时间</div>
                    <div>{{item.car_time}}</div>
                </div>

            </div>

            <div class="ds-data-function">
                <div>
                    <img src="./../../static/img/29.png" alt="">
                    <p>自动驻车</p>
                </div>
                <div>
                    <img src="./../../static/img/29.png" alt="">
                    <p>自动驻车</p>
                </div>
                <div>
                    <img src="./../../static/img/29.png" alt="">
                    <p>自动驻车</p>
                </div>
                <div>
                    <img src="./../../static/img/29.png" alt="">
                    <p>自动驻车</p>
                </div>
                <div>
                    <img src="./../../static/img/29.png" alt="">
                    <p>自动驻车</p>
                </div>
            </div>


        </div>
        <footer>
            <div>
                <img src="./../../static/img/28.png" alt="">
                <p>加入购物车</p>
            </div>
            <div>
                <button>
                    预约销售顾问
                </button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'detailss',
    data(){
        return{
            arr:this.$store.state.details,
            list:[],
            page:1
        }
    },
    created(){
        this.arr=this.$store.state.details;
        let arr = this.arr[0].particulars.split(",");
        this.list=arr;
        // console.log(this.list)
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {

        })
    }
    
}
</script>

<style lang="scss" scoped>

footer{
    width: calc(1080rem / (1080/320*20));
    height:calc(155rem / (1080/320*20));
    display: flex;
    div:nth-of-type(1){
        width: calc(230rem / (1080/320*20));
        height:calc(155rem / (1080/320*20));
        text-align: center;
        color: #afafaf;
        img{
            width: calc(70rem / (1080/320*20));
            height:calc(70rem / (1080/320*20));
            margin-top: calc(20rem / (1080/320*20));
        }
    }
    div:nth-of-type(2){
        width: calc(850rem / (1080/320*20));
        height:calc(110rem / (1080/320*20));
        border-left: calc(1rem / (1080/320*20)) solid red;;
        margin-top: calc(20rem / (1080/320*20));
        button{
            width: calc(745rem / (1080/320*20));
            height:calc(110rem / (1080/320*20));
            margin-left: calc(20rem / (1080/320*20));
            border-radius:  calc(50rem / (1080/320*20));
            outline: none;
            border: none;
            background: #fd7b01;
            color: white;
            font-size:  calc(40rem / (1080/320*20));
        }
    }

}
    .details{
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        display: flex;
        flex-direction: column;
        .details-data{
            flex: 1;
            overflow: auto;
        }
        .ds-data-hui{
            position: fixed;
            top: 0;
            z-index: 5;
        }
        .ds-data-img{
            width: calc(1080rem / (1080/320*20));
            height:calc(670rem / (1080/320*20));
            img{
                width: calc(1080rem / (1080/320*20));
                height:calc(670rem / (1080/320*20));
            }
        }
        .ds-data-price{
            width: calc(1080rem / (1080/320*20));
            height:calc(175rem / (1080/320*20));
            // border: 1px solid red;
            display: flex;
            background: #fe4703;
            justify-content: space-between;
            div{
                margin-left: calc(60rem / (1080/320*20));
                padding-top: calc(40rem / (1080/320*20));
                color: white;
                span:nth-of-type(1){
                    font-size: calc(50rem / (1080/320*20));
                }
                span:nth-of-type(2){
                    font-size: calc(40rem / (1080/320*20));
                    margin-left: calc(20rem / (1080/320*20));
                }
            }
            img{
                width: calc(260rem / (1080/320*20));
                height:calc(175rem / (1080/320*20));

            }
        }
        .ds-data-title{
            width: calc(960rem / (1080/320*20));
            height: calc(295rem / (1080/320*20));
            padding-top: calc(40rem / (1080/320*20));
            margin:  0 auto;
            // border: 1px solid red;
            .ds-data-title-one{
                width: calc(960rem / (1080/320*20));
                height: calc(85rem / (1080/320*20));
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                }
                div:nth-of-type(2){
                    color: #8c8e8d;
                    font-size: calc(50rem / (1080/320*20));
                }
                span:nth-of-type(1){
                    display: block;
                    width: calc(125rem / (1080/320*20));
                    height: calc(45rem / (1080/320*20));
                    background: #fe6239;
                    color: white;
                    text-align: center;
                    line-height: calc(45rem / (1080/320*20));
                }
                span:nth-of-type(2){
                    color: #d8d9db;
                    line-height: calc(60rem / (1080/320*20));
                    margin-left: calc(30rem / (1080/320*20));
                }
            }
            .ds-data-title-two{
                width: calc(960rem / (1080/320*20));
                height: calc(80rem / (1080/320*20));
                font-size: calc(40rem / (1080/320*20));
                font-size: '黑体';
            }
            .ds-data-title-three{
                width: calc(220rem / (1080/320*20));
                height: calc(55rem / (1080/320*20));
                background: #f8fcfd;
                color: #9a9da2;
                text-align: center;
                line-height: calc(55rem / (1080/320*20));
            }
        }
        .ds-data-payments{
                width: calc(960rem / (1080/320*20));
                height: calc(150rem / (1080/320*20));
                margin: 0 auto;
                img{
                    width: calc(960rem / (1080/320*20));
                    height: calc(150rem / (1080/320*20));
                }
        }
        .ds-data-archives{
            width: calc(1080rem / (1080/320*20));
            height: calc(165rem / (1080/320*20));
            border-left: calc(5rem / (1080/320*20)) solid #ef642b;
            display: flex;
            line-height: calc(165rem / (1080/320*20));
            padding-left: calc(60rem / (1080/320*20));
            padding-right: calc(60rem / (1080/320*20));
            justify-content: space-between;
            border-bottom:  calc(2rem / (1080/320*20)) solid #ebe9ea;
            div:nth-of-type(1){
                font-size: calc(55rem / (1080/320*20));
            }
            div:nth-of-type(2){
                color: #949293;
                font-size: calc(35rem / (1080/320*20));
            }
        }
        .ds-data-detailed{
            width: calc(960rem / (1080/320*20));
            height: calc(430rem / (1080/320*20));
            margin: 0 auto;
            border-bottom:  calc(2rem / (1080/320*20)) solid #ebe9ea;
            padding-top: calc(85rem / (1080/320*20));
            padding-bottom: calc(85rem / (1080/320*20));
            display: flex;
            flex-wrap: wrap;
            
            .ds-data-detailed-placingtime{
                width: calc(385rem / (1080/320*20));
                height: calc(130rem / (1080/320*20));
                // border: 1px solid red;
                div:nth-of-type(1){
                    color: #a19fa0;
                }
                div:nth-of-type(2){
                    font-family: "黑体";
                    font-size: calc(35rem / (1080/320*20));
                }
            }
            .ds-data-detailed-mileage{
                width: calc(400rem / (1080/320*20));
                height: calc(130rem / (1080/320*20));
                // border: 1px solid red;
                div:nth-of-type(1){
                    color: #a19fa0;
                }
                div:nth-of-type(2){
                    font-family: "黑体";
                    font-size: calc(35rem / (1080/320*20));
                }
            }
            .ds-data-detailed-sitecard{
                width: calc(160rem / (1080/320*20));
                height: calc(130rem / (1080/320*20));
                // border: 1px solid red;
                div:nth-of-type(1){
                    color: #a19fa0;
                }
                div:nth-of-type(2){
                    font-family: "黑体";
                    font-size: calc(35rem / (1080/320*20));
                }
            }
        }
        .ds-data-function{
            width: calc(960rem / (1080/320*20));
            height: calc(315rem / (1080/320*20));
            border: 1px solid red;
            margin: 0 auto;
            display: flex;
            overflow: hidden;
            div{
                width: calc(220rem / (1080/320*20));
                height:calc(315rem / (1080/320*20));
                text-align: center;
                img{
                    width: calc(150rem / (1080/320*20));
                    height: calc(200rem / (1080/320*20));
                }
            }
        }
    }
</style>
