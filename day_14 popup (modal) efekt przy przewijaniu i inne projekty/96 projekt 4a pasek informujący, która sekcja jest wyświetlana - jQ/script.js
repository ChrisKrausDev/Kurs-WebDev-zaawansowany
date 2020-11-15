function changeText() {
    // console.log('działa')
    const wielkoscSkrola = $(document).scrollTop();
        // w tej zmiennej przechowujemy pozycję scrolla na stronie 
        // console.log(wielkoscSkrola);
    const wysokoscSekcji1 = $('.sekcja1').height();
        // teraz js pobiera wysokość elementu z klasa sekcja1 i przerobi to na px - responsywność
        // console.log(wysokoscSekcji1)
    const wysokoscSekcji2 = $('.sekcja2').height();
    const wysokoscSekcji3 = $('.sekcja3').height();
    const wysokoscSekcji4 = $('.sekcja4').height();

    const odlegloscOdPoczatkuSekcji1 = $('.sekcja1').offset().top;
    const odlegloscOdPoczatkuSekcji2 = $('.sekcja2').offset().top;
    const odlegloscOdPoczatkuSekcji3 = $('.sekcja3').offset().top;
    const odlegloscOdPoczatkuSekcji4 = $('.sekcja4').offset().top;

    if(wielkoscSkrola < wysokoscSekcji1) {
        $('div.info').text('sekcja 1')
    }
    else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
        $('div.info').text('sekcja 2')
    }
    else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
        $('div.info').text('sekcja 3')
    }
    else {
        $('div.info').text('sekcja 4')
    }
}

$(document).on('scroll', changeText)


// .scrollTop(); - pozcja scrolla względem danego elementu np document
// .offset().top - pozycja danego elementu od jego górnej krawędzi
// .text() - dopisuje dowolny tekst do dowolnego el
// .height() - wysokość elementu
// .innerHeight() - obejmuje height i padding, bez bordera i marginesu
// .outerHeight() - obejmuje height padding i border
// .outerHeight(true) - obejmuje height padding border i margines