import {elt} from '../../restaurantpage/src/domelementbuilder';

function buildSideNav(){
    return elt('div',{className:'h-full w-72 sidebar'});


}

export {buildSideNav}