import {elt} from '../../restaurantpage/src/domelementbuilder';

function buildMainContentPage(){
    return elt('div',{className:'h-screen w-full ml-72  content-main',id:'content-main'},'Hello, world!');


}

export {buildMainContentPage}