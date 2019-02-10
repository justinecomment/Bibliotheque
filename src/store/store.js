import Vue from 'vue';
import Vuex from 'vuex';
import Books from './modules/books';
import Authors from './modules/authors';
import UserBooks from './modules/userBooks';
import UserCollections from './modules/userCollections';
import UserFriends from './modules/userFriends';
import Authentication from './modules/authentication';
import Categories from './modules/Categories';
import Styles from './modules/styles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Books,
    Authentication,
    UserBooks,
    UserCollections,
    UserFriends,
    Authors,
    Categories,
    Styles
  }
});