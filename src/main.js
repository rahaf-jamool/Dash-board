import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';

// Css
import main from '../src/assets/css/main.css';
// js
import store from './store/Store';
//libraries
import 'animate.css';
import axios from 'axios';
import 'jquery';
import VueLazyload from 'vue-lazyload';
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'normalize.css';
import '../public/fontawesome-free-5.15.1-web/css/all.css';

const lang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = lang;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLazyload);

axios.defaults.baseURL = 'http://edalili.e-dalely.com/public';
axios.defaults.headers['Accept-Language'] = lang;

new Vue({
    main,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
