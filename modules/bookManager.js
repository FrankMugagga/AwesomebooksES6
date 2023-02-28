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
    this.booksString = localStorage.getItem('books');
    //const booksString = localStorage.getItem('books'); 
    return this.booksString ? JSON.parse(booksString) : [];
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
      li.classList.add('list_class');
          li.innerHTML = `
          <section class="list_ite"> <div class="book_tit">"${book.title}"</div> <div class="by">by</div> <div class="book_aut">${book.author}</div> </section> <button onclick="bookManager.removeBook(${index})">Delete</button>
                
          `;
      booksList.appendChild(li);
    });
  }
}

export default BookManager;