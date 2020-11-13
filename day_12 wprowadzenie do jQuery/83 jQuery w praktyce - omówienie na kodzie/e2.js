
// const paragraphText = $('p').text();
    // pobranie wszystkich p, pobranie z nich tekstu i umieszczenie z zmiennej 'paragraphText'

// console.log(paragraphText);
    // wyświetlenie w konsoli zawartości zmiennej 'paragraphText'


// $('p:nth-of-type(1)').text("nowy tekst");
    // wybranie pierwszego p i zmiana jego tekstu!


$('html').html();
    // pobranie calej strony, za pomocą console.log można to wyświetlić w konsoli bądź też wpisując tą samą komendę w consoli


// $('section').html();
    // pokazuje wszystkie elementy w <section>

// $('p:nth-of-type(1)').html();
// $('p:nth-of-type(1)').text();


/* Tworzenie elementu */

const $titleH1 = $('<h1 class="red">Tytuł artykułu</h1>');
    // tworzymy element z klasą red i zawartością (prawa strona równania) i przypisujemy go do zmiennej '$titleH1'

    // dodajemy do zmiennej znaczek dolara z przodu, żeby wiedziec, że mamy do czynienia z obiektem jQ

    // przy wyszukiwanie piszemy element w ciapkach '', przy tworzeniu elementu piszemy znacznik!, możemy dodać klasę! Wygoda!

// $('div').before($titleH1);
    // pobierz każdego diva, i dodaj przed każdym pobranym divem tą h1, którą stworzyliśmy i zapisaliśmy w zmiennej

// $('div').after($titleH1);
    // to samo tylko po każdym divie!

// $('div').prepend($titleH1);
    // .prepend - dodaj wewnątrz każdego elementu! 

// $('div').append($titleH1);
    // .append - dodaj wewnątrz diva, na końcu!

$('body').prepend($titleH1);
    // dodaj wewnątrz body na początku

$titleH1.prependTo('div');
    // odwrócona kolejność, stworzony obiekt dodaj do wszystkic divów na początku

// $titleH1.appendTo('div');
    // odwrócona koleność, stworzony obiekt dodaj do wszystkich divów na końcu

// Nie zadziała JavaScript
document.body.appendChild($titleH1);

    // bo nie jest to węzeł, nie jest to element html, jest to obiekt jQ stworzony w DOM


