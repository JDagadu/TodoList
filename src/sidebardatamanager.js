import {sideBarCustomPoject} from './sidebarcustomprojectsclass';
import {deleteObjectFromArray} from './utilityfunctions';

let sidebarmenuItems = [{name: 'Inbox'},{name:'Projects',custom:[]}];
let customcolors = ['gray','red','yellow','green','blue','indigo','purple','pink'];
let prioritylevels = ['low','medium','high'];

function returnColorsForCustomProjects(){
    return customcolors;
}
function returnPriorityLevelsProjects(){
    return prioritylevels;
}

function returnProjectObj(name){
    return sidebarmenuItems[1].custom.find(obj => obj.name == name);
}

function addCustomProject(name,color){
    if(!checkDuplicateProject(name,color)){
       return  sidebarmenuItems[1].custom.push(new sideBarCustomPoject(name,color));
    }
    // if(sidebarmenuItems[1].custom.length>0){
    //     for(let cus of sidebarmenuItems[1].custom){
    //         console.log(cus.name,name);
    //         if(cus.name == name){
                
                
    //         }else{
    //          sidebarmenuItems[1].custom.push(new sideBarCustomPoject(name,color));
    //         }
     
            
    //     }
    //     return sidebarmenuItems;
    // }else{
    //     sidebarmenuItems[1].custom.push(new sideBarCustomPoject(name,color));
    //     return sidebarmenuItems;
    // }
   
   
}

function deleteCustomProject(name){
    sidebarmenuItems[1].custom = deleteObjectFromArray(sidebarmenuItems[1].custom ,name);
    return sidebarmenuItems;
}

function getMainMenu(){
    return sidebarmenuItems.map(a=>a.name);

}
function getCustomProjects(){
    console.log(sidebarmenuItems[1].custom.map(a=>a));
    return sidebarmenuItems[1].custom.map(a=>a);
}

function checkDuplicateProject(name,color){
    let counter = 0;
    for(let cus of sidebarmenuItems[1].custom){
        console.log(cus.name,name);
        if(cus.name.toString().toLowerCase() == name.toLowerCase()){
           cus.name = name;
           cus.color = color;
           counter++
        }
 
        
    }
    // console.log(counter)

     if (counter >0)  return true; else false 


}
export {addCustomProject,deleteCustomProject,getCustomProjects,getMainMenu,returnColorsForCustomProjects,returnProjectObj,returnPriorityLevelsProjects}