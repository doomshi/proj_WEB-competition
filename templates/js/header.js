$(document).ready(function(){
    let clicked = false;
    $('button').click(function(){
        if (clicked == false){
            $('#buttons').css('display', 'flex')
            $('.header-bg').css('display', 'block')
            clicked = true
        }
        else {
            $('#buttons').css('display', 'none')
            $('.header-bg').css('display', 'none')
            clicked = false
        }
    });
});
$(window).scroll(function(){
    let device_height = $(window).height();
    let scroll_height = $(window).scrollTop();
    let ratio = scroll_height / device_height;
    let value = 3.8 * (1 - ratio / 2);
    let result = value.toString() + '%';

    if (value > 2.8){
        $('header').css('padding-top', result);
        $('header').css('padding-bottom', result);
    }
    else {
        $('header').css('padding-top', '2.8%');
        $('header').css('padding-bottom', '2.8%');
    }
});