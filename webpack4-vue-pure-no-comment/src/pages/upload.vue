<template>
 <div class="root">
   <div>上传页</div>
   <div @click="handleClickUpload">点击上传</div>
   <div>开始测试</div>
   <input ref="input" accept="image/jpeg,image/jpg,image/png" @change="handleUploadChange" style="display:none" type="file">
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClickUpload () {
      console.log('clicked')
      console.log(this.$refs.input)
      this.$refs.input.click()
    },
    handleUploadChange () {
      console.log('changed')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/variable"

</style>
