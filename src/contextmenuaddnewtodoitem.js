import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'
import {returnPriorityLevelsProjects,getCustomProjects} from './sidebardatamanager'
import {TodoItem} from './todoItemClass'
import {listOfTodoItems} from './index'
import {todoListBuilder} from './buildlistoftodoitems'

function contextMenuAddNewTodoItem(){
        return (elt('div',{className:'div-add-newtodo-form hidden',id:'div-add-newtodo-form'},

        elt('div',{className:'div-parent-form'},
        elt('div',{className: 'div-custom-menu-title'},
                
                    elt('h3',{className:'div-custom-title'},'Add New Item')),
        elt('form',{className:'newtodoform',onsubmit(event){
                event.preventDefault();
                console.log('here')
                
                        getFieldItems();
                        document.querySelector('.newtodoform').reset();
                        hideUnhide(document.querySelector('.div-add-newtodo-form'));
                        
                        
            }},
            elt('div',{className: 'todo-fields-section'},
                elt('label',{className:'new-todo-title-label new-todo-label',for:'new-todo-title'},'Title'),
                    
                
            elt('input',{id:'new-todo-title',className:'new-todo-title',type: 'text', required:true}),

            elt('label',{className:'new-todo-description-label new-todo-label',for:'new-todo-description'},'Description'),
            elt('br'),
            elt('textarea',{id:'new-todo-description',className:'new-todo-description',rows: '4'  ,required:true}),
            elt('br'),
            elt('label',{className:'new-todo-duedate-label new-todo-label',for:'new-todo-duedate'},'Due Date'),
            elt('input',{id:'new-todo-duedate',className:'new-todo-duedate',type: 'datetime-local', required:true}),

            elt('label',{className:'new-todo-priority-label new-todo-label',for:'new-todo-priority'},'Priority'),
            elt('select',{id:'new-todo-priority',required:true,className:'new-todo-priority block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'},...addOptionsForPriorityDropDown()),

            elt('label',{className:'new-todo-project-label new-todo-label',for:'new-todo-priority'},'Project'),
            elt('select',{id:'new-todo-project',required:true,className:'new-todo-project block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'},...addOptionsForCustomProject())
            
            ),

            elt('div',{className: 'div-new-todo-buttons'},
                elt('button',{id:'div-custom-cancel-button' , className:'bg-gray-100 hover:bg-gray-700 px-4  	 text-black rounded div-custom-button',onclick(){
                        hideUnhide(document.querySelector('.div-add-newtodo-form'));
                        localStorage.clear();
                        document.querySelector('.newtodoform').reset();
                },type: 'button',value:'cancel'},'Cancel'),
                elt('button', {id:'div-custom-add-button', className:'bg-red-500 hover:bg-red-700   px-4	 text-white  rounded div-custom-button',type: 'submit',value:'add'},'Add Task'))

            
)

)
        )
                
        );
        // console.log(elt('input'));
}
function addOptionsForPriorityDropDown(){
        return returnPriorityLevelsProjects().map((pr)=>elt('option',{value:`${pr}`},pr));
    }
function addOptionsForCustomProject(){
        return [elt('option',{value:`Inbox`},'Inbox')].concat(getCustomProjects().map((project)=>elt('option',{value:`${project.name}`},project.name)))
}
function getFieldItems(){
        let todotitle = document.querySelector('#new-todo-title').value;
        let tododescription = document.querySelector('#new-todo-description').value
        let tododuedate = document.querySelector('#new-todo-duedate').value;
        let todopriority = document.querySelector('#new-todo-priority').options[document.querySelector('#new-todo-priority').selectedIndex].value  
        let todoproject = document.querySelector('#new-todo-project').options[document.querySelector('#new-todo-project').selectedIndex].value

        let editid = localStorage.getItem('editid');
        if(editid){

                listOfTodoItems.forEach((item)=>{
                        if(item.id == editid){
                                // console.log(editid, todoproject)
                                item.title = todotitle
                                item.description  = tododescription
                                item.dueDate = new Date(tododuedate)
                                item.priority = todopriority
                                item.project = todoproject
                        }
                })
                localStorage.clear();
        }else {
                listOfTodoItems.push(new TodoItem(todotitle,tododescription,new Date(tododuedate),todopriority,todoproject))

        }
        

        

        document.querySelector('.content-main').replaceChild(todoListBuilder(listOfTodoItems),document.querySelector('.list-of-todo'))
        console.log(listOfTodoItems);

        // let colorselectorfield  = document.querySelector('.div-custom-color')
        // let color = colorselectorfield.options[colorselectorfield.selectedIndex].value 
        // console.log(addCustomProject(projectname,color))
        
    
        // document.querySelector('.content-body').replaceChild(buildSideNav(getCustomProjects),document.querySelector('.sidebar'));
        // hideUnhide(document.querySelector('.div-custom-project-menu'));
        // console.log(projectname,color);
    }

export {contextMenuAddNewTodoItem};