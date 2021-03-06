import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import VueMaterial from 'vue-material';
import store from './store/store';
import router from './routes';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import Vuetify from 'vuetify';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'vuetify/dist/vuetify.min.css'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.use(Toasted);
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  render: h => h(App)
})
