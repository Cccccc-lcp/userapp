<template>
    <div class="home">
        <Headers></Headers>
        <div class="content">
            <div class="hm-nav">
                <div class="hm-nav-one">付一成开豪车</div>
                <div>大众</div>
                <div>宝马</div>
                <div>奥迪</div>
                <div>奔驰</div>
            </div>
            <!-- 轮播图 -->
            <div class="swiper-container hm-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./../../static/img/1.png" alt=""></div>
                    <div class="swiper-slide"><img src="./../../static/img/2.png" alt=""></div>
                    <div class="swiper-slide"><img src="./../../static/img/3.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            
            <div class="hm-calligraphy">
                <div>
                    <img src="./../../static/img/4.png" alt="">
                    <p>买车商城</p>
                </div>
                <div>
                    <img src="./../../static/img/5.png" alt="">
                    <p>买车商城</p>
                </div>
                <div>
                    <img src="./../../static/img/6.png" alt="">
                    <p>买车商城</p>
                </div>
                <div>
                    <img src="./../../static/img/7.png" alt="">
                    <p>买车商城</p>
                </div>
                <div>
                    <img src="./../../static/img/8.png" alt="">
                    <p>买车商城</p>
                </div>
            </div>
            <div class="hm-data">
                <div class="hm-data-img1">
                    <img src="./../../static/img/9.png" alt="">
                </div>
                <!-- 向上轮播 -->
                <div class="hm-data-swiper">
                    <img src="./../../static/img/10.png" alt="">
                    <div class="swiper-container hm-data-swiper1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide hm-data-swiper-s"><span>资讯</span><span>丨支持国产!当好SUV哪款口碑最好</span></div>
                            <div class="swiper-slide hm-data-swiper-s"><span>资讯</span><span>丨6万买二手车?这几款看着都不错!</span></div>
                            <div class="swiper-slide hm-data-swiper-s"><span>资讯</span><span>丨大天窗才过瘾!三万起搞懂夏日郊游1111</span></div>
                        </div>
                    </div>
                </div>
                <div class="hm-data-one">
                    <img src="./../../static/img/16.png" alt="">
                </div>
                <div class="hm-data-two">
                    <img src="./../../static/img/17.png" alt="">
                </div>

                <div class="hm-data-juimp">
                    <router-link to='/?type=' tag="div">全部</router-link>
                    <router-link to='/?type=Ratio ' tag="div">低首付</router-link>
                    <router-link to='/?type=easy_car' tag="div">无虑购</router-link>
                    <router-link to='/?type=performance' tag="div">性价比</router-link>
                </div>

                <div class="hm-data-three">
                    <ul id="ul">
                        <li  v-for="(item,key) in arr" :key="key"  @click="details(key)" class="li">
                            <img :src='"http://localhost:81/image/"+item.particulars.split(",")[0]' alt="" class="img">
                            <div class="hm-data-tltle">
                                {{item.model}}
                            </div>
                            <div class="hm-data-time">
                                {{item.particular_year}}/{{item.kilometre}}
                            </div>
                            <div class="hm-data-if">
                                <div class="hm-data-noreason">三天无理由</div>
                                <div class="hm-data-newcar">准新车</div>
                                <div class="hm-data-purchase">一成购</div>
                            </div>
                            <div class="hm-data-price">
                                {{item.total_prices}}
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper' 
import './../../node_modules/swiper/dist/css/swiper.css'
import Headers from './header'
import { async } from 'q';
export default {
    name:'home',
    components:{Headers},
    data(){
        return{
            arr:[],
            page:1,
            a:0,
            i:1,
            list:[]
        }
    },
    mounted(){
        var mySwiper = new Swiper('.hm-swiper', {
            autoplay: 5000,//可选选项，自动滑动
            loop:true,
            pagination : '.swiper-pagination',
        })
        var my=new Swiper('.hm-data-swiper1',{
            autoplay: 2000,//可选选项，自动滑动
            direction: 'vertical',
            loop:true,
        })


        var div = document.getElementsByClassName('content') 
        var div=div[1];
        let ul = document.getElementById('ul');  // 获取ul列表
        let isLoad = false; // 节流阀辅助变量
        var thiss=this;
        // 上拉加载
        div.addEventListener('scroll',function(){
            if(div.scrollHeight-div.scrollTop<650&& isLoad===false) {
                isLoad = true;
                thiss.i++;
                thiss.fnSend();
                setTimeout(function(){
                isLoad = false;
                },300)  //  节流阀
            }
        },false);

    },
    created(){
        this.axios.get(`api/car/carmsg/${this.page}`).then(res=>{
            this.arr=res.data;
        });
        this.juimp();
    },
    methods:{
        juimp(){
            var id=this.$route.query.type;
            var src=`api/car/carmsg/${this.page}?type=`+id;
            this.axios.get(src).then(res=>{
                this.arr=res.data;
            })
        },
        details(key){
            this.$store.commit('ADD_DETAILS',this.arr[key])
            this.$router.push('/details/'+key)
        },
      fnSend(){
            var id=this.$route.query.type;
            this.axios.get(`api/car/carmsg/${this.i}?type=${id}`).then(res=>{
                this.list=[...this.list,res.data];
                console.log(this.list)
                for(let i in this.list){
                    this.arr=this.arr.concat(this.list[i])
                }
                console.log(this.arr)

                // this.list=res.data;
                // for(var i in this.list){
                // var li=document.createElement("li");
                // li.className="li";
                // var img=document.createElement("img");
                // img.style.width="calc(490rem / (1080/320*20))";
                // img.style.height="calc(315rem / (1080/320*20))";

                // img.src="http://localhost:81/image/"+this.list[i].particulars.split(",")[0];
                // li.appendChild(img);
                // var ul=document.getElementById("ul");
                // // console.log(li)
                // ul.appendChild(li)
                // }
                

                // console.log(this.arr)
            })
    }
        
    },
    watch: {
        arr:function(a,b){
            if(a!=b){
                this.juimp();
            }
        },

        
    },
    
}
</script>

