import Vue from 'vue'
import axios from 'axios';
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 将VueAwemeSwiper中的多个组件注册为全局组件
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios;

