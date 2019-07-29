<template>
    <div class="search">
        <div class="sh-header">
            <input type="text" placeholder="家用省油" v-model="txt" @keyup.enter="search(txt)">
            <i class="el-icon-search"></i>
            <router-link to='/' tag='div'>取消</router-link>
        </div>

        <div class="sh-content">
            <div class="sh-ct-record">
                <div class="sh-ct-record1">
                    <div>历史记录</div>
                    <i class="el-icon-delete"  @click="remove()"></i>
                </div>
                <div class="sh-ct-record2">
                    <div v-for="(item,key) in arr" :key="key" @click="add(item)">
                        {{item}}
                    </div>
                </div>
                <div class="sh-ct-record1">
                    <div>热门搜索</div>
                </div>
                <div class="sh-ct-record3">
                    <div v-for="(item,key) in list" :key="key" @click="add(item)">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            txt:'',
            list:['付一成开豪车','大众','宝马','奥迪','奔驰','丰田','第一辆二手车'],
            arr:[]
        }
    },
    methods:{
        search(txt){
            if(txt==''){
                txt='家用省油';
            }
            this.arr.unshift(txt);
            let arr=new Set(this.arr);
            let list=[];
            for(let name of arr){
                list.push(name)
            }
            this.arr=list;
            localStorage.searchhistory=JSON.stringify(this.arr);
            this.$store.commit("ADD_SEARCH",this.txt)
            // console.log(this.$store.state.txt)
            this.$router.push('/buy');
        },
        remove(){
            localStorage.searchhistory=[];
            this.arr=[];
        },
        add(item){
            this.txt=item;
            this.arr.unshift(this.txt);
            let arr=new Set(this.arr);
            let list=[];
            for(let name of arr){
                list.push(name)
            }
            this.arr=list;
            localStorage.searchhistory=JSON.stringify(this.arr);
            this.$store.commit("ADD_SEARCH",this.txt)
            this.$router.push('/buy')
        }
    },
    mounted(){
        if(localStorage.searchhistory){
            let arr=JSON.parse(localStorage.searchhistory);
            this.arr=arr;
        }
    }
}
</script>

<style lang="scss" scoped>
    .search{
        width: 100%;
        height: 100%;
        position: absolute;
        background: #f3f3f3;
        z-index: 10;
        .sh-header{
            width: calc(1080rem / (1080/320*20));
            height: calc(140rem / (1080/320*20));
            background: white;
            display: flex;
            justify-content: space-around;
            line-height: calc(140rem / (1080/320*20));
            position: relative;
            input{
                width: calc(880rem / (1080/320*20));
                height: calc(90rem / (1080/320*20));
                margin-top: calc(25rem / (1080/320*20));
                border:none;
                background: #f6f6f6;
                border-radius: calc(50rem / (1080/320*20));
                outline: none;
                padding-left: calc(80rem / (1080/320*20)); 
            }
            i{
                position: absolute;
                left:calc(50rem / (1080/320*20)); 
                top:calc(50rem / (1080/320*20)); 
                font-size: calc(50rem / (1080/320*20)); 
            }
            div{
                font-size: calc(40rem / (1080/320*20)); 
            }
        }
        .sh-content{
            width:calc(990rem / (1080/320*20)); 
            margin:  0 auto;
            // border: 1px solid red;
            margin-top: calc(20rem / (1080/320*20)); 
            .sh-ct-record1{
                display: flex;
                justify-content: space-between;
                i{
                    font-size: calc(50rem / (1080/320*20)); 
                }
                div{
                    font-size: calc(40rem / (1080/320*20)); 
                }
            }
            .sh-ct-record2{
                height: calc(300rem / (1080/320*20)); 
                margin-top: calc(40rem / (1080/320*20)); 
                display: flex;
                flex-wrap: wrap;
                // border: 1px solid red;
                overflow: hidden;
                div{
                    height: calc(75rem / (1080/320*20)); 
                    padding-left: calc(60rem / (1080/320*20));
                    padding-top: calc(20rem / (1080/320*20));
                    padding-bottom: calc(20rem / (1080/320*20));
                    padding-right: calc(60rem / (1080/320*20));
                    background: white;
                    margin-top: calc(20rem / (1080/320*20));
                    margin-left: calc(20rem / (1080/320*20));
                    border: 1px solid #e6e5e5;
                }
            }
            .sh-ct-record3{
                // height: calc(330rem / (1080/320*20)); 
                margin-top: calc(40rem / (1080/320*20)); 
                display: flex;
                flex-wrap: wrap;
                // border: 1px solid red;
                // overflow: hidden;
                div{
                    height: calc(75rem / (1080/320*20)); 
                    padding-left: calc(60rem / (1080/320*20));
                    padding-top: calc(20rem / (1080/320*20));
                    padding-bottom: calc(20rem / (1080/320*20));
                    padding-right: calc(60rem / (1080/320*20));
                    background: white;
                    margin-top: calc(20rem / (1080/320*20));
                    margin-left: calc(20rem / (1080/320*20));
                    border: 1px solid #e6e5e5;
                }
            }
        }
    }
</style>