<style lang="scss" scoped>

.hm-data-juimp{
    width: calc(1080rem / (1080/320*20));
    height:calc(140rem / (1080/320*20));
    display: flex;
    justify-content: space-around;;
    align-content: center;
    line-height: calc(140rem / (1080/320*20));
    position: sticky;
    top:calc(0rem / (1080/320*20));
    background: white;
}


.hm-data-three{
    // justify-content: space-around;
    // margin-top: calc(70rem / (1080/320*20));
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .li{
            width: calc(490rem / (1080/320*20));
            height:calc(665rem / (1080/320*20));
            background: white;
            margin-top: calc(20rem / (1080/320*20));
            .img{  
                width: calc(490rem / (1080/320*20));
                height:calc(315rem / (1080/320*20));
            }
            .hm-data-tltle{
                width: calc(425rem / (1080/320*20));
                height:calc(110rem / (1080/320*20));
                margin: 0 auto;
                // border: 1px solid red;
                overflow: hidden;
                text-overflow: ellipsis;
                // white-space: nowrap;
                font-size: calc(40rem / (1080/320*20));
            }
            .hm-data-time{
                width: calc(425rem / (1080/320*20));
                height:calc(40rem / (1080/320*20));
                margin: 0 auto;
                color: #dcdcdc;
            }
            .hm-data-if{
                width: calc(425rem / (1080/320*20));
                height:calc(40rem / (1080/320*20));
                margin: 0 auto;
                margin-top: calc(20rem / (1080/320*20));
                display: flex;
                justify-content: space-between;
                // border: 1px solid red;
                .hm-data-noreason{
                    background: #d1f4ff;
                    color: #4f83ce;
                }
                .hm-data-newcar{
                    background: #ddf9ed;
                    color: #a0dbc5;
                }
                .hm-data-purchase{
                    background: #fff4d8;
                    color: #dcae34;
                }
            }
            .hm-data-price{
                width: calc(425rem / (1080/320*20));
                height:calc(60rem / (1080/320*20));
                color: #f34b02;
                font-size: calc(50rem / (1080/320*20));
                margin: 0 auto;
                font-family: "黑体";
                padding-top: calc(20rem / (1080/320*20));
            }
        }
    }
}


    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .content{
            flex: 1;
            overflow: auto;
        }
        .hm-nav{
            width: 100%;
            height: calc(80rem / (1080/320*20));
            background: #d64121;
            display: flex;
            padding-left: calc(60rem / (1080/320*20));
            // margin-top: calc(110rem / (1080/320*20));
            
            div{
                margin-top: calc(15rem / (1080/320*20));
                background: white;
                width: calc(110rem / (1080/320*20));
                height: calc(50rem / (1080/320*20));;
                background: #eb785b;
                color: white;
                text-align: center;
                margin-left: calc(15rem / (1080/320*20));
                text-align: center;
                line-height: calc(50rem / (1080/320*20));
                border-radius:calc(20rem / (1080/320*20)); 
            }
            .hm-nav-one{
                width:calc(240rem / (1080/320*20));
            }
        }
        .hm-swiper{
            width: calc(990rem / (1080/320*20));
            height: calc(285rem / (1080/320*20));
            // border: 1px solid red;
            img{
                width: calc(990rem / (1080/320*20));
                height: calc(285rem / (1080/320*20));
            }
        }

        .hm-calligraphy{
            width: calc(990rem / (1080/320*20));
            height: calc(265rem / (1080/320*20));
            margin: 0 auto;
            display: flex;
            div{
                flex: 1;
                text-align: center;
                img{
                    margin-top: calc(50rem / (1080/320*20));
                    width: calc(115rem / (1080/320*20));
                    height: calc(115rem / (1080/320*20));
                }
            }
        }
        .hm-data{
            width: 100%;
            background: #f8f8f8;
            // padding-bottom: calc(150rem / (1080/320*20));
            .hm-data-img1{
                width: calc(990rem / (1080/320*20));
                height: calc(460rem / (1080/320*20));
                margin: 0 auto;
                img{
                    width: calc(990rem / (1080/320*20));
                    height: calc(440rem / (1080/320*20));
                    margin-top: calc(20rem / (1080/320*20));
                }
            }
            .hm-data-swiper{
                 width: calc(990rem / (1080/320*20));
                 height: calc(120rem / (1080/320*20));
                 margin: 0 auto;
                 margin-top: calc(20rem / (1080/320*20));
                 background: white;
                 display: flex;
                 img{
                     width: calc(165rem / (1080/320*20));
                     height: calc(45rem / (1080/320*20));
                     margin-top: calc(35rem / (1080/320*20));
                     margin-left: calc(40rem / (1080/320*20));
                 }
                 .hm-data-swiper1{
                    //  border: 1px solid red;
                     width: calc(800rem / (1080/320*20));
                     height: calc(120rem / (1080/320*20));
                     margin-left: calc(20rem / (1080/320*20));
                     line-height: calc(120rem / (1080/320*20));
                    .hm-data-swiper-s{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis

                    }
                    span:nth-of-type(1){
                        color: red;
                        font-size: calc(40rem / (1080/320*20));
                    }
                    span:nth-of-type(2){
                        
                     font-size: calc(40rem / (1080/320*20));
                    }
                 }
            }
            .hm-data-one{
                width:calc(990rem / (1080/320*20));
                height:calc(490rem / (1080/320*20));
                padding-top: calc(20rem / (1080/320*20));
                margin:  0 auto;
                img{
                    width:calc(990rem / (1080/320*20));
                    height:calc(490rem / (1080/320*20));
                }
            }
            .hm-data-two{
                width:calc(990rem / (1080/320*20));
                height:calc(295rem / (1080/320*20));
                padding-top: calc(50rem / (1080/320*20));
                margin:  0 auto;
                img{
                    width:calc(990rem / (1080/320*20));
                    height:calc(275rem / (1080/320*20));
                }
            }
        }
    }
    
</style>
