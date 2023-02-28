// import Book from './modules/bookClass.js';

//import { className } from "postcss-selector-parser";

//import addBook from './modules/addbooks.js';
 class BookManager {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
  }

  addBook(book){
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  getBooksFromLocalStorage() {
    /* this.booksString = localStorage.getItem('books'); */
    const booksString = localStorage.getItem('books');
    return booksString ? JSON.parse(booksString) : [];
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.classList.add('list_class');
          li.innerHTML = `
          <ul class="list_ite"> <li>"${book.title}"</li> <li>by</li> <li>${book.author}</li> </ul> <button onclick="bookManager.removeBook(${index})">Delete</button>
                
          `;
      booksList.appendChild(li);
    });
  }
}

export default BookManager;