//import book from './modules/bookClass.js';
import addbooks from './addbooks.js';
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

class BookManager {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
  }


 /* addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }*/

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  getBooksFromLocalStorage() {
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
      li.innerHTML = `
        <b>${book.title}</b> by ${book.author} <button onclick="bookManager.removeBook(${index})">Delete</button>
              
        `;
      booksList.appendChild(li);
    });
  }
}

const bookForm = document.getElementById('bookForm');
const bookManager = new BookManager();

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  bookManager.addBook(book);

  bookForm.reset();
});

bookManager.displayBooks();