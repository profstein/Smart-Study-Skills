var $ = jQuery.noConflict();


function hamburger(){
	$(".hamburger").on('click', function(e){
		e.preventDefault();
		if(window.innerWidth<1347){
			$('nav .mobile-menu').stop(1,0).slideToggle(250,
				function(){
					if($(this).css('display') == 'none'){
						$(this).css('display', '');
					}
				});
		}
	});
}

function mobileMenuPos(){

	var h = $('header.site-header').outerHeight();

	$('nav .mobile-menu').css('top', h + 'px');

	if(window.innerWidth>1346){
		$('nav .mobile-menu').css('display','none');
	}
}

jQuery(document).ready(
	function()
	{
		//Project.init();

		//addGray();

		hamburger();

		//homeHover();

		//selecto();

		mobileMenuPos();

		//required();

		$(window).resize(function(){
			mobileMenuPos();

		})
	}
	);
