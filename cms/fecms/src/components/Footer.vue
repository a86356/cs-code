<template>
  <div class="footer">

    该项目由行者课堂开发，网站cs1024.com。qq/微信:100000356
    @copy right 行者课堂开发  2019-2020
  </div>
</template>

<script>


    export default {
        name: 'headerNav',
        data () {
            return {

            }
        },
        mounted(){

        },
        methods:{
            exit(){

            },
        },

    }
</script>

<style scoped lang="less">
  .footer{
    border-top: 1px solid #ccc;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    background: #fff;
  }
</style>
