import { list, listSection } from './selectors.js';

 export const addList = () => {   
    listSection.style.display = 'block';
    list.style.color = 'blue';
 }
