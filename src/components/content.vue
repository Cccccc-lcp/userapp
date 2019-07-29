<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'contents'
}
</script>

<style lang="scss" scoped>
    .content{
        flex: 1;
        overflow: auto;
    }
</style>
