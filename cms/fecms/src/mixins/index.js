import config from "../config/config";
let mixin={
  data(){
    return{
      page:1,
      data1:{},
      data2:{}
    };
  },
  methods:{
    showmsg(type,msg){
      if(type=='success'){
        this.$Message.success(msg);
      }
      if(type=='error'){
        this.$Message.error(msg);
      }
    },
    nav(path,query){
      if(query){
        this.$router.push({name: path, query:query});
      }else{
        this.$router.push({name: path});
      }
    },
    go_nav(obj){
      this.$router.push(obj);
    },
    go_home(){
      this.nav(config.HOME_PATH)
    },

  }
};

export default mixin;
