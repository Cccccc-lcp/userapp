<template>
    <div class="login">
        <div class="login-header">
            <div class="lg-hd-one">
                <router-link to='/my' tag='i' class="el-icon-arrow-left"></router-link>
            </div>
            <div class="lg-hd-two">
                <div>优信全球购</div>
                <div>异地购车有差价,优信全球寻低价</div>
            </div>
        </div>


        <div class="login-content">
            <input type="text" v-model="txt" placeholder="请输入手机号">
            <input type="text" v-model="code" placeholder="请输入验证码">
            <div @click="countcode(txt)">
                <div>获取验证码</div>
            </div>
            <button>登录</button>
        </div>



    </div>
</template>

 <script>
 export default {
     name:'login',
     data(){
         return{
             code:'获取验证码',
             txt:'',
             code:''
         }
     },
     methods:{
        countcode(txt){
            if(txt=='') return;
            console.log('1111')
            this.axios.get(`api/mobileUser/homeRandom?phone=13253881018&bSys=true`).then(res=>{
                console.log(res)
            })
        }
     }
 }
 </script>

 <style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        .login-header{
            width: calc(1080rem / (1080/320*20));
            height: calc(520rem / (1080/320*20));
            // border: 1px solid red;
            .lg-hd-one{
                width: calc(1080rem / (1080/320*20));
                height: calc(240rem / (1080/320*20));
                padding-top: calc(70rem / (1080/320*20));
                padding-left: calc(70rem / (1080/320*20));
                i{
                    font-size: calc(70rem / (1080/320*20));
                }
            }
            .lg-hd-two{
                width: calc(1080rem / (1080/320*20));
                height: calc(280rem / (1080/320*20));
                // border: 1px solid red;
                div:nth-of-type(1){
                    padding-left: calc(70rem / (1080/320*20));
                    font-size: calc(80rem / (1080/320*20));
                    color: #585858;
                }
                div:nth-of-type(2){
                    padding-top: calc(60rem / (1080/320*20));
                    padding-left: calc(70rem / (1080/320*20));
                    font-size: calc(40rem / (1080/320*20));
                    color: #555555;
                }
            }
        }
        .login-content{
            width: calc(1080rem / (1080/320*20));
            height: calc(530rem / (1080/320*20));
            // border: 1px solid red;
            position: relative;
            input{
                width: calc(940rem / (1080/320*20));
                height: calc(110rem / (1080/320*20));
                margin-left: calc(70rem / (1080/320*20));
                border: none;
                outline: none;
                font-size: calc(50rem / (1080/320*20));
            }
            input:nth-of-type(2){
                margin-top: calc(80rem / (1080/320*20));
            }
            div{
                width: calc(250rem / (1080/320*20));
                height: calc(110rem / (1080/320*20));
                // border: 1px solid red;
                text-align: center;
                line-height: calc(110rem / (1080/320*20));
                font-size: calc(40rem / (1080/320*20));
                position: absolute;
                top: 0;
                right: 0;
                z-index: 5;
            }
        }
    }
 </style>
 