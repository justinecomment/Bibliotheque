import store from '../store/store';

export default {
  isMobile(){
    if(window.innerWidth <= 600){
      return true;
    } 
    return false;
  },

  convertBooksIdToItems(books){
    const authors = store.getters.authors;
    const categories = store.getters.categories;
    const styles = store.getters.styles;
    
    for(let entry in books){
      for(let elt in authors){
        let idBookAuthor = books[entry].author;
        let idAuthor = authors[elt].id;
        if(idAuthor ===  idBookAuthor){
          books[entry].author = authors[elt].name;
        }
      }

      for(let idx in categories){
        let idBookCategory = books[entry].category;
        let idCategories = categories[idx].id;
        if(idCategories ===  idBookCategory){
          books[entry].category = categories[idx].name;
        }
      }

      for(let index in styles){
        let idStyles = styles[index].id;
        let idBookStyle = books[entry].style;
        if(idStyles ===  idBookStyle){
          books[entry].style = styles[index].name;
        }
      }
    }
    return books;
  },

  convertUserbookIdToItem(userBooks){
    const books = store.getters.books;
    
    for(let entry in books){
      for(let index in userBooks){
        let idBooks = books[entry].id;
        let idUserBook = userBooks[index].idBook;
        if(idBooks === idUserBook){
          userBooks[index].idBook = books[entry];
        }
      }
    }
    this.convertBooksIdToItems(userBooks);
    return userBooks;
  }
  
}

