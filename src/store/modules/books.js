import Books from '../../data/Books';

const state={
  books:[]
};

const getters = {
  books: state => {
    return state.books;
  }
};

const mutations = {
  'SET_BOOKS'(state, books){
    state.books = books;
  }
};

const actions = {
  initBooks: ({commit}) => {
    commit('SET_BOOKS', Books);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};