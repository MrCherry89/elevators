$(document).ready(function () {

	$(".menu-btn").on("click", function (e) {
		e.stopPropagation();
		$(this).closest(".menu-wrap").find(".top").toggleClass("rotate");
		$(this).closest(".menu-wrap").find(".bottom").toggleClass("rotate");
		$(".main-menu").toggleClass("open-menu");
	});

	$(".advertising-item .img-block").on("click", function () {
		$(this).hide();
		$(".advertising-item .form-block").addClass("shown");
	});

	$(".advertising-item .form-block form .btn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest(".advertising-item").find(".form-block").removeClass("shown");
		$(this).closest(".advertising-item").find(".img-block").show();
	});

	$(".tab-menu li a").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".tab-menu").find("li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content-item").removeClass("active");
		$(".tab-content-item").eq(index).addClass("active");

		if (index == 1) {
			$(".add-price").addClass("add-price-map");
		} else {
			$(".add-price").removeClass("add-price-map");
		}
	});

	$(".checkbox-list-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: false,
		vertical: true
	}).on("mousewheel", function (event) {
		event.preventDefault();
		if (event.deltaX > 0 || event.deltaY < 0) {
			$(this).slick('slickNext');
		} else if (event.deltaX < 0 || event.deltaY > 0) {
			$(this).slick('slickPrev');
		}
	});

	$("#slider-vertical").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 500,
		value: 0,
		step: 10,
		slide: function (event, ui) {
			$("#amount").text(ui.value);
		}
	});
	$("#amount").text($("#slider-vertical").slider("value"));

	$('.jobs-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.jobs-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.jobs-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 651,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
    },
  ]
	});

	$('.portfolio-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.portfolio-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.portfolio-slider-wrap .slider-navigation .slick-next'),
				responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
    },
  ]
	});

	$('.portfolio-slider .item').magnificPopup({
		items: {
			src: 'path-to-image-1.jpg'
		},
		type: 'image'
	});

	$('.portfolio-slider .item').magnificPopup({
		items: [
			{
				src: 'img/portfolio-img1.jpg'
		  },
			{
				src: 'img/portfolio-img2.jpg',
		  },
			{
				src: 'img/stands-img1.jpg'
		  },
			{
				src: 'img/stands-img2.jpg',
		  },
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});


});
