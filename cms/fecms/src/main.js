// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


import Mixin from './mixins'

Vue.mixin(Mixin);

Vue.use(ViewUI);
let vue= new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default vue;
