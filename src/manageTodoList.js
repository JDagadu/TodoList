import {TodoItem} from './todoItemClass';

let firstItem = new TodoItem('First Item','First Todo Item',new Date());
firstItem.addsubTask([new TodoItem('First SubTask Item','First SubTask Item',new Date())]);

console.log(firstItem);
