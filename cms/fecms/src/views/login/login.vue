<template>
  <div class="container">

    <div class="loginform">
      <h1>后台管理系统</h1>
      <Form :model="data1" :label-width="80" >
        <FormItem label="用户名">
          <Input v-model="data1.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input password type="password" v-model="data1.password" placeholder="请输入密码"></Input>
        </FormItem>
      </Form>
      <div class="btns item" >
        <Button type="primary" @click="showRegisterModal">注册</Button>
        <Button type="dashed" @click="login">登录</Button>
      </div>
    </div>

    <Modal
      v-model="registerModal"
      title="管理员注册"
      @on-ok="register"
      @on-cancel="cancel">

      <Form :model="data1" :label-width="80" inline>
        <FormItem label="用户名">
          <Input v-model="data1.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input password type="password" v-model="data1.password" placeholder="请输入密码"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" size="large" long  @click="register">注册</Button>
      </div>


    </Modal>

  </div>
</template>

<script>

    import {registerAdmin,login} from "@/api/apis";
    import {setCacheData} from "@/utils/cache";
    import config from "@/config/config";

    export default {
        name: 'login',
        data () {
            return {
                username:"",
                password:'',
                registerModal:false
            }
        },
        mounted(){

        },
        methods:{
            showRegisterModal(){
                this.registerModal=true;
            },
            cancel(){
                this.registerModal=false;
            },
            register(){
               if(this.data1.username==''){
                   this.showmsg('error','用户名未填写')
                   return;
               }
                if(this.data1.password==''){
                    this.showmsg('error','密码未填写')
                    return;
                }

                registerAdmin({
                    username: this.data1.username,
                    password: this.data1.password
                }).then(res=>{

                    let {code}  =res.data;
                    if(code==0){
                        this.showmsg('success','注册成功');
                        this.registerModal=false;
                    }
                })
            },
            login(){
                if(this.data1.username==''){
                    this.showmsg('error','用户名未填写')
                    return;
                }
                if(this.data1.password==''){
                    this.showmsg('error','密码未填写')
                    return;
                }

                login({
                    username: this.data1.username,
                    password: this.data1.password
                }).then(res=>{
                  let {code} = res.data;
                  if(code==0){
                      this.showmsg('success','登录成功');
                      //token 其实是一种权限的标志，
                      setCacheData(config.TOKEN_KEY,res.data.data[0].auth_key);

                      this.nav(config.HOME_PATH)
                      return;
                  }


                })
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="less">
  h1{
    margin-bottom: 10px;
  }
  .loginform{
    width: 300px;
    margin: 0 auto;
    margin-top: 300px;

    .item{
      margin-bottom: 20px;
    }
  }
  .registerform{
    .item{
      margin-bottom: 20px;
    }
  }
</style>
