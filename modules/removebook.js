export default removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooksToLocalStorage();
  }