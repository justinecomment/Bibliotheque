import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import VueMaterial from 'vue-material';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
