<template>
  <div id="app">
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from './components/header'
import Contents from './components/content'
import Footers from './components/footer'
export default {
  name: 'App',
  components:{Headers,Contents,Footers}
}
</script>

<style lang='scss'>
#app{
  display: flex;
  flex-direction: column;
  position: relative;
}

</style>
