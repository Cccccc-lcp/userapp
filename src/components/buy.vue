<template>
    <div class="buy">
        <Header></Header>
        <div class="buy-content">
            <nav>
                <div class="sc">智能排序</div>
                <div>品牌</div>
                <div>车价</div>
                <div>分期</div>
                <div>筛选</div>
            </nav>
            <ul class="buy-nav" v-show="this.intelligence">
                <li></li>
            </ul>


            <div class="buy-data">
                123
            </div>
        </div>
    </div>
</template>

<script>
import Header from './header'
export default {
    name:'buy',
    components:{Header},
    data(){
        return{
            txt:this.$store.state.txt,
            intelligence:false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .buy{
        width: 100%;
        height: 100%;
        nav{
            width: calc(1080rem / (1080/320*20));
            height: calc(125rem / (1080/320*20));
            border: 1px solid red;
            display: flex;
            line-height: calc(125rem / (1080/320*20));
            justify-content: space-around;
            div{
                font-size: calc(35rem / (1080/320*20));
                flex: 1;
                text-align: center;
            }
            .sc{
                color: #e96010;
            }
        }
        .buy-nav{
            list-style: none;
            position: absolute;
            background: red;
            width: 100%;
            height: 87.5%;
            z-index: 5;
            li{
                width: calc(1080rem / (1080/320*20));
                height: calc(125rem / (1080/320*20));
                background: white;
                margin: 0 auto;
            }
        }
    }

</style>
