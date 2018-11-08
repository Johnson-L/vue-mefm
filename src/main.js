import Vue from 'vue';
import App from './App.vue';
// import router from './router'
// import store from './store'

//引入全局通用样式
import '@styles/main.scss';

//flexible 移动端适配
import '@js/libs/flexible';

// 引入各种插件 swiper ， axios ， 
import '@js/libs';

// 引入路由
import router from './router/index';

//
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
