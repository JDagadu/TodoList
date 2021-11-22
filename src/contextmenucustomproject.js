import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'
import {returnColorsForCustomProjects,addCustomProject,getCustomProjects} from './sidebardatamanager'
import {buildSideNav} from './sidenavbar'


function contextCustomProjectMenuDom(){
    return (elt('div',{className:'div-custom-project-menu hidden',id:'custom-menu-project'},

                elt('div',{className:'div-custom-menu'},
                elt('div',{className: 'div-custom-menu-title'},
                        
                            elt('h3',{className:'div-custom-title'},'Add Project')),
                elt('form',{className:'customProjectForm',onsubmit(event){
                    event.preventDefault();
                    console.log('here')
                    
                            getFieldItems();
                            
                }},
                    elt('div',{className: 'div-custom-menu-fields'},
                        elt('label',{className:'customproject-label',for:'div-custom-name'},'Name'),
                            
                        
                    elt('input',{id:'div-custom-name',className:'div-custom-namefield',type: 'text',name:'name',required:true}),

                    elt('label',{className:'customproject-label',for:'div-custom-color'},'Color'),
                    // elt('input',{id:'div-custom-color',className:'div-custom-colorfield',type: 'text',name:'name',required:true})),
                    elt('select',{id:'div-custom-color',className:'div-custom-color block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline'},...addOptionsForColorsDropDown())
                    ),

                    elt('div',{className: 'div-custom-menu-buttons'},
                        elt('button',{id:'div-custom-cancel-button' , className:'bg-gray-100 hover:bg-gray-700 px-4  	 text-black rounded div-custom-button',onclick(){
                                hideUnhide(document.querySelector('.div-custom-project-menu'));
                        },type: 'button',value:'cancel'},'Cancel'),
                        elt('button',{id:'div-custom-add-button', className:'bg-red-500 hover:bg-red-700   px-4	 text-white  rounded div-custom-button'
                    //     ,onclick(event){
                    //         // hideUnhide(document.querySelector('.div-custom-project-menu'));
                    //         // console.log(document.querySelector('.customProjectForm'))
                            
                            

                    // }
                    ,type: 'submit',value:'add'},'Add'))
    ))
                )
                        
                );
        // console.log(elt('input'));
}


function addOptionsForColorsDropDown(){
    return returnColorsForCustomProjects().map((color)=>elt('option',{value:`${color}`},color));
}

function getFieldItems(){
    let projectname = document.querySelector('.div-custom-namefield').value 
    let colorselectorfield  = document.querySelector('.div-custom-color')
    let color = colorselectorfield.options[colorselectorfield.selectedIndex].value 
    console.log(addCustomProject(projectname,color))
    

    document.querySelector('.content-body').replaceChild(buildSideNav(getCustomProjects),document.querySelector('.sidebar'));
    hideUnhide(document.querySelector('.div-custom-project-menu'));
    // console.log(projectname,color);
}

export {contextCustomProjectMenuDom};