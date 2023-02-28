/* eslint-disable max-classes-per-file */

import Book from './modules/bookClass.js';
import BookManager from './modules/bookManager.js';
import { DateTime } from './modules/luxon.js';
//import { addContact, addForm, addList } from './modules/navigation.js';

const time = document.getElementById('date');
time.innerHTML = DateTime.now();

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
const list = document.getElementById('list');
const addBook1 = document.getElementById('add_book');
const contact1 = document.getElementById('contact');

const formSection = document.getElementById('form_cont');
const listSection = document.getElementById('list_setion');
const contact_section = document.getElementById('contact_section');

list.addEventListener('click', () => {
  

  formSection.style.display = 'none';
  contact_section.style.display = 'none';
  listSection.style.display = 'block';
  list.style.color = 'blue';
  addBook1.style.color = 'black';
  contact1.style.color = 'black';
});

addBook1.addEventListener('click', () => {
  formSection.style.display = 'flex';
  contact_section.style.display = 'none';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook1.style.color = 'blue';
  contact1.style.color = 'black';
});

contact1.addEventListener('click', () => {
  formSection.style.display = 'none';
  contact_section.style.display = 'flex';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook1.style.color = 'black';
  contact1.style.color = 'blue';
  
});

