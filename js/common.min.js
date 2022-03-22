document.addEventListener("DOMContentLoaded", function () {

	// loader
	setTimeout(function () {
		document.querySelector('body').classList.remove('loaded');
	}, 400);

	// lazy load
	// setTimeout(function () {
	// 	$(".js-bg").each(function () {
	// 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
	// 	});
	// 	$(".js-img").each(function () {
	// 		$(this).attr('src', $(this).data("src"));
	// 	});
	// }, 200);



	/* components */

	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

	/* components */

	//prevent drag img and a
	const imagesAndLinks = document.querySelectorAll('img, a');
	if (imagesAndLinks) {
		imagesAndLinks.forEach(function (item, i, arr) {
			item.addEventListener('dragstart', function (e) {
				e.preventDefault();
			})
		});
	}


	const handlerResize = function () {
		let viewport_wid = viewport().width;
		let viewport_height = viewport().height;

		// if (viewport_wid <= 991) {

		// }
	}

	window.addEventListener('load', handlerResize);
	window.addEventListener('resize', handlerResize);

	/* semantic dropdown */

	$('.ui.dropdown').dropdown();

	/* burger and side menu */

	let burger = document.querySelector('.burger');
	let side = document.querySelector('.side');

	burger.addEventListener('click', function () {
		this.classList.toggle('active');
		side.classList.toggle('active');
	});

	/* animation init */

	new WOW().init();


});

/* viewport width */
function viewport() {
	let e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */

//basic accordion syntax

$(".accordeon dd").hide().prev().click(function () {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});

// accordeon on click shows different pseudo element

$('.accordeon__title').click(function () {
	$(this).toggleClass('accordeon__title', 500);
	$(this).toggleClass('accordeon__title-active', 500);
	$('dt').not(this).removeClass('accordeon__title-active');
	$('dt').not(this).addClass('accordeon__title');
});

$('.account__list-item').click(function () {
	$(this).addClass('account__list-item--active');
	$('.account__list-item').not(this).removeClass('account__list-item--active');
});


$(document).ready(function () {
	
	//run code only on particular page

	if (window.location.href.indexOf("help-center.html") > -1) {

		$('.account__list-item').on('click', function () {
			$('.accordeon dl dt').addClass('accordeon__title', 500);
			$('.accordeon dl dt').removeClass('accordeon__title-active', 500);
			$('.accordeon dl dd').hide();
			$('.accordeon dl:first-child dt').toggleClass('accordeon__title', 500);
			$('.accordeon dl:first-child dt').toggleClass('accordeon__title-active', 500);
			$('.accordeon dl:first-child dd').show();
		});
		
		$('.accordeon dl:first-child dt').toggleClass('accordeon__title', 500);
		$('.accordeon dl:first-child dt').toggleClass('accordeon__title-active', 500);
		$('.accordeon dl:first-child dd').show();
	 }

	 if (window.location.href.indexOf("referral-program.html") > -1){
		$('.accordeon dl:first-child dt').first().addClass('accordeon__title2', 500);
		$('.accordeon dl:first-child dt').first().addClass('accordeon__title2-active', 500);
		$('.accordeon dl:first-child dd').first().show();

		$('.accordeon-trigger dl:first-child dt').toggleClass('accordeon__title', 500);
		$('.accordeon-trigger dl:first-child dt').toggleClass('accordeon__title-active', 500);
		$('.accordeon-trigger dl:first-child dd').show();
	 }

	 if (window.location.href.indexOf("contest.html") > -1){
		$('.accordeon dl:first-child dt').toggleClass('accordeon__title', 500);
		$('.accordeon dl:first-child dt').toggleClass('accordeon__title-active', 500);
		$('.accordeon dl:first-child dd').show();
	 }



	 //example of showing item with the same index (useless in this project)
	$('.tranding__wrapper').on('mouseover', function () {
		let num = $(this).index();
		$('.tranding__right-wrapper').stop().fadeOut();
		$('.tranding__right-wrapper').eq(num).stop().fadeIn();

	});
	//show another line in popup window
	$('.popup__code').on('click', function () {
		$(this).hide()
		$(".popup__hidden-code").show()
	});


});


$(document).ready(function () {
	//help-center on click shows right title and accordeon list 
	$('.account__list-item').on('click', function () {
		let num = $(this).index();
		$('.account__title').hide();
		$('.account__title').eq(num).stop().show();
		$('.accordeon').hide();
		$('.accordeon').eq(num).stop().fadeIn(500);

	});


	//top menu logic to show only one menu

	$('.nav__item-hidden').hide()
	$('.btns__lang-list').hide()
	$('.dropdown').on('click', function (event) {
	
		$(this).toggleClass('green');
		$('.dropdown-lang').removeClass('green')
		$('.nav__item-hidden').not($(this).next('.nav__item-hidden')).slideUp(200)
		$('.nav__lang-arrow').not($(this).children('.nav__lang-arrow')).removeClass('rotate')	
		$('.dropdown').not(this).removeClass('green')
		$('.btns__lang-list').slideUp(200)
		$('.btns__lang-arrow').removeClass('rotate')
		$(this).children('.nav__lang-arrow').toggleClass('rotate')
		$(this).next('.nav__item-hidden').slideToggle(200)
		
	});
	
	$('.dropdown-lang').on('click', function () {
		$('.dropdown').removeClass('green')
		$(this).toggleClass('green');
		$(".nav__item-hidden").slideUp(200)
		$('.nav__lang-arrow').removeClass('rotate')	
		$(this).children('.btns__lang-arrow').toggleClass('rotate')
		$(this).next('.btns__lang-list').slideToggle(200)

	});
	//hide item when you click whatever but not this
	$(document).click(function(event) {
		if (!$(event.target).is(".dropdown, .dropdown-lang")) {
			$('.nav__item-hidden').slideUp(200)
			$('.nav__lang-arrow').removeClass('rotate')
			$('.btns__lang-list').slideUp(200)
			$('.btns__lang-arrow').removeClass('rotate')
			$('.dropdown').removeClass('green')
			$('.dropdown-lang').removeClass('green')
		}
	});

	

	

});


// same logic as line#133
$('.accordeon__title2').on('click', function () {
	$(this).toggleClass('accordeon__title2-active', 500);
	$('dt').not(this).removeClass('accordeon__title2-active');

});







// noUi slide logic full

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [1000],
	step: 10,
	connect: 'lower',
	range: {
		'min': [250],
		'max': [3000]
	},
	padding: [0, 0],
	pips: {
		mode: 'positions',
		values: [0, 27.3, 63.8, 100],
		stepped: true,
		density: -1,
	}
});


