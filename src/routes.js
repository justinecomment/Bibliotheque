import Vue from 'vue'
import VueRouter from 'vue-router'

import Books from './components/Book/Books';
import BookAdd from './components/Book/BookAdd';

import Authors from './components/Author/Authors';
import AuthorAdd from './components/Author/AuthorAdd';

import UserDashboard from './components/User/UserDashboard';
import UserBook from './components/User/UserBooks';
import UserCollections from './components/User/UserCollections';
import UserCollectionAdd from './components/User/UserCollectionAdd';
import UserFriends from './components/User/UserFriends';
import UserFriendAdd from './components/User/UserFriendAdd';

import Home from './components/Home';
import Login from './components/Login';
import Auth from './store/modules/authentication';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
  { path: '/', name: 'Home', component: Home },
  { path: '/login',  name: 'Login', component: Login, },

  { path: '/books', name: 'Books', component: Books },
  { path: '/authors', name: 'Authors', component: Authors },

  { path: '/user/dashboard', name: 'UserDashboard', component: UserDashboard },
  { path: '/user/book', name: 'UserBook', component: UserBook },
  { path: '/user/collections', name: 'UserCollections', component: UserCollections },
  { path: '/user/collection/add',  name: 'UserCollectionAdd', component: UserCollectionAdd },
  { path: '/user/friends', name: 'UserFriends', component: UserFriends },
  { path: '/user/friend/add',  name: 'UserFriendAdd', component: UserFriendAdd },

  { path: '/book/add', name: 'BookAdd', component: BookAdd },
  { path: '/author/add',  name: 'AuthorAdd', component: AuthorAdd },

]});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login'){
    if(Auth.state.token !== ''){
      next();
    } else{
      next('/login');
    }
  } else{
    next();
  }
});



export default router;
