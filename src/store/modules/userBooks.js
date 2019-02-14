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
  'USER_ADD_BOOK' (state, userBook) {
    state.userBooks.push(userBook);
  },
  'USER_DELETE_BOOK' (state, userBook) {
    state.userBooks.splice(0,1);
  },
  'ADD_TO_USERBOOK' (state, book) {
    state.userBooks.push(book);
    routes.push({name: 'UserBook' });
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
  },
  addToUserBook: ({commit, rootState}, isUserBook) => {
    const books = rootState.Books.books;
    let id;
    for(let index in isUserBook){
      id = isUserBook[index];
    }
    let goodBook = books[id];
    console.log(goodBook);
    commit('ADD_TO_USERBOOK', goodBook);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};