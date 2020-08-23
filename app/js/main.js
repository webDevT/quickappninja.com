$(function(){

//----start menu-------
$('.btn__menu').click(function(){
	$(this).toggleClass('active');
	$('.header').toggleClass('active');
})
$('.header li').click(function(){
	$('.header').removeClass('active');
	$('.btn__menu').removeClass('active');

})
//----end menu----------

// ------start sticky header------
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});
//-------end sticky header--------

//-------start img rotate-------
// setInterval(function() {
// 	$('.main-screen__img-wrapper').toggleClass('active');
// }, 5000);
// start slider
$('.slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 1,
dots: true
});
// end slider
//------end img rotate------

//------start popup------
$('.main-screen__video-link').click(function(){
	$('.video-popup').addClass('active');
})
$('.video-popup__close').click(function(){
	$('.video-popup').removeClass('active');
})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".video-popup-wrapper"); 
    var div2 = $(".video-popup");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');
    }
  });
});
//------end popup-------
});