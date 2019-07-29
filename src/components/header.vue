<template>
    <header>
        <div>
            定位
            <i class="el-icon-arrow-down"></i>
        </div>
        <div class="hd-inp">
            <router-link to='/search' tag="input" type="text" placeholder="家用省油"></router-link>
            <i class="el-icon-search hd-inp-sh"></i>
        </div>
        <div class="hd-news">
            <i class="el-icon-chat-dot-round"></i>
        </div>
    </header>
</template>

<script>
export default {
    name:'headers'
}
</script>

<style lang="scss" scoped>
    header{
        width:calc(1080rem / (1080/320*20));
        height: calc(110rem / (1080/320*20));
        background: #d64121;
        display: flex;
        flex-shrink: 0;
        // position: fixed;
        // top: 0;
        // z-index: 10;
        justify-content: space-around;
        line-height: calc(110rem / (1080/320*20));
        color: white;
        // position: relative;
        .hd-inp{
            input{
                width: calc(788rem / (1080/320*20));
                height: calc(80rem / (1080/320*20));
                margin-top: calc(15rem / (1080/320*20));
                border: none;
                border-radius:calc(50rem / (1080/320*20));
                outline: none;
                padding-left: calc(80rem / (1080/320*20));
                color: #888888;
            }
            .hd-inp-sh{
                font-size: calc(50rem / (1080/320*20));
                position: absolute;
                color: #9e9e9e;
                top: calc(32rem / (1080/320*20));
                left: 17%;
            }
        }
        .hd-news{
            i{
                font-size: calc(50rem / (1080/320*20));
            }
        }
        
    }
</style>
