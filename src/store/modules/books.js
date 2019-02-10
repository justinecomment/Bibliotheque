import Books from '../../data/Books';

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
    dispatch('initStyles');
    const authors = rootState.Authors.authors;
    const categories = rootState.Categories.categories;
    const styles = rootState.Styles.styles;

    for(let entry in Books){
      let idBook = Books[entry].id;
      for(let elt in authors){
        let idAuthor = authors[elt].id;
        if(idAuthor ===  idBook){
          Books[entry].author = authors[elt].name;
        }
      }
      for(let idx in categories){
        let idCategories = categories[idx].id;
        if(idCategories ===  idBook){
          Books[entry].category = categories[idx].name;
        }
      }
      for(let index in styles){
        let idStyles = styles[index].id;
        if(idStyles ===  idBook){
          Books[entry].style = styles[index].name;
        }
      }
    }
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