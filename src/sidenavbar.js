import {elt} from '../../restaurantpage/src/domelementbuilder';
import {addCustomProject,deleteCustomProject,getMainMenu,getCustomProjects,returnColorsForCustomProjects, returnProjectObj} from './sidebardatamanager';
import {hideUnhide} from './utilityfunctions'
import {todoListBuilder} from './buildlistoftodoitems'
import {listOfTodoItems} from './index'
import { format, compareAsc , toDate,parseISO,differenceInSeconds } from 'date-fns'
// import {buildSideNav} from './sidenavbar'

console.log(addCustomProject('Project1','red'));
addCustomProject('Project 1','green');
addCustomProject('Project 2','red');
addCustomProject('Project 3','yellow');
console.log(getMainMenu())
console.log(getCustomProjects())

function buildSideNav(){
    return elt('div',{className:'h-full w-72 sidebar'},
                    elt('ul',{className:'sidebar-Projectslist'},
                    ...buildProjectItems(getMainMenu()) ));


}

function buildProjectItems(arr){
    if(arr.length >0 ){
        return  arr.map(a=> {
            if(a.toLowerCase()=='inbox')
            return elt('li',{className:'sidebar-ProjectItems sidemenutop',onclick(event){
                document.querySelector('.content-main').replaceChild(inboxClick('Inbox'),document.querySelector('.list-of-todo'));

            }},elt('div',{className:'customprojectslistdiv'},elt('i',{className:`fas fa-${a.toLowerCase()}`}),elt('h4',{className:`${a} sidemenu-main`,id:a},a))); 
            else 
            return elt('li',{className:'sidebar-ProjectItems'},elt('div',{className:'customprojectslistdiv'},elt('i',{className:`fas fa-angle-down`,onclick(event){
                //if(event.target !==document.querySelector('.fa-plus'))
                // alert('clicked')
                if(document.querySelector('.fa-angle-down')){
                    document.querySelector('.fa-angle-down').className = 'fas fa-angle-right'
                }else if(document.querySelector('.fa-angle-right')){
                    document.querySelector('.fa-angle-right').className = 'fas fa-angle-down'
                }
                 hideUnhide(document.querySelector('.sidebar-customProjectslist'))
             }}),elt('h4',{className:`${a} sidemenu-main`,id:a,onclick(event){
               // if(event.target !==document.querySelector('.fa-plus'))
                // alert('clicked')
                if(document.querySelector('.fa-angle-down')){
                    document.querySelector('.fa-angle-down').className = 'fas fa-angle-right'
                }else if(document.querySelector('.fa-angle-right')){
                    document.querySelector('.fa-angle-right').className = 'fas fa-angle-down'
                }
                 hideUnhide(document.querySelector('.sidebar-customProjectslist'))
             }},a),elt('i',{className:`fas fa-plus fa-xs`,onclick(event){
                console.log(document.querySelector('.div-custom-project-menu'))
                hideUnhide(document.querySelector('.div-custom-project-menu'))
                    
                
            }})),
                elt('ul',{className:'sidebar-customProjectslist'},...buildCustomProjectItems(getCustomProjects()))); 
            
         });
    }
    //...buildCustomProjectItems(getCustomProjects())
}

console.log(buildCustomProjectItems(getCustomProjects()))

function buildCustomProjectItems(arr){
    return  arr.map(a=> {
        // if(!a.name.toLowerCase()=='inbox')
        return elt('li',{className:'sidebar-CustomProjectItems Customsidemenutop',onmouseenter(event){
            event.stopPropagation();
            console.log(event.target.querySelector('.fa-times'));
            event.target.querySelector('.fa-times').classList.toggle('hidden');
        },onmouseleave(event){
            event.stopPropagation();
            event.target.querySelector('.fa-times').classList.toggle('hidden');
        },ondblclick(event){
            console.log(event.target)

            console.log(returnProjectObj(event.target.textContent));
            let customproject = returnProjectObj(event.target.textContent)
            document.querySelector('.div-custom-project-menu').classList.toggle('hidden');
            document.querySelector('#div-custom-name').value = customproject.name
            document.querySelector('#div-custom-color').selectedIndex = Array.from(document.querySelector('#div-custom-color').options).findIndex(option => option.value == customproject.color)
            console.log(Array.from(document.querySelector('#div-custom-color').options).findIndex(option => option.value == customproject.color))
            // colorselectorfield.options[colorselectorfield.selectedIndex].value 
        },onclick(event){
            let currentdate = new Date();
            document.querySelector('.project-title').textContent = event.target.textContent
            document.querySelector('.content-main').replaceChild(todoListBuilder(listOfTodoItems.filter((item)=>item.project == event.target.textContent).sort((fitem,sitem)=>{
               if (differenceInSeconds(fitem.dueDate,currentdate) < differenceInSeconds(sitem.dueDate,currentdate)){
                   return -1
               }
               if(differenceInSeconds(fitem.dueDate,currentdate) > differenceInSeconds(sitem.dueDate,currentdate)) {
                   return 1
               }
               return 0

            })),document.querySelector('.list-of-todo'));

        }},elt('div',{className:'project-color-name-group'},elt('div',{className:`custom-color bg-${a.color}-700`}),elt('h4',{className:`${a.name} Customsidemenu-main`,id:a.name},a.name)),elt('i',{className:`fas hidden fa-times fa-xs`,onclick(event){
            console.log(event.target.previousSibling.querySelector('.Customsidemenu-main').textContent);

            deleteCustomProject(event.target.previousSibling.querySelector('.Customsidemenu-main').textContent)
            document.querySelector('.content-body').replaceChild(buildSideNav(getCustomProjects),document.querySelector('.sidebar'));
            
        }})); 
        // else 
        // return elt('li',{className:'sidebar-ProjectItems'},elt('i',{className:`fas fa-angle-right`}),elt('h4',{className:`${a} sidemenu-main`,id:a},a),elt('i',{className:`fas fa-plus fa-xs`})); 
        
     });
 }

function inboxClick(a){
    document.querySelector('.project-title').textContent = a
    let currentdate = new Date();

    return todoListBuilder(listOfTodoItems.sort((fitem,sitem)=>{
        if (differenceInSeconds(fitem.dueDate,currentdate) < differenceInSeconds(sitem.dueDate,currentdate)){
            return -1
        }
        if(differenceInSeconds(fitem.dueDate,currentdate) > differenceInSeconds(sitem.dueDate,currentdate)) {
            return 1
        }
        return 0

     }))
                
                // document.querySelector('.content-main').replaceChild(todoListBuilder(listOfTodoItems.sort((fitem,sitem)=>{
                //     if (differenceInSeconds(fitem.dueDate,currentdate) < differenceInSeconds(sitem.dueDate,currentdate)){
                //         return -1
                //     }
                //     if(differenceInSeconds(fitem.dueDate,currentdate) > differenceInSeconds(sitem.dueDate,currentdate)) {
                //         return 1
                //     }
                //     return 0
     
                //  })));
}


deleteCustomProject('Project 1');

export {buildSideNav,inboxClick}