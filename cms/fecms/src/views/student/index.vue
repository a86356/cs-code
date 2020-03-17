<template>
  <div class="container">
    <div>
      <Form ref="formInline" :model="formInline"  inline>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="姓名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
          <Button type="info" @click="showAddModal">新增</Button>
        </FormItem>
      </Form>
    </div>

    <Modal
      v-model="addModal"
      title="新增学生"
    >

      <Form :model="data1" :label-width="80" inline>
        <FormItem label="姓名">
          <Input class="ipt" v-model="data1.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="年龄">
          <Input class="ipt" v-model="data1.age" placeholder="请输入年龄"></Input>
        </FormItem>
        <FormItem label="班级">
          <Input class="ipt" v-model="data1.grade" placeholder="请输入班级"></Input>
        </FormItem>
        <FormItem label="性别">
          <Input class="ipt" v-model="data1.sex" placeholder="请输入性别，1表示男，2表示女"></Input>
        </FormItem>

      </Form>
      <div slot="footer">
        <Button type="primary" size="large" long  @click="addStudent">添加学生</Button>
      </div>


    </Modal>


    <Modal
      v-model="updateModal"
      title="编辑"
    >

      <Form :model="data1" :label-width="80" inline>
        <FormItem label="姓名">
          <Input class="ipt" v-model="data1.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="年龄">
          <Input class="ipt" v-model="data1.age" placeholder="请输入年龄"></Input>
        </FormItem>
        <FormItem label="班级">
          <Input class="ipt" v-model="data1.grade" placeholder="请输入班级"></Input>
        </FormItem>
        <FormItem label="性别">
          <Input class="ipt" v-model="data1.sex" placeholder="请输入性别，1表示男，2表示女"></Input>
        </FormItem>

      </Form>
      <div slot="footer">
        <Button type="primary" size="large" long  @click="updateStudent">更新数据</Button>
      </div>


    </Modal>

    <Table border :columns="columns1" :data="list1" width="100%"></Table>
    <div style="margin-top: 40px;">
      <Page :total="100" />
    </div>
  </div>
</template>

<script>
    import {getstudent,deletestudent,addstudent,updatestudent} from "@/api/apis";


    export default {
        name: 'login',
        data () {
            return {
                formInline:{},
                addModal:false,
                updateModal:false,
                columns1: [
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '年级',
                        key: 'grade',
                        render: (h, params) => {
                            let {grade} = params.row;
                            let txt = grade+"年级";
                            return h('div',txt);
                        }
                    },
                    {
                        title: '性别',
                        key: 'sex',
                        render: (h, params) => {
                            let {sex} = params.row;
                            let txt;
                            if(sex==1){
                                txt='男'
                            }
                            if(sex==2){
                                txt='女'
                            }

                            return h('div',txt);
                        }
                    },
                    {
                        title: "操作",
                        key: "action",
                        width: 150,
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        style: {
                                            marginRight: "5px"
                                        },
                                        on: {
                                            click: () => {
                                                //this.openPage({TableName:'ERP_Module__create?id='+params.row.ID+'&parentCode='+params.row.ParentCode})
                                                this.updateModal=true;
                                                this.data1= params.row;
                                            }
                                        }
                                    },
                                    "编辑"
                                ),
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "error",
                                            size: "small"
                                        },
                                        on: {
                                            click: () => {

                                                let {id} = params.row;
                                                this.$Modal.confirm({
                                                    title:"删除",
                                                    content:"你确定要删除吗",
                                                    onOk:function () {
                                                        deletestudent({
                                                            id:id
                                                        }).then(res=>{
                                                            let {code} = res.data;
                                                            if(code==0){
                                                                this.showmsg('success','删除成功');
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        }
                                    },
                                    "删除"
                                )
                            ]);
                        }
                    }
                ],
                list1: []
            }
        },
        mounted(){
          this.loadData();
        },
        methods:{
            loadData(){
                getstudent({}).then(res=>{
                    this.list1 =res.data.data;
                })
            },
            showAddModal(){
                this.addModal=true;
            },
            addStudent(){
              let d =this.data1;
              if(d.name=='' || d.age=='' || d.grade=='' || d.sex==''){
                  this.showmsg('success','请填写完整数据');
                  return;
              }

              addstudent({
                  name:d.name,
                  age:d.age,
                  grade:d.grade,
                  sex:d.sex
              }).then(res=>{
                  let {code}  =res.data;
                  if(code==0){
                      this.showmsg('success','成功');
                      this.addModal=false;
                  }
              })
            },
            updateStudent(){
                let d =this.data1;
                if(d.name=='' || d.age=='' || d.grade=='' || d.sex==''){
                    this.showmsg('success','请填写完整数据');
                    return;
                }

                updatestudent({
                    id:d.id,
                    name:d.name,
                    age:d.age,
                    grade:d.grade,
                    sex:d.sex
                }).then(res=>{
                    let {code}  =res.data;
                    if(code==0){
                        this.showmsg('success','成功');
                        this.updateModal=false;
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="less">
  .container{
    width: 100%;
  }
  .ipt{
    width: 300px;
  }
</style>
