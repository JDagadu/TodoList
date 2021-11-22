function findIndex(arr,data){
    let index;
    for (let i = 0;i<arr.length;i++){
        
        if(arr[i].name == data){
            index = i;
            break;
        }
        
    }
    return index;
}

function deleteObjectFromArray(arr,data){
    arr.splice(findIndex(arr,data),1)
    return arr;
}


function hideUnhide(element){
    // console.log(element);
    // console.log(document.querySelector('.sidebar-customProjectslist'));
    // let elementstyle = element.style.display
    // console.log(elementstyle);
    // if(elementstyle =='' || elementstyle =='none'){
    //     if(element ==document.querySelector('.sidebar-customProjectslist')){
    //         console.log('found');
    //         element.style.display = 'block';
            
    //     }else{
    //         element.style.display = 'flex';
    //     }
        
    // }else{
    //     element.style.display = 'none';
    // }
    // console.log();

    element.classList.toggle('hidden');
}

export {findIndex,deleteObjectFromArray,hideUnhide};