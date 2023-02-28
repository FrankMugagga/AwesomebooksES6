/* eslint-disable max-classes-per-file */

import Book from './modules/bookClass.js';
import BookManager from './modules/bookManager.js';
import { DateTime } from './modules/luxon.js';

const time = document.getElementById('date');
time.innerHTML = DateTime.now();

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

list.addEventListener('click', addList);

addBook.addEventListener('click', addForm);

contact1.addEventListener('click', addContact);
