$(function() {
 
 	//マウスを乗せたら発動
 	$('.header-nav-right i').hover(function() {

  	// var index = $('.header-nav-right i').index(this);

  	function Navhover(){
 		// $('nav-detail' + index).addClass("nav-detail-hovered");
 		$(this).balloon();
 	}
 	
 	setTimeout(Navhover,500);

	//ここにはマウスを離したときの動作を記述
	}, function() {

	// $('nav-detail' + index).removeClass("nav-detail-hovered");

	});

	$('.home-left-aside li').hover(function(){

		// $(this).find('.dots').css({'visibility' : 'visible'});
		$(this).find('.dots').not('.dots-add').css({'visibility' : 'visible'});

	}, function(){

		$(this).find('.dots').not('.dots-add').css({'visibility' : 'hidden'});

	});
});