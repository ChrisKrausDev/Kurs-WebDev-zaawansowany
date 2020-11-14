                        // wykonanie w jQ

// $('.article button').on('click', function(){
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })

//     // kliknięcie w button

// $('.hide').on('click', function(){
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })

//     // zamknięcie pop-up'a kliknięciem w krzyżyk

                        // łatwiejszy zapis w jQ - wersja skrócona

// $('.article button, span.hide').on('click', function(){
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

                        // wykonanie w JS

const btn = document.querySelector('.article button');
const exit = document.querySelector('.hide');
const modal = document.querySelector('.modal-wrap');
const article = document.querySelector('.article');

btn.addEventListener('click', function(){
    modal.classList.add('active');
    article.classList.add('blur');
})

exit.addEventListener('click', function(){
    modal.classList.remove('active');
    article.classList.remove('blur');
})
