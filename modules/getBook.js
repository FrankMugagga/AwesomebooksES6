export default getBooksFromLocalStorage() {
    /* this.booksString = localStorage.getItem('books'); */
    const booksString = localStorage.getItem('books');
    return booksString ? JSON.parse(booksString) : [];
  }