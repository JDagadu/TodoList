import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'


function todoListBuilder(){

return elt('ul',{className:'list-of-todo'},
        ...todoListItemBuilder())




}

function todoListItemBuilder(){
    return [elt('li',{className:'todo-list-item'},
            elt('div',{className:'todo-item-div'},
                elt('div',{className:'div-check-title-group'},
                        elt('input',{className:'completed-item-checkbox',type:'checkbox'}),
                        elt('h3',{className:'todo-item-title'},'Something to do')
                )
                   ,
                    elt('div',{className:'list-ic-div'},
                        elt('i',{className:'fas fa-edit list-ic'}),
                        elt('i',{className:'fas fa-flag list-ic'}),
                        elt('i',{className:'fas fa-trash list-ic'})))
                    ),
               
            elt('li',{className:'todo-list-item'},
            elt('div',{className:'todo-item-div'},
            elt('div',{className:'div-check-title-group'},
            elt('input',{className:'completed-item-checkbox',type:'checkbox'}),
            elt('h3',{className:'todo-item-title'},'Something new to do')
    ),
                    elt('div',{className:'list-ic-div'},
                        elt('i',{className:'fas fa-edit list-ic'}),
                        elt('i',{className:'fas fa-flag list-ic'}),
                        elt('i',{className:'fas fa-trash list-ic'}))
                    )
                    )
                ]
}

export {todoListBuilder};