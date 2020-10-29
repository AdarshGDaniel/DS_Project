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

