/* eslint-disable max-classes-per-file */

import Book from './modules/bookClass.js';
//mport Book from './modules/bookClass.js';
import BookManager from './modules/bookManager.js';
import { DateTime } from './modules/luxon.js';

const time = document.getElementById('date');
time.innerHTML = DateTime.now();
// import addBook from './modules/addbooks.js';

/*
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
} */
/*
class BookManager {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
  }

   addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }

  getBooksFromLocalStorage() {
    /*this.booksString = localStorage.getItem('books');/
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
*/
const bookForm = document.getElementById('bookForm');
const list = document.getElementById('list');
const addBook = document.getElementById('add_book');
const contact1 = document.getElementById('contact');

const formSection = document.getElementById('form_cont');
const listSection = document.getElementById('list_setion');
const contact_section = document.getElementById('contact_section');



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

list.addEventListener('click', () => {
  formSection.style.display = 'none';
  contact_section.style.display = 'none';
  listSection.style.display = 'flex';
  list.style.color = 'blue';
  addBook.style.color = 'black';
  contact1.style.color = 'black';
});

addBook.addEventListener('click', () => {
  formSection.style.display = 'flex';
  contact_section.style.display = 'none';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook.style.color = 'blue';
  contact1.style.color = 'black';
});

contact1.addEventListener('click', () => {
  formSection.style.display = 'none';
  contact_section.style.display = 'flex';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook.style.color = 'black';
  contact1.style.color = 'blue';
});