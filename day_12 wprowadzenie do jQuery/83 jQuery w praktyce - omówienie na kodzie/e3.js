// $('div.item1').attr("class");
    // pobieramy element i opakowujemy go w jQ za pomocą >> $('div.item1') << dzięki temu może skorzystać z metod jQ 

    // .aatr pobiera zapis klasy tego elementu i zapisuje go w postaci stringa

// const divClass = $('div.item1').attr("class");
// console.log(divClass);
    // przypisanie powyżej uzyskanych danych w postaci string do zmiennej divClass. Jest to zwykły string więc nie potrzebny jest znak $

    // wyświetlenie zmiennej w konsoli

$('div.item1').attr("class", "red blue");
    // dla elementu div z klasą item1 ustaw (za pom .attr) klasę "red blue" - zmiana klasy dla elementu div

console.log($('div.red.blue').attr("class"));
console.log($('div.red').attr("class"));
    // po powyższym odwołując się do tego diva należy uzyć nowej klasy! bo ten obiekt został zmieniony w DOM! 



console.log($('[data-idUser]').attr("id"));
    // wyświetlenie w konsoli wszystkich elementów, które mają atrybut 'data-idUser'
    // <div data-idUser="1930"></div>

$('[data-idUser]').attr("id", "");
    // teraz skasowaliśmy id tego elementu

console.log($('[data-idUser]').attr("id"));

console.log($('.vip_user').removeAttr("id"));
    // usunięcie id, usunięcie klasy