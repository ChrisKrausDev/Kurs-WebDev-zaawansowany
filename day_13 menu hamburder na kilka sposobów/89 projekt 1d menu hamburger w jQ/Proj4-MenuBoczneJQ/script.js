

    // przy pomocy jQ 

// $('.burger').on('click', function () {
//     $('.fas, aside, .wrapper').toggleClass('show');
// })

    // JS  

// const burger = document.querySelector(".burger");

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrapper = document.querySelector('.wrapper');

// burger.addEventListener("click", function () {
//     iconBurger.classList.toggle("show"); //tak
//     iconX.classList.toggle("show"); //nie
//     column.classList.toggle("show"); //nie
//     wrapper.classList.toggle('show');

// })

    // sensowniejsze użycie JS:

const burger = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.active');
    // pobranie wszystkic el z klasą 'active';

burger.addEventListener('click', function(){
for(let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle('show')
        // pentla for dla każdego el z klasą 'active' nadaj klasę 'show'goi
}
})