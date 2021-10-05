import {elt} from '../../restaurantpage/src/domelementbuilder';
import {addCustomProject,deleteCustomProject,getMainMenu,getCustomProjects} from './sidebardatamanager';
import {hideUnhide} from './utilityfunctions'

console.log(addCustomProject('Project1','red'));
addCustomProject('Project1','green');
addCustomProject('Project2','red');
addCustomProject('Project3','yellow');
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
            return elt('li',{className:'sidebar-ProjectItems sidemenutop'},elt('div',{className:'customprojectslistdiv'},elt('i',{className:`fas fa-${a.toLowerCase()}`}),elt('h4',{className:`${a} sidemenu-main`,id:a},a))); 
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
        return elt('li',{className:'sidebar-CustomProjectItems Customsidemenutop'},elt('div',{className:`custom-color bg-${a.color}-700`}),elt('h4',{className:`${a.name} Customsidemenu-main`,id:a.name},a.name)); 
        // else 
        // return elt('li',{className:'sidebar-ProjectItems'},elt('i',{className:`fas fa-angle-right`}),elt('h4',{className:`${a} sidemenu-main`,id:a},a),elt('i',{className:`fas fa-plus fa-xs`})); 
        
     });
 }




deleteCustomProject('Project1');

export {buildSideNav}