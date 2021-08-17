import { format, compareAsc , toDate,parseISO} from 'date-fns'
import {elt} from '../../restaurantpage/src/domelementbuilder'

import {TodoItem} from './todoItemClass';
import './css/styles.css';

document.body.append(elt('div',{className:'h-64'},
                            elt('div',{className:'p-4 m-4 bg-green-600'},
                                    elt('h1',{className:'text-2xl font-bold text-white'},'TailWind CSS Demo'))))

let firstItem = new TodoItem('First Item','First Todo Item',new Date());
firstItem.addsubTask([new TodoItem('First SubTask Item','First SubTask Item',new Date()),
new TodoItem('Sec SubTask Item','First SubTask Item',new Date()),
new TodoItem('Th SubTask Item','First SubTask Item',new Date())]);

console.log(firstItem);
let id = firstItem.subTask[1].id

firstItem.removesubTask(id);

console.log(firstItem);