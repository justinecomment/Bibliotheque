import Vue from 'vue';
import Vuex from 'vuex';
import Books from './modules/books';
import Authentication from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Books,
    Authentication
  }
});