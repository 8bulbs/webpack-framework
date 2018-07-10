<template>
  <div id="main" class="app-main">
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
import MyTest from 'views/my-test'
export default {
  name: 'App',
  components: {
    MyTest
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.app-main{
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>

