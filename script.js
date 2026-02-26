function toggleLight() {
    const container = document.body;
    const cordString = document.querySelector('.string');

    // Pulling animation
    cordString.style.height = "70px";
    
    setTimeout(() => {
        cordString.style.height = "50px";
        container.classList.toggle('active-light');
    }, 150);
}
