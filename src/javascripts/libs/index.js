import Vue from 'vue';
import axios from 'axios';


// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';

//引入app-loading组件， 全局注册
import AppLoading from '@c/layout/app-loading';
Vue.component('app-loading',AppLoading)

// 将VueAwemeSwiper中的多个组件注册为全局组件，执行install方法
Vue.use(VueAwesomeSwiper)


Vue.prototype.axios = axios;



