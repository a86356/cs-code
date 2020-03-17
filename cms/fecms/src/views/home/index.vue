<template>
  <div >
    <Layout style="height:100%">
      <div>
        <HeaderNav></HeaderNav>

        <div style="height: 60px"></div>
        <Sider hide-trigger  style="position:fixed;height:100%">
          <LeftNav style="height:100%;overflow:auto" :title="title" :menus="menus" :idx="idx" :started="started" ></LeftNav>
        </Sider>
        <Content style="padding:24px;padding-left:240px;width:100%">
          <router-view/>
        </Content>
        <Footer></Footer>
      </div>
    </Layout>
  </div>
</template>

<script>
    import HeaderNav from "@/components/HeaderNav";
    import Footer from '@/components/footer'
    import LeftNav from '@/components/LeftNav'
    import config from "@/config/config";

    export default {
        name: 'home',
        data () {
            return {
                list:[{}],
                selected:'',
                modalSelf:false,
                modalPassword:false,
                actionList: "Account",
                accountEntity:{},
                selfAccount:{},
                refresh : false,
                idx:'',
                started:'',
                menus:[],
                title:''
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
                        this.go_nav({path:confg.LOGIN_PATH})
                    }
                });
            },
        },
        components:{
            HeaderNav,
            Footer,
            LeftNav
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="less">

</style>
