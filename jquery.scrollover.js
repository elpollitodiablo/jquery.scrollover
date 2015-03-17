(function( $ ) {
	$.fn.scrollover = function( callback ) {
		
		var scrollPosition,
			elementPosition,
			targetElement = $(this),
		
		init = function(){
		
			$(window).on("scroll", checkElementVisibility);
			
			elementPosition =  $(targetElement).offset();
			
		},
		
		updateScrollPosition = function(){
			
			scrollPosition = $(window).scrollTop();
			
		},
		
		checkElementVisibility = function(){
			
			updateScrollPosition();
			
			if(scrollPosition >= elementPosition.top){
				$(window).off("scroll");
				callback();
			}
		};
		
		init();
		
		return targetElement;
		
	};
}( jQuery ));
