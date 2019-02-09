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
  initBooks: ({commit, rootState, dispatch}) => {
    dispatch('initAuthors');
    dispatch('initCategories');
    const authors = rootState.Authors.authors;
    const categories = rootState.Categories.categories;
    let idAuthor;
    let idBook;
    let idCategories;
    
    for(let entry in Books){
      idBook = Books[entry].id;
      for(let elt in authors){
        idAuthor = authors[elt].id;
        if(idAuthor ===  idBook){
          Books[entry].author = authors[elt].name;
        }
      }
      for(let idx in categories){
        idCategories = categories[idx].id;
        if(idCategories ===  idBook){
          Books[entry].category = categories[idx].name;
        }
      }
    }
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