$(function() {
	
    // homepage burger menu

	$('#burger').click(function(){
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('open');
        $('body').toggleClass('lock')
    })
	

    // $('.header__search').focus(function(){
    //     $('.header__login').toggleClass('hide');
    //     return false;
    // })
	
});