<template>
 <div class="root">
   <div>对比图片页</div>
   <div @click="handleProduceImg">生成图片</div>
   <div @click="handleTestAgain">再测一次</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {
    handleProduceImg () {
      this.$router.push({
        name: 'save'
      })
    },
    handleTestAgain () {
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
