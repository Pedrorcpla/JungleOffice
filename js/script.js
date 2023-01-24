const header = document.querySelector("#header");
var altura = header.clientHeight;

const menuItems = document.querySelectorAll('.header .menu a');
const summaryItems = document.querySelectorAll('.summary a');
const headerHeight = document.querySelector('#header').offsetHeight;

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});
summaryItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event){
    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    if(id != "#hello" && id != "#contact"){
        document.querySelector(id).classList.remove('actived');
        document.querySelector(id).classList.add('actived');
    }
    
    window.scroll({
        top: to - headerHeight,
        behavior: 'smooth',
    });
}

// 2 3 1 1 -- Logo topo
const svg = document.querySelectorAll(".st0");
const menu = document.querySelector("#menu");
const hamburger = document.querySelector(".hamburger");

document.onscroll = () => {
    const hello = document.querySelector("#hello").offsetTop;
    const about = document.querySelector("#about").offsetTop;
    const services = document.querySelector("#services").offsetTop;
    const customers = document.querySelector("#customers").offsetTop;

    if(window.scrollY >= hello && window.scrollY < about){
        // svg.style.fill = '#70E000';
        svg.forEach(object => {
            object.style.fill = '#008000';
        })
        menu.classList.add('menu');
        menu.classList.remove('menu-white');
        hamburger.classList.remove('hamburger-light');
    }
    else if(window.scrollY >= about && window.scrollY < services){
        svg.forEach(object => {
            object.style.fill = '#001400';
        })
        menu.classList.add('menu-white');
        menu.classList.remove('menu');
        hamburger.classList.add('hamburger-light');
    }
    else if(window.scrollY >= services && window.scrollY < customers){
        svg.forEach(object => {
            object.style.fill = '#CCFF33';
        })
        menu.classList.add('menu-white');
        menu.classList.remove('menu');
        hamburger.classList.add('hamburger-light');
    }
    else if(window.scrollY >= customers){
        svg.forEach(object => {
            object.style.fill = '#70E000';
        })
        menu.classList.add('menu-white');
        menu.classList.remove('menu');
        hamburger.classList.add('hamburger-light');
    }
}

function openCard(element){
    element.classList.toggle('actived');
}
