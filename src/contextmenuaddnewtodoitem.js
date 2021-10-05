import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'

function contextMenuAddNewTodoItem(){
        return (elt('div',{className:'div-add-newtodo-form hidden',id:'div-add-newtodo-form'},

        elt('div',{className:'div-parent-form'},
        elt('div',{className: 'div-custom-menu-title'},
                
                    elt('h3',{className:'div-custom-title'},'Add New Item')),
        elt('form',{className:'newtodoform'},
            elt('div',{className: 'todo-fields-section'},
                elt('label',{className:'new-todo-title-label',for:'new-todo-title'},'Title'),
                    
                
            elt('input',{id:'new-todo-title',className:'new-todo-title',type: 'text'}),

            elt('label',{className:'new-todo-description-label',for:'new-todo-description'},'Description'),
            elt('input',{id:'new-todo-description',className:'new-todo-description',type: 'text'}),
            
            elt('label',{className:'new-todo-duedate-label',for:'new-todo-duedate'},'Due Date'),
            elt('input',{id:'new-todo-duedate',className:'new-todo-duedate',type: 'datetime-local'}),

            elt('label',{className:'new-todo-priority-label',for:'new-todo-priority'},'Priority'),
            elt('select',{id:'new-todo-priority',className:'new-todo-priority block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'}),

            elt('label',{className:'new-todo-project-label',for:'new-todo-priority'},'Project'),
            elt('select',{id:'new-todo-project',className:'new-todo-project block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'})
            
            ),

            elt('div',{className: 'div-new-todo-buttons'},
                elt('button',{id:'div-custom-cancel-button' , className:'bg-gray-100 hover:bg-gray-700 px-4  	 text-black rounded div-custom-button',onclick(){
                        hideUnhide(document.querySelector('.div-add-newtodo-form'));
                },type: 'button',value:'cancel'},'Cancel'),
                elt('button',{id:'div-custom-add-button', className:'bg-red-500 hover:bg-red-700   px-4	 text-white  rounded div-custom-button',type: 'button',value:'add'},'Add Task'))

            
)

)
        )
                
        );
        // console.log(elt('input'));
}



export {contextMenuAddNewTodoItem};