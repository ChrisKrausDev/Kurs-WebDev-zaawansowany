$(document).on('scroll', function(){
    const windowHeight = $(window).height();
        // zadeklarowanie zmiennej zawierającej wysokość całego okna przeglądarki, do wykorzysania przy instrukcji if
    const scrollValue = $(this).scrollTop();
        // console.log(scrollValue)

// pierwsza sekcja

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
        // pobieramy gdzie jest ten el względem początku układu
    const art2Height = $art2.outerHeight();
        // console.log(art2Height)
        // wysokosc drugiego elementu

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight();

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top
    const art4Height = $art4.outerHeight();

    if(scrollValue > art2FromTop + art2Height - windowHeight) 
        // należy odjąć wysokość całego okna przeglądarki bo ta wartość nie jest scrolowana!
    {
        console.log('tu art2, właśnie wyświetliłem się w całości')
        $art2.addClass('active');
    }

    if(scrollValue > art3FromTop + art3Height - windowHeight) 
{
    console.log('tu art3, właśnie wyświetliłem się w całości')
    $art3.addClass('active');
}

if(scrollValue > art4FromTop + art4Height - windowHeight) 
{
    console.log('tu art4, właśnie wyświetliłem się w całości')
    $art4.addClass('active');
}

// druga sekcja

const $op1 = $('.op1')
const $op2 = $('.op2')

const op1FromTop = $op1.offset().top;
const op2FromTop = $op2.offset().top;

const op1Height = $op1.outerHeight();
const op2Height = $op2.outerHeight();

if(scrollValue > op1FromTop + op1Height / 2 - windowHeight - 300) {
    $op1.addClass('active')
}

if(scrollValue > op2FromTop + op2Height / 2 - windowHeight - 300) {
    $op2.addClass('active')
}

    // czyściciel
    if(scrollValue < 100) {
        $('article').removeClass('active');
            // jeśli sV jest mniejszy niż 100px to usuń klasę active
    }
})