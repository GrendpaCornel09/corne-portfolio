// aos library initialization
AOS.init();

// sidebar functionality
let sidebar = document.getElementById("sidebar")
let openbtn = document.getElementById("main")
let sideLink = document.querySelectorAll('.side-link')
const header = document.querySelector(".header")

function openNav(){
    sidebar.style.width = '25rem'

    // hiding the open button
    openbtn.style.animation = 'hide 0.3s ease-out'
    openbtn.style.opacity = 0

    for (let i = 0; i < sideLink.length; i++) {
        const element = sideLink[i];
        setTimeout(function () {
            element.style.opacity = 1
            element.style.animation = 'reveal 0.3s ease-out'
        }, 500)
    }

    console.log('sidebar opened')
}

function closeNav(){
    sidebar.style.width = '0'
    openbtn.style.marginLeft = '0'

    // re-revealing the open button
    setTimeout(function(){
        openbtn.style.opacity = 1
        openbtn.style.animation = 'reveal 0.3s ease-out'
    }, 500)

    for (let i = 0; i < sideLink.length; i++) {
        const element = sideLink[i];
        element.style.opacity = 0
        element.style.animation = 'hide 0.1s ease-out'
    }

    console.log('sidebar closed')
}

// Peek effect
openbtn.addEventListener('mouseenter', function () {
    sidebar.style.width = '3rem';
});

openbtn.addEventListener('mouseleave', function () {
    if(sidebar.style.width == '3rem'){
        sidebar.style.width = '0';
    }
    else{
        sidebar.style.width = '25rem';
    }
});

// image slider function
let slides = document.querySelectorAll('.slide');
let nextButton = document.querySelectorAll('.next-btn')[0];
let prevButton = document.querySelectorAll('.prev-btn')[0];
let currentSlide = 0;


// show current slide
function showSlide(index){
    // hide all slides
    slides.forEach(function(slide){
        slide.classList.remove('active');
    })

    slides[index].classList.add('active');
}

// navigate to previous slide
function prevImage(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
    console.log('previous slide')
}

function nextImage(){
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 1;
    }
    showSlide(currentSlide);
    console.log('next slide')
}

// button event listeners
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// show initial slide
showSlide(currentSlide);

// header transparency change

window.addEventListener('scroll', () => {
    if(window.scrollY > 150){
        header.style.backgroundColor = '#19543E'
    }

    else{
        header.style.backgroundColor = 'transparent'
    }
})