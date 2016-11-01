$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('#ninja-slider ul').removeAttr('class');
$('#thumbnail-slider ul').removeAttr('class');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('.navbar-nav-note a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-block a[href="'+url+'"]').parent().addClass('active'); 
$('._ipc__slider-carousel .item').eq(0).addClass('active');

$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});
$("form.form-site").validationEngine(
	'attach', {
		promptPosition : "bottomLeft"
	}
);
retinajs();
$('._frms__form-control').on('focusin', function(){
	$(this).parent().addClass("focus");
});
$('._frms__form-control').on('focusout', function(){
	$(this).parent().removeClass("focus");
});

$('.building-gallery__owl').owlCarousel({
	items:3,
	//slideBy:1,
	nav: true,	
	navText: [],
	responsive:{
	   	0:{
			items: 1,
			nav: false
	   	},
	   	760:{
			items: 2,
	   		margin: 25
	   	},
	   	1000:{
			items: 3,
	   		margin: 25
	   	},
	   	1025:{
	   		margin: 45
	   	},
	   	1650:{
	   		margin: 65
	   	}
	}
});
$('.building-filter__owl').owlCarousel({
	margin: 0,
	items:8,
	//slideBy:1,
	navText: [],
	nav: false,
	responsive:{
	   	0:{
	   		items:1
	   	},
	   	500:{
	   		items:2
	   	},
	   	760:{
	   		items:4
	   	},
	   	1025:{
	   		items:5
	   	},
	   	1400:{
	   		items:7
	   	}
	}
});