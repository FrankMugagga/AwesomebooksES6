export default function addBook(book) {
  this.books.push(book);
  this.saveBooksToLocalStorage();
}

export default addBook() => {
  this.books.push(book);
  this.saveBooksToLocalStorage();  
}