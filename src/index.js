import { format, compareAsc , toDate,parseISO} from 'date-fns'
import {elt} from '../../restaurantpage/src/domelementbuilder'
import {buildHeaderNav} from './headernavbar'
import {buildSideNav,inboxClick} from './sidenavbar'
import {buildMainContentPage} from './maincontentpage'
import {contextCustomProjectMenuDom} from './contextmenucustomproject'
import {contextMenuAddNewTodoItem} from './contextmenuaddnewtodoitem'
import {todoListBuilder} from './buildlistoftodoitems'
import { hideUnhide } from './utilityfunctions'

import {TodoItem} from './todoItemClass';
import './css/styles.css';
import './css/styleheader.css';
import './css/stylesidebar.css';
import './css/stylemaincontent.css';
import './css/contextcustomprojectmenudomstyle.css';
import './css/contextmenuaddnewtodo.css';
import './css/FontAwesome/css/fontawesome.min.css'
import './css/FontAwesome/css/regular.min.css'
import './css/FontAwesome/css/solid.min.css'

let firstItem = new TodoItem('First Item','First Todo Item',new Date());


// firstItem.addsubTask([new TodoItem('First SubTask Item','First SubTask Item',new Date()),
// new TodoItem('Sec SubTask Item','First SubTask Item',new Date()),
// new TodoItem('Th SubTask Item','First SubTask Item',new Date())]);

let listOfTodoItems = [firstItem,new TodoItem('First SubTask Item','First SubTask Item',new Date()),new TodoItem('Sec SubTask Item','First SubTask Item',new Date())];

var devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;



// console.log(firstItem);
// let id = firstItem.subTask[1].id

// firstItem.removesubTask(id);

// console.log(firstItem);
let  contentbody = elt('div',{className:'content-body h-full w-full'});
document.body.append(contextCustomProjectMenuDom())
document.body.append(contextMenuAddNewTodoItem())
document.body.append(buildHeaderNav());


document.body.append(contentbody);
contentbody.append(buildSideNav());
contentbody.append(buildMainContentPage());
console.log(todoListBuilder(listOfTodoItems));
contentbody.querySelector('.content-main').append(inboxClick(document.querySelector('#Inbox').textContent))
console.log(document.querySelector('.fa-xs'));
console.log(document.querySelector('.customprojectslistdiv'));
if(devicewidth<=450){
    document.querySelector('.sidebar').classList.toggle('hidden');
}
// document.body.append(elt('div',{className:'h-64'},
// elt('div',{className:'p-4 m-4 bg-green-600'},
//         elt('h1',{className:'text-2xl font-bold text-white'},'TailWind CSS Demo'))))

export {listOfTodoItems}