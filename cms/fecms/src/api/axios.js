import axios from 'axios';
import {getCacheData} from "@/utils/cache";
import BaseConfig from '@/config/config'
import Context from '@/main.js'
axios.defaults.timeout = 15000;
//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    //  config.data = JSON.stringify(config.data);
    let token = getCacheData(BaseConfig.TOKEN_KEY);

    config.headers = {
      'Content-Type':' application/json',
    }
    if(token){
      config.headers['token']=token
    }

    //  config.params = {'token':'FFE23FD9CD6C7D67C39DD69AE848C8C7F9A51884390C9B9DAA891E23A11DBD396976C48DF92AFBE8D6FC49BE51995B95757AB728453C7FD0DC9AF65A563B392C'}

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);



export function createApi(url){
  return  params=> {
    return new Promise((resolve,reject) => {

      axios['post'](BaseConfig.baseURL+url,params)
        .then(response => {

          //token 过期
          let code =response.data.code;


          if(code!='0'){

            Context.showmsg('error',response.data.msg);
            reject(response.data);
            return;
          }

          if(code=='0'){

            // Context.showmsg('success',response.data.msg);
            resolve(response);
            return;
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
