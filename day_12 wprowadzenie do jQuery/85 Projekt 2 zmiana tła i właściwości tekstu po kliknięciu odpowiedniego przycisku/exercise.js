$('.interface').on('click', function() {
    console.log(this);
        // wypisuje kliknięty el
    console.log($(this));
        // wskazany el jest el jQ
    console.log($(this).attr('class'));
        // wypisuje klasę wskazanego el
    console.log(this.className);
        // wskazanie klasy dla this nie zmienionego na obiekt jQ

    if ($(this).hasClass('orange')) {
        console.log('prawda w pomarańczowy');
            // sprawdzenie za pomocą jQ czy wskazany element ma klasę orange
        // $('body').toggleClass('orange');
            // odwołanie do body i zmiana klasy na orange (tło zmienia się na orange)
        // $('body').css('background-color', 'orange');
            // odwołanie się przez .css - zmiana klsy na orange.

        // $('body').css({
        //     'background-color' : 'orange',
        // })
            // zmiana koloru poprzez zmianę właściwości css

        $('body').attr('class', 'orange');
            // zmiana koloru poprzez zmianę klasy - wygodniejsze rozwiązanie
    }  
        
    // if (this.classList.contains('green')) {
    //     console.log("prawda w zielony")
    // }    
        // sprawdzenie klasy za pomocą JS

    if ($(this).hasClass('green')) {
        console.log('prawda - w zielony');
        // $('body').css({
        //     'background-color' : 'green'
        // })
            // mniej wygodne rozwiązanie

        $('body').attr('class', 'green');
    }
    
    if($(this).hasClass('increase')) {
        console.log('prawda w plus');
        $('.text').animate({
            'font-size' : '+=10px',
        }), 500 
            // animacja! po przecinku - 2000 - ma trwać 500 ms
    }

    if($(this).hasClass('move')) {
        console.log('prawda w strzałkę');
        $('.text').animate({
            'left' : '+=20px',
            'letter-spacing' : '+=15px'
        }), 20 
    }
})

