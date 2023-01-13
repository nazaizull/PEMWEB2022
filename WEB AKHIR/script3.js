function loader(){
    document.querySelector('.loader-container') .classList.add('fade-Out');
}function fadeOut(){
    setInterval(loader,2000);
}
window.onload= fadeOut;

