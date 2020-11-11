// 1 etap
const btn = document.querySelector('button');


// const btn = document.querySelector('button').addEventListener()
// można też w jednej linii! po kropce

const paragraph = document.querySelector('p');

// Element.addEventListener('jakie wydarzenie', 'co ma się stać - funkcja')

// btn.addEventListener('click', function () {
//  console.log("klik!");
//  console.log('działa');
//  paragraph.style.backgroundColor = "red";
// })
//  w js nie piszemy nazwy właściwości CSS z myślnikiem tylko zapisem wielbłądzim


// btn.addEventListener('mouseover', function () {
//  console.log("najechanie");
// })

// document.addEventListener('mousemove', function () {
//  console.log("ruch myszką");
// })

// btn.addEventListener('click', function () {
//  alert("kliknąłeś!");
// //  wyświetla alert! 
// })


let clicksNumber = 0;

btn.addEventListener('click', function () {
//  clicksNumber = clicksNumber + 1;

clicksNumber++; //inkrementacja

// clicksNumber += 1;

 // clicksNumber = clicksNumber + 2;
 // clicksNumber += 2;
 console.log("klik numer: ", clicksNumber)
})

