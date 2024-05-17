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
    let scroll_height = $(window).scrollTop()
    let ratio = scroll_height / device_height
    let value = (ratio * 180).toString() + '%';
    if (scroll_height != '0') {
        $('.header-bg').css('opacity', value);
    }
    else {
        $('.header-bg').css('opacity', '0');
    }
});