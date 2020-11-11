// window.addEventListener('scroll', function () {
//  console.log("skrolujesz!")
// })

// konkatenacja - łączenie stringów 
// document.addEventListener('scroll', function () {
//  console.log("skrolujesz o " + window.scrollY + "px") // windows.scrollY zostanie zamieniona na "100" przykładowo zmianna na tym string.
// })

// użycie zadeklarowanej funkcji. Nazwa funkcji zawiera to czego ta funkcja dotyczy

// function showScrollSize() {
//  console.log("skrolujesz o " + window.scrollY + "px")
// }

// window.addEventListener('scroll', showScrollSize);



const spanResult = document.querySelector('span');

window.addEventListener('scroll', function () {
    console.log('skrolujesz!')
    spanResult.textContent = window.scrollY;
})