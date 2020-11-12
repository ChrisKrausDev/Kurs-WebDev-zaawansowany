// 1 pobieramy wszsytkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// 1b określenie potrzebnych danych

let textSize = 20; // początkowa wielkość font-size dla p

// 1c parametry początkowe dla naszego projektu

text.style.fontSize = textSize + 'px';
text.style.backgroundColor = '#ddd';

// 2 określenie akcji, napisanie funkcjiz

function textIncrease(){
    // console.log('click!')
    textSize++;
    text.style.fontSize = textSize + 'px';
};

function textDecrease(){
    console.log('click!');
    textSize--;
    text.style.fontSize = textSize + 'px';

};


// 3 ustawienie nasłuchiwania na przyciskach na kliknięcia 

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);