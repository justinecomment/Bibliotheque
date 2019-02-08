import Books from '../../data/Books';
import route from '../../routes';

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
    state.books.push(book) ;    
  }
};

const actions = {
  initBooks: ({commit}) => {
    commit('SET_BOOKS', Books);
  },
  addBook: ({commit}, book) => {    
    commit('ADD_BOOK', book);
    route.push('/books')
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};