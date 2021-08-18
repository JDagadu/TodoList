import {elt} from '../../restaurantpage/src/domelementbuilder'

function buildHeaderNav(){
    
return elt('div',{className:'h-12 w-full headerbar'},
elt('div',{className:'p-2 m-0 left-header-icons'},
        elt('i',{className:'fas fa-bars p-2',onclick(event) {
            sideNavDrawer(event)
          }}),
        elt('i',{className:'fas fa-home p-2'})),
elt('div',{className:'p-2 m-0 right-header-icons'},
        elt('i',{className:'fas fa-plus p-2'})));

}

function sideNavDrawer(event){
    let elementstyle = document.querySelector('.sidebar').style.display
    if(elementstyle =='' || elementstyle =='none'){
        document.querySelector('.sidebar').style.display = 'block';
    }else{
        document.querySelector('.sidebar').style.display = 'none';
    }
    console.log();
}

export {buildHeaderNav};