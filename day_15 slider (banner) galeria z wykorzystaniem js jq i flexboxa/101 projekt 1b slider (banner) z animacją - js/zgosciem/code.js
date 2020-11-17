// parametry
let activeElement = 0;
const timeChange = 4000;

// pobieramy 4 elementy, na których pracujemy
const colorImgHtml = document.querySelector(".color");
const grayImgHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");

//info w tablicach o el podmienianych
const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["Anna Baugart", "Marek Feliksiak", "Arek Pawłowicz"];
const profesions = ["Programistka JS", "UX i UI Designer", "Front-End Developer"];

function changeElement() {
    activeElement++;
    // if(activeElement == 3) {
    //     activeElement = 0;
    // }
            // ten zapis jest ok, jednak program musi być uniwersalny, w przypadku gdy pojawi się kolejna zmienna do podmienienia na stronie 3 może być za mało, dlatego zamiast wpisywania na sztywno stosuje się kolejną zmienną:

    if(activeElement == colorImages.length) {
        activeElement = 0;
    }
            // length - długość tablicy czyli ilość elementów jakie zawiera


    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = profesions[activeElement];
}

setInterval(changeElement, timeChange)
    // ustawia zmianę w funkcji changeElement co 4 sekundy
    // "wykonywaj się w nieskończoność co 4 sekundy"