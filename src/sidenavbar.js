import {elt} from '../../restaurantpage/src/domelementbuilder';
import {addCustomProject,deleteCustomProject,getMainMenu,getCustomProjects} from './sidebardatamanager';

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
            return elt('li',{className:'sidebar-ProjectItems'},elt('div',{className:'customprojectslistdiv'},elt('i',{className:`fas fa-angle-down`}),elt('h4',{className:`${a} sidemenu-main`,id:a},a),elt('i',{className:`fas fa-plus fa-xs`})),
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