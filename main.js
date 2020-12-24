$(function () {



	//spanでかこんだ後liで囲む
	function surround(p, i) {
		let array = p.split('');
		let surroundSpan = '';
		array.forEach(function (i) {
			surroundSpan += '<span>' + i + '</span>'
		});
		let inhtml = '<li class="secret' + i + '">' + surroundSpan + '</li>'
		return inhtml
	}
	//spanで囲んでpで囲む
	function surroundreset(p) {
		let array = p.split('');
		let surroundSpan = '';
		array.forEach(function (i) {
			surroundSpan += '<span>' + i + '</span>'
		});
		let inhtml = '<p class="ressetinner">' + surroundSpan + '</p>'
		return inhtml
	}

	//タイピング風に表示
	function delayin(p, c, n) {
		let array = p.split('');
		for (let i = 0; i < array.length; i++) {
			c.find('.secret' + n + ' span').eq(i).delay(150 * i).animate({
				'opacity': 1
			}, 50)

		}
	}
	//タイピング風に表示(resset)

	function delayinresset(p, c, n) {
		let array = p.split('');
		for (let i = 0; i < array.length; i++) {
			$('.ressetinner span').eq(i).delay(150 * i).animate({
				'opacity': 1
			}, 50)

		}
	}






	// タイトルのフェードイン
	     setTimeout(function(){
			 $('.title').animate({
				 top:'14%',
				 opacity:1
			 },1000)
		 },300);
	//作業用
	// $('.title').css('top', '14%');
	// $('.title').css('opacity', '1');



	//じのドロップ

	$('.sub-title-main span:nth-child(1)').click(function () {
		for (let i = 1; i <= $('.drink1 .drinkimg').length; i++) {
			let randomeheight = Math.floor(Math.random() * 1000);
			let imgheight = '-' + randomeheight + 'px';
			let droptime = randomeheight * 50;
			const randomeleft = Math.floor(Math.random() * 120);
			let imgleft = randomeleft + '%';
			let dropwidth = Math.floor(Math.random() * 120);
			$('.drink1 .drinkimg:nth-child(' + i + ')').css({
				'top': imgheight,
				'left': imgleft
			}).animate({
				left: dropwidth + '%',
				top: '120%'
			}, droptime + 1000);
		}
	})


	//ゆ　のスタンプ機能
	let stampOn = false;
	$('.sub-title-main span:nth-child(2)').click(function () {
		if (!stampOn) {
			$('.stampalart').animate({
				top: 0,
			}, 500, function () {
				stampOn = true;
			});
			$
			setTimeout(function () {

				$('.stampalart').css('display', 'none');
			}, 5000);
		} else {
			stampOn = false;
			$('.stamp').remove();
		}


	})
	let counter = 0;
	$('body').click(function (event) {
		if (stampOn) {
			let x = event.pageX - 12;
			let y = event.pageY - 12;
			let symbol = ['★', '♡', '!', '?', '♫', '♭', '＊', '♪', 'ありがとう'];
			let symbolnumber = Math.floor(Math.random() * 9)
			let randomcolor = ['#66E884', '#70D3FF', '#FF8474', 'black']
			let randomecolornumber = Math.floor(Math.random() * 4)
			counter++;
			let stamp = '<div class="stamp stamp' + counter + '">' + symbol[symbolnumber] + '</div>';
			$('body').append(stamp);
			$('.stamp' + counter + '').css({
				'left': x,
				'top': y,
				'color': randomcolor[randomecolornumber]
			});
			console.log(x, y);
		}
	})

	//ん　のコメント表示
	let bgDisplay = false;
	let secret = $('.secret');
	let sentenseN = "もしよろしければ、感想お待ちしております！"
	let sentenseliN = surround(sentenseN, 3)

	$('.sub-title-main span:nth-child(3)').click(function () {

		if (bgDisplay && $('.secret3').length === 0) {

			$('.secret').append(sentenseliN);
			delayin(sentenseN, secret, 3);

		}
	})

	//や　のリセット
	let sentenseresset = 'リセットします';
	let sentenseressetp = surroundreset(sentenseresset);
	$('.sub-title-main span:nth-child(4)').click(function () {
		$('.resset').append(sentenseressetp);
		delayinresset(sentenseresset);
		setTimeout(function () {
			location.reload()
		}, 2100);

	})

	//の　のコメント表示
	let sentenseNO = '楽しんでいただければ嬉しいです。';
	let sentenseliNO = surround(sentenseNO, 2);



	$('.sub-title-main span:nth-child(5)').click(function () {

		if (bgDisplay && $('.secret2').length === 0) {

			$('.secret').append(sentenseliNO);
			delayin(sentenseNO, secret, 2);

		}
	})
	//ifを使って、bfDisplay=trueの時にoneを使い一回のみ実行にしたかったが、うまくいかず断念



	//ぽの落下

	$('.main-title-inner span:nth-child(1)').click(function () {
		if ($(window).width() > 768) {
			$('.main-title-inner span:nth-child(2)').css('padding-left', '102px')
		} else {
			$('.main-title-inner span:nth-child(2)').css('padding-left', '47px')
		}
		$(this).css('position', 'absolute')
		$(this).addClass('span-drop')
		if ($(window).width() > 768) {
			$(this).animate({
				top: '85%'
			}, 700)
		} else {
			$(this).animate({
				top: '95%'
			}, 700)
		}
	});

	// - のジャンプ
	let shakerepeat = false;
	$('.main-title-inner span:nth-child(2)').click(function () {
		$('.title').addClass('shake');
		setTimeout(function () {
			$('.title').removeClass('shake');
		}, 5000)

	})

	//コメント欄表示

	$('.main-title-inner span:nth-child(3)').click(function () {
		if ($(window).width() > 768) {
			$('.menu').animate({
				left: '80%'
			}, 1000);

			$('.menu-button').animate({
					left: 0
				}, 1000)
				.addClass('leftside');

			setTimeout(function () {
				$('.bg-comment').css('display', 'block'),
					bgDisplay = true;
				$('.spanhover').removeClass('hoverremove');
			}, 2000);
		} else {
			setTimeout(function () {
				$('.bg-comment').css('display', 'block'),
					bgDisplay = true;
				$('.spanhover').removeClass('hoverremove');
			}, 1000);
		}
	});


	//背景を広げる
	$('.main-title-inner span:nth-child(4)').click(function () {
		$('.bg-color').animate({
			width: '0%'
		}, 2300)
		$('.bg-color2').animate({
			width: '0%'
		}, 2300)
	})



	//お　のコメント表字
	let sentenseO = '見つけてくれてありがとうございます!';
	let sentenseliO = surround(sentenseO, 1);


	$('.main-title-inner span:nth-child(5)').on('click', function () {
		if (bgDisplay && $('.secret1').length === 0) {
			$('.secret').append(sentenseliO);
			delayin(sentenseO, secret, 1);
		}

	})

	//全ての色を変える
	let colors = ['#66E888', '#70D3FF', '#FF8474', '#ffff7d']

	let colorCounter = 0;


	for (let i = 0; i < $('.main-title-inner span').length; i++) {
		$('.main-title-inner span:nth-child(' + (i + 1) + ')').css('color', colors[colorCounter % 3]);
		colorCounter++
	}
	for (let i = 0; i < $('.sub-title-main span').length; i++) {
		$('.sub-title-main span:nth-child(' + (i + 1) + ')').css('color', colors[(colorCounter - 1) % 3]);
		colorCounter++
	}
	$('.bg-color, .bg-color2').css('background-color', colors[3])
	$('.main-title-inner span:nth-child(6)').click(function () {
		colorCounter++
		let colorsShift = colors.shift();
		colors.push(colorsShift);
		$('.bg-color, .bg-color2').css('background-color', colors[3])


		for (let i = 0; i < $('.main-title-inner span').length; i++) {
			$('.main-title-inner span:nth-child(' + (i + 1) + ')').css('color', colors[(colorCounter + i) % 3]);
		}
		for (let i = 0; i < $('.sub-title-main span').length; i++) {
			$('.sub-title-main span:nth-child(' + (i + 1) + ')').css('color', colors[(colorCounter + i - 1) % 3]);
		}

	})




	//最後の文字を光らせる
	$('.main-title-inner span:nth-child(7)').click(function () {
		$(this).toggleClass('flash')
	});

	//hambarger
	$('.hambarger').click(function () {
		$('.pageLink').toggleClass('toggleham');
		$('.ham').fadeToggle();
		$('.hamclose').fadeToggle();
	})
	//slideshow
	$('.slideshow').each(function () {
		var $container = $(this),
			$slideGroup = $container.find('.slideshow-slides'),
			$slides = $slideGroup.find('.slide'),
			$nav = $container.find('.slideshow-nav'),
			$indicator = $container.find('.slideshow-indicator'),

			slideCount = $slides.length,
			indecatorHTML = '',
			currentIndex = 0,
			duration = 500,
			interval = 8500;

		$slides.each(function (i) {
			$(this).css({
				left: 100 * i + '%'
			});
			indecatorHTML += '<a href="">' + (i + 1) + '</a>';
		});
		$indicator.html(indecatorHTML);

		function goToSlide(index) {
			$slideGroup.animate({
				left: -64 * index + '%'
			}, duration);
			currentIndex = index;
			updateNav();
		}

		function updateNav() {
			var $navPrev = $nav.find('.prev'),
				$navNext = $nav.find('.next');

			if (currentIndex === 0) {
				$navPrev.addClass('disabled');
			} else {
				$navPrev.removeClass('disabled');
			}
			if (currentIndex === slideCount - 1) {
				$navNext.addClass('disabled');
			} else {
				$navNext.removeClass('disabled');
			}
			$indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');

		}

		function startTimer() {
			let timer = setInterval(function () {
				var nextIndex = (currentIndex + 1) % slideCount;
				goToSlide(nextIndex);
			}, interval);
		}
		$nav.on('click', 'a', function (event) {
			event.preventDefault();
			if ($(this).hasClass('prev')) {
				goToSlide(currentIndex - 1);
			} else {
				goToSlide(currentIndex + 1);
			}
		});
		$indicator.on('click', 'a', function (event) {
			event.preventDefault();
			if (!$(this).hasClass('active')) {
				goToSlide($(this).index());
			}
		});
		goToSlide(currentIndex);
		startTimer();
	})


});
//load時の動作
window.onload = (function () {
	$('.aboutBody').animate({
		opacity: 1
	}, 1000)
})