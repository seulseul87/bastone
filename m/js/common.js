	$(function() {


		/* 메뉴 - 열기닫기 시작 */
		$('#header .abs .bar').click(function(){
			$('#header .abs .bar').toggleClass('on');
	    	$('#header .abs .allMenu').toggleClass('on');
	    	$('body').toggleClass('active');
		});
		/* 메뉴 - 열기닫기 끝 */

		/* 메인 비주얼 - 시작 */
		var owl = $('.main_00 .owl-carousel');
		  owl.owlCarousel({
		      loop:false,
		      margin:0,
		      navSpeed:500,
		      nav:false,
		      items:1
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
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
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
				loop:true,
			    margin:10,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:4,
			            nav:true
			        },
			        600:{
			            items:4,
			            nav:false
			        },
			        1000:{
			            items:4,
			            nav:true,
			            loop:false
			        }
			    }
		})
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

	});