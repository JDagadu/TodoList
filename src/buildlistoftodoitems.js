import {elt} from '../../restaurantpage/src/domelementbuilder'
import { TodoItem } from './todoItemClass';
import {hideUnhide} from './utilityfunctions'
// import {TodoItem} from './todoItemClass'
import { format, compareAsc , toDate,parseISO} from 'date-fns'


function todoListBuilder(todoList){
console.log(todoList)
return elt('ul',{className:'list-of-todo'},
        ...todoListItemBuilder(todoList))




}

function todoListItemBuilder(todoList){

    return todoList.map((todoitem)=>{
        return elt('li',{className:'todo-list-item',id:todoitem.id},
        elt('div',{className:'todo-item-div'},
            elt('div',{className:'div-check-title-group'},
        
                    elt('input',{className:'completed-item-checkbox ',type:'checkbox' , checked:todoitem.completed,onclick(event){
                        
                            event.target.parentElement.querySelector('.todo-item-title').classList.toggle(`title-${event.target.checked}`)
                            event.target.parentElement.querySelector('.todo-item-title').classList.toggle(`title-${!event.target.checked}`)
                            todoitem.completed = event.target.checked 
                    }}),
                    elt('h3',{className:`todo-item-title title-${todoitem.completed}`},todoitem.title)
            )
               ,
                elt('div',{className:'list-ic-div'},
                    elt('i',{className:'fas fa-edit list-ic',onclick(event){

                        hideUnhide(document.querySelector('#div-add-newtodo-form'));
                        // console.log(returnProjectObj(event.target.textContent));
            let todo = todoList.filter((a)=>{console.log(a);if (a.id ==event.target.parentElement.parentElement.parentElement.id){

                return a
            } })[0] ;
            // returnProjectObj(event.target.textContent)
            // document.querySelector('.div-custom-project-menu').classList.toggle('hidden');
            localStorage.setItem('editid',event.target.parentElement.parentElement.parentElement.id);
            document.querySelector('#new-todo-title').value = todo.title
            document.querySelector('#new-todo-description').value = todo.description
            document.querySelector('#new-todo-duedate').value = format(todo.dueDate,"yyyy-MM-dd'T'HH:mm")
            document.querySelector('#new-todo-priority').selectedIndex =Array.from(document.querySelector('#new-todo-priority').options).findIndex(option => option.value == todo.priority)
            document.querySelector('#new-todo-project').selectedIndex =Array.from(document.querySelector('#new-todo-project').options).findIndex(option => option.value == todo.project)

            // document.querySelector('#div-custom-color').selectedIndex = Array.from(document.querySelector('#div-custom-color').options).findIndex(option => option.value == customproject.color)
                    }}),
                    elt('i',{className:`fas fa-flag list-ic flag-${todoitem.priority}`}),
                    elt('i',{className:'fas fa-trash list-ic',onclick(event){

                        let newList = todoList.filter((todoitemm)=>{
                            console.log(`${todoitemm.id == event.target.parentElement.parentElement.parentElement.id}`)
                            if(todoitemm.id != event.target.parentElement.parentElement.parentElement.id){
                                return todoitemm;
                            }
                        })
                        document.querySelector('.content-main').replaceChild(todoListBuilder(newList),document.querySelector('.list-of-todo'))
                        
                    }})))
                )
    })

   
    
}



export {todoListBuilder};