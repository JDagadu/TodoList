import {elt} from '../../restaurantpage/src/domelementbuilder'
import {hideUnhide} from './utilityfunctions'


function buildHeaderNav(){
    
return elt('div',{className:'h-12 w-full headerbar'},
elt('div',{className:'p-8 m-0 left-header-icons'},
        elt('i',{className:'fas fa-bars p-2',onclick(event) {
            sideNavDrawer(event)
          }}),
        elt('i',{className:'fas fa-home p-2'})),
elt('div',{className:'p-8 m-0 right-header-icons'},
        elt('i',{className:'fas fa-plus p-2',onclick(event){
            hideUnhide(document.querySelector('.div-add-newtodo-form'))
        }})));

}



function sideNavDrawer(event){
    // let elementstyle = document.querySelector('.sidebar').style.display
    hideUnhide(document.querySelector('.sidebar'))
    // if(elementstyle =='' || elementstyle =='none'){
    //     document.querySelector('.sidebar').style.display = 'block';
    //     document.querySelector('.content-main').classList.toggle('ml-72');
    // }else{
    //     document.querySelector('.sidebar').style.display = 'none';
        document.querySelector('.content-main').classList.toggle('ml-72');
    // }
    console.log();
}



export {buildHeaderNav};