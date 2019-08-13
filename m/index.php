<?php include('./include/header.php'); ?>
<script type="text/javascript">


	$(function(){


		var _containerOffsetTop1 = $('.scroll_01').offset().top - 200;
		var _screenSizeW = $(window).width();
		$(window).on('scroll', function(){
			var _windowScrollTop = $(window).scrollTop();
			if(_containerOffsetTop1 < _windowScrollTop){
				$('.scroll_01 .point').addClass('animation');
			}
		});

		var _containerOffsetTop2 = $('.scroll_02').offset().top - 200;
		var _screenSizeW = $(window).width();
		$(window).on('scroll', function(){
			var _windowScrollTop = $(window).scrollTop();
			if(_containerOffsetTop2 < _windowScrollTop){
				$('.scroll_02 .point').addClass('animation');
			}
		});

		var _containerOffsetTop3 = $('.scroll_03').offset().top - 200;
		var _screenSizeW = $(window).width();
		$(window).on('scroll', function(){
			var _windowScrollTop = $(window).scrollTop();
			if(_containerOffsetTop3 < _windowScrollTop){
				$('.scroll_03 .point').addClass('animation');
			}
		});

		var _containerOffsetTop4 = $('.scroll_04').offset().top - 200;
		var _screenSizeW = $(window).width();
		$(window).on('scroll', function(){
			var _windowScrollTop = $(window).scrollTop();
			if(_containerOffsetTop4 < _windowScrollTop){
				$('.scroll_04 .point').addClass('animation');
			}
		});

		var _containerOffsetTop5 = $('.scroll_05').offset().top - 200;
		var _screenSizeW = $(window).width();
		$(window).on('scroll', function(){
			var _windowScrollTop = $(window).scrollTop();
			if(_containerOffsetTop5 < _windowScrollTop){
				$('.scroll_05 .point').addClass('animation');
			}
		});

	});
		
