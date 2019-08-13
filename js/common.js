(function (global, $) {

	$(function(){

		/* 메인 비주얼 - 시작 */
		var owl = $('.main_00 .owl-carousel');
		  owl.owlCarousel({
		      loop:false,
		      margin:0,
		      navSpeed:2000,
		      smartSpeed: 2000,
		      autoplaySpeed: 2000,
		      autoplayDelay: 3000,
		      nav:false,
		      items:1,
		      autoplay: true,
		  });
		  function setAnimation ( _elem, _InOut ) {
		    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		    _elem.each ( function () {
		      var $elem = $(this);
		      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

		      $elem.addClass($animationType).one(animationEndEvent, function () {
		        $elem.removeClass($animationType); 
		      });
		    });
		  }
		  owl.on('change.owl.carousel', function(event) {
		      var $currentItem = $('.owl-item', owl).eq(event.item.index);
		      var $elemsToanim = $currentItem.find("[data-animation-out]");
		      setAnimation ($elemsToanim, 'out');
		  });
		  owl.on('changed.owl.carousel', function(event) {

		      var $currentItem = $('.owl-item', owl).eq(event.item.index);
		      var $elemsToanim = $currentItem.find("[data-animation-in]");
		      setAnimation ($elemsToanim, 'in');
		})
		/* 메인 비주얼 - 끝 */

	    /* 서브 부드러운 이동 - 시작 */
	     $("#header .submenu li a").click(function(event){            
	        event.preventDefault();
	        $('html,body').animate({scrollTop:$(this.hash).offset().top+15}, 500);
	     });
	    /* 서브 부드러운 이동 - 끝 */

	    /* 서브 스크롤 메뉴 활성화 - 시작 */
	    $('#header .submenu li a').on('click', function(event) {
		    $(this).parent().find('a').removeClass('active');
		    $(this).addClass('active');
		});
		$(window).on('scroll', function() {
		    $('.box').each(function() {
		        if($(window).scrollTop() >= $(this).offset().top) {
		            var id = $(this).attr('id');
		            $('#header .submenu li a').removeClass('active');
		            $('#header .submenu li a[href=#'+ id +']').addClass('active');
		        }
		    });
		});
	    /* 서브 스크롤 메뉴 활성화 - 끝 */

		/* 탭 - 시작 */
		var indexTerm = $('.tab li').index($(this));
		$('.tab li').eq(0).addClass('active');
		if(indexTerm == '-1') $('.tabData').eq(0).addClass('active');

		$('.tab li').click(function(){			
			var index = $('.tab li').index($(this));

			$('.tab li').removeClass('active');
			$(this).addClass('active');
						
			$('.tabData').removeClass('active');
			$('.tabData').eq(index).addClass('active');
		});
		/* 탭 - 끝 */

		/* STORE 리스트 - 시작 */
		$('.store .owl-carousel').owlCarousel({
			nav:true,
		    margin:50,
		    loop:true,
		    autoWidth:true,
		    items:4
		});
		/* STORE 리스트 - 끝 */

		/* STORE 제품 이미지 - 시작 */
		var galleryList = $('.small li').index($(this));
		$('.small li').eq(0).addClass('active');
		if(galleryList == '-1') $('.big li').eq(0).addClass('active');

		$('.small li').click(function(){			
			var gallery = $('.small li').index($(this));

			$('.small li').removeClass('active');
			$(this).addClass('active');
						
			$('.big li').removeClass('active');
			$('.big li').eq(gallery).addClass('active');
		});
		/* STORE 제품 이미지 - 끝 */

		/* FAQ 리스트 - 시작 */
		$('.faq .list li .answer').hide();
		$('.faq .list li a').click(function(){
			$('.faq .list li a.active').removeClass('active');
	 	    $(this).addClass('active');
			if($(this).next('.answer:visible').length) {
				$(this).next('.answer:visible').slideUp();
			} else {
				$('.faq .list li .answer:visible').slideUp();
				$(this).next('.answer').slideToggle('normal');
			}
		return false;
		});
		/* FAQ 리스트 - 끝 */

		/* 레이어팝업 - 시작 */
		//----- OPEN
	    $('[data-popup-open]').on('click', function(e)  {
	        var targeted_popup_class = jQuery(this).attr('data-popup-open');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

	        e.preventDefault();
	    });

	    //----- CLOSE
	    $('[data-popup-close]').on('click', function(e)  {
	        var targeted_popup_class = jQuery(this).attr('data-popup-close');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

	        e.preventDefault();
	    });
		/* 레이어팝업 - 끝 */

		/* 메인 등모션
	    $('#parallax_one .left').css('opacity', 0);
	    $('#parallax_one .right').css('opacity', 0);
	    $('#parallax_one').waypoint(function() {
	        $('#parallax_one .left').addClass('fadeInLeft');
	        $('#parallax_one .right').addClass('fadeInRight');
	    }, { offset: '50%' }); */


	    var win_h = $(window).height();
	    $('.box').each(function(index){
	    	$(this).attr("data-index",win_h * index);
	    });

	    $('.box').on("mousewheel", function(e){
	    	var sectionPos = parseInt($(this).attr("data-index"));
	    	if(e.originalEvent.whellDelta >=0){
	    		$("html, body").stop().animate({scrollTop:sectionPos - win_h});
	    		return false;
	    	} else if (e.originalEvent.whellDelta < 0) {
	    		$("html,body").stop().animated({scrollTop:sectionPos + win_h});
	    		return false;
	    	}
	    });


		/* 탑버튼 - 시작 */
	    $("#topBtn").hide();
	    $(function () {
	                 
	        $(window).scroll(function () {
	            if ($(this).scrollTop() > 100) {
	                $('#topBtn').fadeIn();
	            } else {
	                $('#topBtn').fadeOut();
	            }
	        });
	                
	        $('#topBtn a').click(function () {
	            $('body,html').animate({
	                scrollTop: 0
	            }, 800); 
	            return false;
	        });
	    });


	});

}(window, window.jQuery));