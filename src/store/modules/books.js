import Books from '../../data/Books';
import services from '../../services/services';

const state={
  books:[]
};

const getters = {
  books (state) {
    return state.books;
  }
};

const mutations = {
  'SET_BOOKS'(state, books){
    state.books = books;
  },
  'ADD_BOOK' (state, book){
    state.books.push(book); 
  }
};

const actions = {
  initBooks: ({commit}) => {
    commit('SET_BOOKS', Books);
  },
  addBook: ({commit}, book) => {
    commit('ADD_BOOK', book);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};