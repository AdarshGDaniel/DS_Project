const openner = document.getElementById('opener');
const body = document.getElementById('body');

body.classList.add('notvis');

function load(){
    openner.classList.add('bg-white');
    setTimeout(() => {
        openner.classList.remove('bg-white');
        openner.innerHTML = " ";
        body.classList.remove('notvis');
    }, 4000);
}

const blink = document.getElementById('blink');
setInterval(() => {
    if(blink.classList.contains('blink')){
        blink.classList.remove('blink');
    }
    else{
        blink.classList.add('blink');
    }
}, 200);

function height(){
    const space = document.getElementById('space');
    space.style = 'height:auto !important';
}

const navbar = document.getElementById('nav-bar2');
function navshow(){
    if(navbar.classList.contains('drop')){
        navbar.classList.remove('drop');
    }
    else{
        navbar.classList.add('drop');
    }
}
function closex(){
    navbar.classList.remove('drop');
}