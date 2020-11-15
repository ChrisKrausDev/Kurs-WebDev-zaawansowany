$(document).on('scroll', function(){
    // console.log($(this).scrollTop());
        // this, document czy window - nie ma znaczenia
    if($(window).scrollTop() > 200) {
        // jeśli scrollTop jest większy niż 200 to
        $('div.info').addClass('active');
        $('div.info').text($(window).scrollTop() + ' px')
    } else {
        $('div.info').removeClass('active');
    }
})

