import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'

function contextCustomProjectMenuDom(){
    return (elt('div',{className:'div-custom-project-menu hidden',id:'custom-menu-project'},

                elt('div',{className:'div-custom-menu'},
                elt('div',{className: 'div-custom-menu-title'},
                        
                            elt('h3',{className:'div-custom-title'},'Add Project')),
                elt('form',{className:'customProjectForm'},
                    elt('div',{className: 'div-custom-menu-fields'},
                        elt('label',{className:'customproject-label',for:'div-custom-name'},'Name'),
                            
                        
                    elt('input',{id:'div-custom-name',className:'div-custom-namefield',type: 'text'}),

                    elt('label',{className:'customproject-label',for:'div-custom-color'},'Color'),
                    elt('input',{id:'div-custom-color',className:'div-custom-colorfield',type: 'text'})),

                    elt('div',{className: 'div-custom-menu-buttons'},
                        elt('button',{id:'div-custom-cancel-button' , className:'bg-gray-100 hover:bg-gray-700 px-4  	 text-black rounded div-custom-button',onclick(){
                                hideUnhide(document.querySelector('.div-custom-project-menu'));
                        },type: 'button',value:'cancel'},'Cancel'),
                        elt('button',{id:'div-custom-add-button', className:'bg-red-500 hover:bg-red-700   px-4	 text-white  rounded div-custom-button',type: 'button',value:'add'},'Add'))
    ))
                )
                        
                );
        // console.log(elt('input'));
}



export {contextCustomProjectMenuDom};