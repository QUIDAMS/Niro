$(document).ready(function(){
	$('.multiple-items').slick({
		infinite: true, //бесконечная прокрутка
    slidesToShow: 1, //показывать по 1 слайду
    centerMode: true, //слайд по центру
    lazyLoad: 'progressive', //ленивая загрузка, хорошо для пользователе и когда много картинок, ассинхронность, если пользователь не спускается вниз, то там не будет происходить загрузка
    // autoplay: true, // автоматическая прокрутка 
  	// autoplaySpeed: 4000, //каждые 4 сек
  	centerPadding: false,
  	variableWidth: true,
  	dots: true,     //есть точки
  	appendDots: $('.box-for-slider-dots'), //их расположение будет в новом созданном блоке
  	appendArrows: $('.box-for-slider-arrows'),  //расположение стрелочек
  	prevArrow: '<button type="button" class="box-for-slider-arrows__prev"><img src="img/Left24px.svg" alt="L"> </button>',
  	nextArrow: '<button type="button" class="box-for-slider-arrows__next"><img src="img/Right24px.svg" alt="R"> </button>',
	});
	$('.inspirations-multiple-items').slick({
		infinite: true, //бесконечная прокрутка
    slidesToShow: 2, //показывать по 2 слайда
  	initialSlide: 0, //показ слайда со второго
  	slidesToScroll: 1,
  	dots: true,     //есть точки
    centerPadding: false,
    centerMode: false, //слайд по центру
    variableWidth: true,
    appendArrows: $('.box-for-inspirations-arrow'),  //расположение стрелочек
  	appendDots: $('.box-for-inspirations-dots'), 
  	nextArrow: '<button type="button" class="box-for-inspirations-arrow__next"><img src="img/Right-slider2.svg" alt="R"> </button>',
  	prevArrow: '<button type="button" class="box-for-inspirations-arrow__prev"></button>',


	});
});

//appendArrows/appendDots изменить место прикрепления навигационных стрелок/точек 
//appendArrows: $('.hui'), //можно указать существующий класс и в него переместятся стрелки или создать новый и стилизовать его в сss

// prevArrow:/ nextArrow:  
//,prevArrow: '<button type="button" class="hgf"> Предыдущая </button>' внешний вид кнопок навигации, им можно задать html и прописать новый класс чтобы изменить стили

// centerPadding: '11px'; боковые отступы в центральном режиме 