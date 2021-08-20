import {sideBarCustomPoject} from './sidebarcustomprojectsclass';
import {deleteObjectFromArray} from './utilityfunctions';

let sidebarmenuItems = [{name: 'Inbox'},{name:'Projects',custom:[]}];

function addCustomProject(name,color){

    if(sidebarmenuItems[1].custom.length>0){
        for(let cus of sidebarmenuItems[1].custom){
            if(cus.name == name){
                cus.name = name;
                cus.color = color;
            }else{
             sidebarmenuItems[1].custom.push(new sideBarCustomPoject(name,color));
            }
     
            return sidebarmenuItems;
        }
     
    }else{
        sidebarmenuItems[1].custom.push(new sideBarCustomPoject(name,color));
        return sidebarmenuItems;
    }
   
   
}

function deleteCustomProject(name){
    sidebarmenuItems[1].custom = deleteObjectFromArray(sidebarmenuItems[1].custom ,name);
    return sidebarmenuItems;
}

function getMainMenu(){
    return sidebarmenuItems.map(a=>a.name);

}
function getCustomProjects(){
    return sidebarmenuItems[1].custom.map(a=>a);
}

export {addCustomProject,deleteCustomProject,getCustomProjects,getMainMenu}