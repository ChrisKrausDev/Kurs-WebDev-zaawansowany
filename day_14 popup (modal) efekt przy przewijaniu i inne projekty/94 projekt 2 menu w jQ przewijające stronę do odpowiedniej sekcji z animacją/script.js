// $('.me').on('click', function () {
//     $('body, html').animate({
            // trzeba wpisać body i html, bo w zależności od przeglądarki kliknięcie będzie wynikiem animacji albo na body albo na html. Taki zapis w JQ jest obowiązkowy 
//         scrollTop: $('.s1').offset().top
//     }, 500)

        // kliknięcie w .me (o mnie) ma wywołać animację na body i html w celu przesunięcia ekranu w obszar danej sekcji za pomocą metody > animate < 

        // scrollTop - przesunięcie w dół o 1000 px, po przecinku za nawiasem czas trwania w ms

         // offet().top - określa nam pozycję danego elementu od jego górnej krawędzi, w tym wypadku section.s1 - bez wględu na wielkość okna przeglądarki, czy rodzaj urządzenia z którego strona jest wyświetlana, zawsze przewinie do dokładnie tego miejsca!
// })

// $('.portfolio').on('click', function(){
//     $('body, html').animate({
//         scrollTop: $('.s2').offset().top
//     }, 500)
// })

                                // pobieranie wszystkich przycisków - sposób szybszy i bardziej uniwersalny

// $('nav a').on('click', function(){
    
        // this wskazuje aktualnie kliknięty przez użytkownika przycisk - console.log(this);
        
    // const goToSection = '#' + $(this).attr('class');

        // by na elemencie JS >this< wykonać jakąkolwiek funkcję jQ musimy z niego strzyć element jQ wpisująć %(this) >> console.log($(this).attr('class')); <<

    // console.log(goToSection);    

        // następnie do zmiennej goToSection dodajemy # co daje nam w efekcie np. string: #me >> console.log(goToSection)


//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top
//     })
// })

                                        // ciekawostka

// klasa służy do określania wyglądu 
// id do wyszukiwania w JS i JQ
// data-section, data-div - jeśli chcemy w inny sposób zdefiniować obiekt, do innych celów

// poniżej wykonanie z wykorzystaniem atrybutów data-section

$('nav a').on('click', function(){    
    const goToSection = '[data-section=' + $(this).attr('class') + ']';
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})    