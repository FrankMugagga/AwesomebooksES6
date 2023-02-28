addBook = (book) => {
  this.books.push(book);
  this.saveBooksToLocalStorage();
} 

export default addBook;
