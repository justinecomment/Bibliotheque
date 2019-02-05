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
  },
  'LOG_OUT'(state){
    state.token = ''
  },
  'CLEAR_AUTH'(state){
    state.token = '',
    state.user = ''
  }
};

const actions = {
  setLogoutTimer ({commit}, expirationTime){
    setTimeout(() => {
      commit('CLEAR_AUTH')
    }, expirationTime * 500)
  },
  signin ({commit}, formData) {
    axios.post("http://192.168.1.13:8888/login", formData)
      .then((response) => {
        const token = response.data;
        const user = formData.username;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        commit('AUTH_SUCCESS', {token: token, user: user})
        route.replace('/');
        dispatch('setLogoutTimer', 500);
      })
      .catch(error => console.log(error));
  },
  signup ({commit}, formData) {
    axios.post("http://192.168.1.13:8888/sign-up", formData)
      .then((response) => {
        const token = response.data;
        const user = formData.username;
        commit('AUTH_SUCCESS', token, user)
      })
      .catch( () => {
        commit('AUTH_ERROR');
      });
  },
  logout ({commit}) {
    commit('CLEAR_AUTH');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    route.replace('/login');
  },
  tryAutoLogin ({commit}) {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    };
    commit('AUTH_SUCCESS', {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user')
    });
    route.replace('/');
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};