//all the slider logic

slider.noUiSlider.on('update', function (values, handle) {

	const sliderInput = document.getElementById('input');
	const checkbox = document.getElementById('checkbox');
	const totalAmount = document.getElementById('total amount');
	const percent = document.getElementById('percent');
	const card = $('.account-types__grid-item');
	const checked = checkbox.checked;


	sliderInput.value = Math.round(values);
	totalAmount.innerHTML = Math.round(values);
	if (checked && values < 999) {
		totalAmount.innerHTML = Math.round(values) * 1.2
	}
	if (checked && values >= 1000 && values < 3000) {
		totalAmount.innerHTML = Math.round(values) * 1.5
	}
	if (checked && values == 3000) {
		totalAmount.innerHTML = Math.round(values) * 2
	}

	if (values < 999) {
		percent.innerHTML = "20";
		$(card).eq(1).addClass('grid-item-active');
		$(card).eq(2).removeClass('grid-item-active');
		$(card).eq(3).removeClass('grid-item-active');

		$(checkbox).on("change", function () {
			if (this.checked) {
				totalAmount.innerHTML = Math.round(values) * 1.2
			} else {
				totalAmount.innerHTML = Math.round(values)
			}
		});


	}
	if (values >= 1000 && values < 3000) {
		percent.innerHTML = "50";
		$(card).eq(1).removeClass('grid-item-active');
		$(card).eq(3).removeClass('grid-item-active');
		$(card).eq(2).addClass('grid-item-active');

		$(checkbox).on("change", function () {
			if (this.checked) {
				totalAmount.innerHTML = Math.round(values) * 1.5
			} else {
				totalAmount.innerHTML = Math.round(values)
			}
		});
		

	}
	if (values == 3000) {
		percent.innerHTML = "100";
		$(card).eq(1).removeClass('grid-item-active');
		$(card).eq(2).removeClass('grid-item-active');
		$(card).eq(3).addClass('grid-item-active');

		$(checkbox).on("change", function () {
			if (this.checked) {
				totalAmount.innerHTML = Math.round(values) * 2
			} else {
				totalAmount.innerHTML = Math.round(values)
			}
		});

	}

	//if you set input amount by hand this will change slider's position smooth
	$(sliderInput).on("change", function (e) {
		slider.noUiSlider.set(this.value)
	})




});



