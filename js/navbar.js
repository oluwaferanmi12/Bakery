function theSlider(){
    const toggler = document.querySelector('.theTogglerButton');
    const link = document.querySelector('.container-link');

    toggler.addEventListener('click' , ()=>{
        link.classList.toggle('nav-active');
    })
}

theSlider();