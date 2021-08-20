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

export {findIndex,deleteObjectFromArray};