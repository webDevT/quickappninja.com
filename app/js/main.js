$(function(){
$('.btn__menu').click(function(){
	$(this).toggleClass('active');
	$('.header').toggleClass('active');
})
$('.header li').click(function(){
	$('.header').removeClass('active');
	$('.btn__menu').removeClass('active');

})
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});
$('.slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 1,
dots: true
});
});
setTimeout(function(){
  $('.cookies-popup').addClass('active');
}, 5000);

$('.cookies-popup .button').click(function(){
  $('.cookies-popup').hide();
})
$.lazyLoadXT.onload.addClass = "animated fadeIn";
