import { Book } from "./modules/book.js";
import { BookManager } from "./modules/bookManager.js";
import { displayBooks } from "./modules/displayBooks.js";
import { DateTime } from './modules/luxon.js';

const time = document.getElementById('date');
time.innerHTML = DateTime.now();

const bookForm = document.getElementById("bookForm");
const booksList = document.getElementById("booksList");

const bookManager = new BookManager();

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");

  const title = titleInput.value;
  const author = authorInput.value;

  const book = new Book(title, author);
  bookManager.addBook(book);

  titleInput.value = "";
  authorInput.value = "";

  displayBooks(bookManager, booksList);
  bookForm.reset();
});

displayBooks(bookManager, booksList);

const list = document.getElementById('list');
const addBook1 = document.getElementById('add_book');
const contact1 = document.getElementById('contact');

const formSection = document.getElementById('form_cont');
const listSection = document.getElementById('list_setion');
const contactSection = document.getElementById('contact_section');

list.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  listSection.style.display = 'block';
  list.style.color = 'blue';
  addBook1.style.color = 'black';
  contact1.style.color = 'black';
});

addBook1.addEventListener('click', () => {
  formSection.style.display = 'flex';
  contactSection.style.display = 'none';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook1.style.color = 'blue';
  contact1.style.color = 'black';
});

contact1.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'flex';
  listSection.style.display = 'none';
  list.style.color = 'black';
  addBook1.style.color = 'black';
  contact1.style.color = 'blue';
});

