const buttonJS = document.querySelector('.js');

function createDiv() {
    const divItem = document.createElement('div');
    divItem.classList.add("box");
    document.body.appendChild(divItem);
}


// oczekiwanie na zdarzenie

buttonJS.addEventListener('click', createDiv)






 //********************************************

// tworzenie elementów

// const divItem = document.createElement('div');
// stworzenie nowego diva

    //sposoby dodwania klas

// divItem.class = "box";
// dodawanie klasy - tak nie zadziała, bo .class jest zastrzeżony do innych celów w JS więc:



// divItem.className = "box";
// divItem.className = "";
// divItem.innerText = "tekst";
// dodanie klasy poprzez .className
// czyszczenie klasy
// dodanie tekstu w divie 

    //drugi sposob

// divItem.classList.add('box');

    //trzeci sposob

// divItem.setAttribute("class", "box");

// document.body.appendChild(divItem);
// appendChild - na końcu body wstaw wcześniej stworzony element