</script>
		<div class="main">
			<!-- 페이지 시작 -->
			<div class="main_00">
				<div class="owl-carousel">
					<div class="item one">
						<div class="row">
							<div class="col-6">
								<div class="text">
									<div class="top" data-animation-in="slideInDown" data-animation-out="animate-out fadeOut">
										<div class="logo">
											<img src="img/main/visual-1-logo.png"/>
										</div>
										<div class="sub-title">
											 최신형 히팅 스틱 바스토네
										</div>
										<div class="info">
											 담뱃잎으로 만든 스틱을 전자장치에 꽂아 쓰는<br/>
											새로운 개념의 궐련형 전자담배 바스토네입니다.
										</div>
									</div>
									<div class="link" data-animation-in="slideInUp" data-animation-out="animate-out fadeOut">
										<ul>
											<li class="view">
											<a href="/m/products/"><span class="icon"></span> VIEW</a>
											</li>
											<li class="buy">
											<a href="http://storefarm.naver.com/storeon/category/8191074d27474cd289037fba0ca38eab?cp=1" target="_blank"><span class="icon"></span> BUY</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="product" data-animation-in="slideInUp" data-animation-out="animate-out slideOutDown">
									<img src="/m/img/main/visual-1.png" />
								</div>
							</div>
						</div>
					</div>
					<div class="item two">
						<div class="row">
							<div class="col-6">
								<div class="text">
									<div class="top" data-animation-in="slideInDown" data-animation-out="animate-out fadeOut">
										<div class="title">
											 비교할 수 없는 가벼움<br/>한 손에 잡히는 사이즈
										</div>
										<div class="info">
											무거운 별도의 배터리가 필요없는 일체형으로<br />
											휴대하기 간편하고 가벼운 바스토네를 사용해보세요.
										</div>
									</div>
									<div class="link" data-animation-in="slideInUp" data-animation-out="animate-out fadeOut">
										<ul>
											<li class="view">
											<a href="/m/products/"><span class="icon"></span> VIEW</a>
											</li>
											<li class="buy">
											<a href="http://storefarm.naver.com/storeon/category/8191074d27474cd289037fba0ca38eab?cp=1" target="_blank"><span class="icon"></span> BUY</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="product" data-animation-in="slideInUp" data-animation-out="animate-out slideOutDown">
									<img src="/m/img/main/visual-2.png" />
								</div>
							</div>
						</div>
					</div>
					<div class="item three">
						<div class="row">
							<div class="col-6">
								<div class="text">
									<div class="top" data-animation-in="slideInDown" data-animation-out="animate-out fadeOut">
										<div class="title">
											 어디에도 잘 어울리는<br/>심플한 디자인
										</div>
										<div class="info">
											 심플한 디자인과 대중적인 컬러로 취향에 맞게 <br/>골라쓰는 바스토네를 만나보세요.
										</div>
									</div>
									<div class="link" data-animation-in="slideInUp" data-animation-out="animate-out fadeOut">
										<ul>
											<li class="view">
											<a href="/m/products/"><span class="icon"></span> VIEW</a>
											</li>
											<li class="buy">
											<a href="http://storefarm.naver.com/storeon/category/8191074d27474cd289037fba0ca38eab?cp=1" target="_blank"><span class="icon"></span> BUY</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="product" data-animation-in="slideInRight" data-animation-out="animate-out fadeOut">
									<img src="/m/img/main/visual-3.png" />
								</div>
							</div>
						</div>
					</div>
					<div class="item four">
						<div class="row">
							<div class="col-6">
								<div class="text">
									<div class="top" data-animation-in="slideInDown" data-animation-out="animate-out fadeOut">
										<div class="title">
											 언제 어디서든<br/>냄새 걱정없는 편안함
										</div>
										<div class="info">
											 잦은 흡연으로 옷에 배어 버린 냄새 걱정없이<br/>불쾌한 담배 냄새로부터 자유롭게 바스토네 하세요!
										</div>
									</div>
									<div class="link" data-animation-in="slideInUp" data-animation-out="animate-out fadeOut">
										<ul>
											<li class="view">
											<a href="/m/products/"><span class="icon"></span> VIEW</a>
											</li>
											<li class="buy">
											<a href="http://storefarm.naver.com/storeon/category/8191074d27474cd289037fba0ca38eab?cp=1" target="_blank"><span class="icon"></span> BUY</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="product" data-animation-in="slideInUp" data-animation-out="animate-out fadeOut">
									<img src="/m/img/main/visual-4.png" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main_01">
				<div class="container">
					<div class="left">
						<div class="title">
							 Bastone Device
						</div>
						<div class="link">
							<a href="http://storefarm.naver.com/storeon/category/8191074d27474cd289037fba0ca38eab?cp=1" target="_blank"><span class="text">제품 구매하기</span><span class="icon">+</span></a>
						</div>
						<div class="image">
							<img src="/img/main/main_01_left.png"/>
						</div>
					</div>
					<div class="right">
						<div class="title">
							 Accessories
						</div>
						<div class="link">
							<a href="http://storefarm.naver.com/storeon/category/13730552dda7446081a2c8c0b7c0fdbe?cp=1" target="_blank"><span class="text">제품 구매하기</span><span class="icon">+</span></a>
						</div>
						<div class="image">
							<img src="/img/main/main_01_right.png"/>
						</div>
					</div>
				</div>
			</div>
			<div class="main_scroll">
				<div class="scroll_01" id="motion">
					<div class="point">
						<div class="text">
							<div class="title">
								It’s Slim, It’s Simple
							</div>
							<div class="info">
								얇고 가벼워서 항상 휴대하기 좋은 바스토네를 만나보세요.
							</div>
						</div>
					</div>
				</div>
				<div class="scroll_02" id="motion">
					<div class="point">
						<div class="text">
							<div class="title">
								냄새 걱정 없는 상쾌함
							</div>
							<div class="info">
								태우지 않고 히터 블레이드로 찌는 히팅 방식으로<br />
								불쾌한 냄새가 없는 깔끔한 맛과 상쾌함을 느껴보세요.
							</div>
						</div>
						<div class="image">
							<img src="/m/img/main/scroll_1.png "/ >
						</div>
					</div>
				</div>
				<div class="scroll_03" id="motion">
					<div class="point">
						<div class="text">
							<div class="title">
								빠른 히팅 준비
							</div>
							<div class="info">
								답답하고 지루한 기다림은 이제 그만!<br />
								기다림 없이 연속 사용하는 바스토네를 만나보세요.
							</div>
						</div>
						<div class="image">
							<img src="/m/img/main/scroll_2.png "/ >
						</div>
					</div>
				</div>
				<div class="scroll_04" id="motion">
					<div class="point">
						<div class="text">
							<div class="title">
								연속사용 10~15회
							</div>
							<div class="info">
								번거롭게 여러번 충전 할 필요없이 한 번의 완충으로<br />
								최대 15회 연속사용 할 수 있습니다.
							</div>
						</div>
						<div class="image">
							<img src="/m/img/main/scroll_3.png "/ >
						</div>
					</div>
				</div>
				<div class="scroll_05" id="motion">
					<div class="point">
						<div class="text">
							<div class="title">
								심플한 구성과 손쉬운 사용
							</div>
							<div class="info">
								주머니의 쏘옥! 파우치에 쏘옥!<br />
								얇고 가벼워서 항상 휴대하기 좋은 바스토네
							</div>
						</div>
						<div class="image">
							<img src="/m/img/main/scroll_4.png "/ >
						</div>
					</div>
				</div>
			</div>
			<div class="main_02">
				<div class="text">
					<div class="container">
						<div class="title">
							 문의하기
						</div>
						<div class="info">
							 바스토네에 대해 궁금하세요? 언제든지 문의하세요 -<br/>고객센터로 전화주시면 바로 답변 받으실 수 있습니다.
						</div>
						<div class="box">
							<div class="half">
								<div class="type">
									 고객 서비스 센터
								</div>
								<div class="guide">
									 평일 9:00 ~ 18:00 / 토·일·공휴일 휴무<br/>(점심시간 12:00 ~ 13:00)
								</div>
								<div class="call">
									 1688 - 7776
								</div>
							</div>
							<div class="half">
								<div class="type">
									 자주하는 질문
								</div>
								<div class="guide">
									 고객님들께서 자주 찾으시는 질문을 모았습니다.<br/>궁금하신 내용에 대해 알아보세요.
								</div>
								<div class="link">
									<a href="/m/faq/">자주하는 질문 보러가기</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 페이지 끝 -->
		</div>
<?php include('./include/footer.php'); ?>