import axios from 'axios';
import route from '../../routes';

const state={
  token: '',
  user: '',
};

const getters = {
  user (state) {
    return state.user;
  },
  token (state) {
    return state.token;
  },
  isAuthenticated (state) {
    return state.token === '';
  }
};

const mutations = {
  'AUTH_SUCCESS'(state, data){
    state.token = data.token
    state.user = data.user;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user);
  },
  'LOG_OUT'(state){
    state.token = ''
  },
  'CLEAR_AUTH'(state){
    state.token = '',
    state.user = '';
    localStorage.clear();
  }
};

const actions = {
  setLogoutTimer ({commit}){
    setTimeout(() => {
      commit('CLEAR_AUTH');
      route.replace('/login');
    }, 100000)
  },
  signin ({commit, dispatch}, formData) {
    return new Promise((resolve, reject) => {
      axios.post("http://192.168.1.13:8888/login", formData)
        .then( response => {
          const token = response.data;
          const user = formData.username;
          commit('AUTH_SUCCESS', {token: token, user: user})
          dispatch('setLogoutTimer');
          route.replace('/');
        })
        .catch( error => {
          if(error.response.status === 403){
            reject();
          }
        });
    });
  },
  signup ({commit, dispatch}, formData) {
    axios.post("http://192.168.1.13:8888/users/sign-up", formData)
      .then((response) => {
        const token = response.data;
        const user = formData.username;
        commit('AUTH_SUCCESS', {token: token, user: user});
        dispatch('setLogoutTimer');
        route.replace('/');
      })
      .catch(error => console.log(error));
  },
  logout ({commit}) {
    commit('CLEAR_AUTH');
    route.replace('/login');
  },
  tryAutoLogin ({commit, dispatch}) {
    if (!localStorage.getItem('token')) {
      return
    };
    commit('AUTH_SUCCESS', {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user')
    });
    route.replace('/');
    dispatch('setLogoutTimer');
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};