export default function addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  };