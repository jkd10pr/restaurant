import loadHeader from './header';
import loadHome from './home';
import loadFooter from './footer';

import loadMenu from './menu';
import loadContact from './contact'

const loadPage = () =>{
    let content = document.querySelector('#content');

    content.appendChild(loadHeader());
    content.appendChild(loadHome());
    content.appendChild(loadFooter());

    let buttons = document.querySelectorAll('.button');
    buttons.forEach((element)=>element.addEventListener('click',switchTab))
}

const switchTab = (e)=>{
    let tabToLoad = e.target.dataset.index;
    let buttons = document.querySelectorAll('.button');
    let content = document.querySelector('#content');
    let tabContent = document.querySelector('#main-wrapper');

    switch(tabToLoad){
        case '1':
            content.replaceChild(loadHome(),tabContent);
            break;
        case '2':
            content.replaceChild(loadMenu(),tabContent);
            break;
        case '3':
            content.replaceChild(loadContact(),tabContent);
            break;
        default:
            content.replaceChild(loadHome(),tabContent);
            break;
    }

    buttons.forEach(button=>button.classList.remove('active'));
    e.target.classList.add('active');
}


export default loadPage;