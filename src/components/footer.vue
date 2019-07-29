<template>
    <footer>
        <router-link to='/' tag="div">
            <i class="el-icon-house"></i>
            <p>首页</p>
        </router-link>

        <router-link to='/buy' tag="div">
            <i class="el-icon-receiving"></i>
            <p>买车</p>
        </router-link>
        <router-link to='/sell' tag="div">
            <i class="el-icon-coin"></i>
            <p>卖车</p>
        </router-link>
        <router-link to='/cart' tag="div">
            <i class="el-icon-shopping-cart-2"></i>
            <p>购物车</p>
        </router-link>
        <router-link to='/my' tag="div">
            <i class="el-icon-user"></i>
            <p>我的</p>
        </router-link>
    </footer>
</template>

<script>
export default {
    name:'footers'
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height: calc(130rem / (1080/320*20));
        display: flex;
        padding-top:  calc(30rem / (1080/320*20));
        flex-shrink: 0;
        // position: fixed;
        // background: white;
        // bottom: 0;
        // z-index: 5;
        div{
            flex:1;
            text-align: center;
        }
        .router-link-exact-active{
            color: red;
        }
    }
</style>
