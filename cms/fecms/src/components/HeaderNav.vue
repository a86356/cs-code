<template>
  <Menu mode="horizontal" theme="primary"    style="position:fixed;width:100%">
    <div class="layout-logo"><a @click="go_home">后台通用管理系统</a></div>

    <div class="layout-nav" >
      <Submenu name="my">
        <template slot="title">
          <Icon type="stats-bars"></Icon>
          我的设置
        </template>
        <MenuGroup title="我的设置" >

          <MenuItem name="exit" >
            <a  @click="exit">退出</a>
          </MenuItem>
        </MenuGroup>
      </Submenu>
    </div>

  </Menu>
</template>

<script>
    import {clearCacheData} from '@/utils/cache'
    import config from "@/config/config";

    export default {
        name: 'headerNav',
        data () {
            return {
                list:[{}],
                selected:'',
                modalSelf:false,
                modalPassword:false,
                actionList: "Account",
                accountEntity:{},
                selfAccount:{},
                refresh : false
            }
        },
        mounted(){

        },
        methods:{
            exit(){
                this.$Modal.confirm({
                    title: '提醒',
                    content: '<p>您确定要退出系统？</p>',
                    onOk: () => {

                        clearCacheData([config.TOKEN_KEY]);
                        this.go_nav({path:config.LOGIN_PATH})
                    }
                });
            },
        },

    }
</script>

<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo{
    width: 300px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color:#fff;
    font-size:30px;
    line-height:30px
  }

  .layout-logo a{color:#fff}
  .layout-logo a:hover{color:#ddd}
  .layout-nav{
    margin: 0 auto;
    margin-right: 20px;
    float:right;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
