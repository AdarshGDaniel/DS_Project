const openner = document.getElementById('opener');
function load(){
    openner.classList.add('bg-white');
    setTimeout(() => {
        openner.classList.remove('bg-white');
        openner.innerHTML = " ";
    }, 4000);
}