<template>
 <div class="root">
   <div>欢迎页</div>
   <div @click="handleStart">开始测试</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {
    handleStart () {
      this.$router.push({
        name: 'upload'
      })
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/variable"

</style>
