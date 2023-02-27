addBook(book) {
    this.books.push(book);
    this.saveBooksToLocalStorage();
  }