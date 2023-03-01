export default function displayBooks(bookManager, booksList) {
  const books = bookManager.getBooks();
  booksList.innerHTML = '';
    books.forEach((book, index) => {
    const li = document.createElement('li');
    li.classList.add('listed');
    li.innerHTML = `<section class="list_ite"> <div class="book_tit">"${book.title}"</div> <div class="by">by</div> <div class="book_aut"> by ${book.author}</div> </section>`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      bookManager.removeBook(index);
      displayBooks(bookManager, booksList);
    });
    li.appendChild(deleteButton);
    booksList.appendChild(li);
    });
  }  