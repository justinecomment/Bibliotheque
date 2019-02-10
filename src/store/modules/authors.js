import Authors from '../../data/Authors';

const state={
  authors:[]
};

const getters = {
  authors (state) {
    return state.authors;
  }
};

const mutations = {
  'SET_AUTHORS'(state, authors){
    state.authors = authors;
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
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};