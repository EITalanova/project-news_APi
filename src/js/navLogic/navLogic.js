import {KEY_CURRENT_PAGE} from "../const";
import { refs } from '../refs';
import * as storage from '../storageLogic';
import * as render from '../renderMarkup';

// import in index.js

//DESK NAV LOGIC
refs.nav.addEventListener("click",(e) => {
    let curr = e.target.parentNode;
    let list = e.currentTarget.children;
    let currPage = e.target.textContent
    clearNavCurrent(list,"current-list__item");
    curr.classList.add("current-list__item");
    storage.saveToLocal("currentPage", currPage);
    toHideCategories(currPage);
})

export function clearNavCurrent(list,_class){
    console.log(list)
    Array.from(list).forEach(elem => {
        if(elem.classList.contains(_class)) elem.classList.remove(_class);
    })
}


 function toHideCategories(currentPage) {
    const navArray = ['Favorite', 'Read'];
  if (navArray.includes(currentPage)) {
    refs.categoriesContainer.classList.add('hidden-categories');
  } else {
    refs.categoriesContainer.classList.remove('hidden-categories');
  }
}

//  MOB NAV LOGIC

 refs.navMobile.addEventListener("click",(e)=>{
    let currPage = e.target.dataset.value;

    if(e.target.nodeName === "SPAN" ) {
    let list = e.target.parentNode.parentNode.children;
    clearNavCurrent(list,"menu-current__item");
    e.target.parentNode.classList.add("menu-current__item")
    storage.saveToLocal("currentPage", currPage);
    toHideCategories(currPage);
    refs.mobileMenu.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);
    } 
 
 })


