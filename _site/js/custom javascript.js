$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.car-pics').offset().top - ($(window).height()/1.2)){

        $('.car-pics figure').each(function (i) {

            setTimeout(function () {

                $('.car-pics figure').eq(i).addClass('is-showing');
                
            }, 150* ( i+1));

        });
    }

if(wScroll > $('.large-window').offset().top -$(window).height()){

        console.log('okay');

        $('.large-window').css({'background-position':'center'+ (wScroll - $('.large-window').offset().top) + 'px'});

        var opacity = (wScroll - $('.large-window').offset().top + 400 ) / (wScroll/5);

        $('.window-tint').css({'opacity':opacity});

}
if(wScroll > $('.blog-posts').offset().top -$(window).height()){

    var  offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

    $('.car-1').css({'transform':'translate('+ offset+ 'px,  '+ Math.abs(offset * 0.2)+ 'px)'});
    $('.car-3').css({'transform':'translate('+ Math.abs(offset)+ 'px,  '+ Math.abs(offset * 0.2)+ 'px)'});





}


});