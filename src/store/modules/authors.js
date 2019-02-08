import Authors from '../../data/Authors';
import route from '../../routes';

const state={
  authors:[]
};

const getters = {
  authors (state) {
    return state.authors;
  }
};

const mutations = {
  'SET_AUTHORS'(state, author){
    state.authors = author;
  },
  'ADD_AUTHOR' (state, author){
    state.authors.push(author) ;    
  }
};

const actions = {
  initAuthors: ({commit}) => {
    commit('SET_AUTHORS', Authors);
  },
  addAuthor: ({commit}, author) => {    
    commit('ADD_AUTHOR', author);
    // route.push('/books')
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};