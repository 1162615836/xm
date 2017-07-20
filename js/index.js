window.onload = function(){
	var lb = new Swiper('.swiper-container', {
			loop: true,
			autoplay: 2000,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			effect: "fade",
			speed: 1000,
			autoplayDisableOnInteraction: false,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next'
		});
		var zy = new Swiper('.main2', {
			loop: true,
			autoplay: 5000,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next'
		});
		$(".show1 a").hover(function() {
			$(".show").stop().slideToggle('2000');
		})
		//		$(".main3 div div div").css("position","relative");
		$(".main3 div div div").hover(function() {
			$(this).css("box-shadow", "0px 10px 10px #ccc");
			$(this).css("margin-top", "9px");
		}, function() {
			$(this).css("box-shadow", "0px 0px #ccc");
			$(this).css("margin-top", "10px");
		})
		console.log($(".li_1"))
}
