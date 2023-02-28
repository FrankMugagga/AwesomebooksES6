export default displayBooks() {
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