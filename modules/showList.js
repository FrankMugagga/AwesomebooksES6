/*import Book from './modules/bookClass.js';
import BookManager from './bookManager.js';
class UserInterface {
    displayBooks(){
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
 

  export default displayBooks;*/