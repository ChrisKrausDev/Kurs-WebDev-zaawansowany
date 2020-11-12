// parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).

let squarePosition = 0;
let squareRotation = 45;

// pobieramy elementy - pobierz przycisk i div

const btn = document.querySelector('button');
const div = document.querySelector('div');
div.classList.add('animation');

// podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 

btn.addEventListener('click', function(){
    
    squarePosition += squareRotation;
    div.style.transform = 'rotate(' + squarePosition + 'deg)';

})


//Bonus dodaj właściwość transition dla div określoną na .5s.