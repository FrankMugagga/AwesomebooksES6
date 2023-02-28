// import Book from './modules/bookClass.js';

// import addBook from './modules/addbooks.js';
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
      li.innerHTML = `
          <b>${book.title}</b> by ${book.author} <button onclick="bookManager.removeBook(${index})">Delete</button>
                
          `;
      booksList.appendChild(li);
    });
  }
}

export default BookManager;