export default class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  getBooks() {
    return this.books;
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}