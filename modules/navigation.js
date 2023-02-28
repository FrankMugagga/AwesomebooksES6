export const addContact = () => {
    formSection.style.display = 'none';
    contact_section.style.display = 'flex';
    listSection.style.display = 'none';
    list.style.color = 'black';
    addBook.style.color = 'black';
    contact1.style.color = 'blue';
  }

  export const addForm = ()=>{
    formSection.style.display = 'flex';
    contact_section.style.display = 'none';
    listSection.style.display = 'none';
    list.style.color = 'black';
    addBook.style.color = 'blue';
    contact1.style.color = 'black';
  }

  export const addList = () => {
    formSection.style.display = 'none';
    contact_section.style.display = 'none';
    listSection.style.display = 'block';
    list.style.color = 'blue';
    addBook.style.color = 'black';
    contact1.style.color = 'black';
  }