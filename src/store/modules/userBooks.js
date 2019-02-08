import UserBooks from '../../data/UserBooks';

const state={
  userBooks:[]
};

const getters = {
  userBooks(state) {
    return state.userBooks;
  }
};

const mutations = {
  'USER_SET_BOOKS'(state, userBook){
    state.userBooks = userBook;
  },
  'USER_ADD_BOOK' (state, userBook){
    state.userBooks.push(userBook);
  },
  'USER_DELETE_BOOK' (state, userBook){
    state.userBooks.splice(0,1);
  }
};

const actions = {
  initUserBooks: ({commit}) => {
    commit('USER_SET_BOOKS', UserBooks);
  },
  userAddBook: ({commit}, userBooks) => {
    commit('USER_ADD_BOOK', userBooks);
  },
  userDeleteBook: ({commit}, userBook) => {
    commit('USER_DELETE_BOOK', userBook)
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};