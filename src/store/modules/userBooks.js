import UserBooks from '../../data/UserBooks';
import routes from '../../routes';

const state={
  userBooks:[]
};

const getters = {
  userBooks(state) {
    return state.userBooks;
  }
};

const mutations = {
  'USER_SET_BOOKS'(state, userBook) {
    state.userBooks = userBook;
  },
  'USER_DELETE_BOOK' (state, userBook) {
    state.userBooks.splice(0,1);
  },
  'ADD_TO_USERBOOK' (state, userBook) {
    state.userBooks.push(userBook);
  }
};

const actions = {
  initUserBooks: ({commit}) => {
    commit('USER_SET_BOOKS', UserBooks);
  },
  userDeleteBook: ({commit}, userBook) => {
    commit('USER_DELETE_BOOK', userBook)
  },
  addToUserBook: ({commit}, userBook) => {
    commit('ADD_TO_USERBOOK', userBook);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};