$(window).load(function(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 

});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

/* viewport width */
$(function(){

	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});

	/* placeholder*/
	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

	// input, select styler
	if($('input, select').length) {
		$('input, select').styler();
	}

	// Datepicker
	if($('.datepicker, .datepicker2').length) {
		$('.datepicker, .datepicker2').datepicker();
	}

	// Checkbox custom
	if($('input[type="checkbox"]').length) {
		$("input[type='checkbox']").change(function(){
			if($(this).is(":checked")){
				$(this).parents(".list-check__item").addClass("list-check__item_bg"); 
			}else{
				$(this).parents(".list-check__item").removeClass("list-check__item_bg");  
			}
		});
	}

	// Mob menu
	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			$(".box-nav").slideToggle();
		});
	}

	// slick bg
	var maxWidth = viewport().width, maxHeight = viewport().height;
	$('.box-slider__slide').css({'width':maxWidth, 'height':maxHeight})
	$('.box-slider').slick();
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+60});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);