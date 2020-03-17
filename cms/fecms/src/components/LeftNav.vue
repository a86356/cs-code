<template>
  <Menu theme="dark"  :accordion="true" :width="'220px'" >
    <Submenu :name="item1.name" v-for="(item1,index1) in leftMenu" :key="index1">
      <template slot="title">
        <Icon :type="item1.icon"></Icon>
        {{item1.title}}
      </template>
      <MenuItem v-for="(item2,index2) in item1.children" :key="index2" :name="item2.name" :data-path="item2.path"  @click.native="mynav(item2)">
        <Icon :type="item2.icon"></Icon>{{item2.title}}
      </MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
    import {menu} from '@/router/index.js'

    export default {
        name:"LeftNav",
        props:{
        },

        data(){
            return{
                selected:'',
                leftMenu:[],
            }
        },
        mounted(){
            this.setLeftMenu();
        },
        methods:{

            mynav(item){
               this.go_nav({path:item.path});
            },
            setLeftMenu(){
                let m = menu;
                let arr=[];
                // this.selected = m[0].children[0].name;
                for(var i=0;i<menu.length;i++){
                    let _item=menu[i];
                    if(_item.menu){
                        var obj={
                            icon:_item.icon,
                            path:_item.path,
                            title:_item.title,
                            name:_item.name,
                            children:_item.children
                        }
                        arr.push(obj);
                    }
                }
                for(var i=0;i<arr.length;i++){
                    let _item=arr[i];
                    let q=[];
                    for(var j=0;j<_item.children.length;j++){
                        var _item2=_item.children[j];
                        if(_item2.menu){
                            var obj={
                                icon:_item2.icon,
                                path:_item.path+'/'+ _item2.path,
                                title:_item2.title,
                                name:_item2.name,
                            }
                            q.push(obj);
                        }
                    }
                    arr[i].children=q;
                }

                this.leftMenu = arr;
            }
        }
    }
</script>
