import Vue from 'vue'
import VueRouter from 'vue-router'

import Books from './components/Books';
import AddBook from './components/Add/Book';
import AddAuthor from './components/Add/Author';
import AddCollection from './components/Add/Collection';
import AddFriend from './components/Add/Friend';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Auth from './store/modules/authentication';

Vue.use(VueRouter)

const routes =[
  {
    path: '/', 
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next){
      if(Auth.state.token !== ''){
        next()
      } else{
        next('/login')
      }
    }
  },
  {
    path: '/books',
    name: 'Books', 
    component: Books,
    beforeEnter(to, from, next){
      if(Auth.state.token !== ''){
        next()
      } else{
        next('/login')
      }
    }
  },
  {
    path: '/book/add',
    name: 'AddBook', 
    component: AddBook,
  },
  {
    path: '/author/add', 
    name: 'AddAuthor',
    component: AddAuthor,
  },
  {
    path: '/collection/add', 
    name: 'AddCollection',
    component: AddCollection,
    
  },
  {
    path: '/friend/add', 
    name: 'AddFriend',
    component: AddFriend,
    
  },
  {
    path: '/login', 
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard', 
    name: 'Dashboard',
    component: Dashboard,
    
  }
];

export default new VueRouter({
  mode: 'history', 
  routes
})
