'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
!function(){"use strict";$(window).load(function(){$("[data-toggle-nav]").click(function(){var a=$(this).data("toggle-nav");$(a).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var a=$(this).data("collapse-nav");$(a).toggleClass("open-scroll-sidebar")})})}();
!function(){"use strict";$(window).load(function(){$("[data-toggle-rnav]").click(function(){var t=$(this).data("toggle-rnav");$(t).toggleClass("open"),$(".navbar-site").toggleClass("navbar-site-right-open")})})}();


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
!function(){$(document.body).on("azbn.url-history.init",null,{},function(t){t.preventDefault(),$("._msp__block .scroller").mCustomScrollbar(),$(".scroller").mCustomScrollbar(),$(document.body).trigger("azbn.own.init"),$(window).trigger("resize")}),$(document.body).on("azbn.url-history.get",null,{},function(t,e,n,o){t.preventDefault(),$.get(e,{},function(t){var r=$("<div/>",{html:t});$(n).html(r.find(n).eq(0).html()).attr("class",r.find(n).eq(0).attr("class")),r.empty().remove(),$('.azbn-load-link[href="'+e+'"]').closest("li").addClass("active"),1==o&&window.history.pushState({href:e,target:n},null,e),$(document.body).trigger("azbn.url-history.init")})}),window.addEventListener("popstate",function(t){t.state&&t.state.target&&$(document.body).trigger("fecss.url-history.get",[window.location.pathname,t.state.target,!1])},!1)}();
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
!function(){$(document.body).on("azbn.own.init",null,{},function(e){e.preventDefault(),$(".building-gallery__owl").length&&$(".building-gallery__owl").owlCarousel({items:3,nav:!0,navText:[],responsive:{0:{items:1,nav:!1},760:{items:2,margin:25},1e3:{items:3,margin:25},1025:{margin:45},1650:{margin:65}}}),$(".building-filter__owl").length&&$(".building-filter__owl").owlCarousel({margin:0,items:8,navText:[],nav:!1,responsive:{0:{items:1},500:{items:2},760:{items:4},1025:{items:5},1400:{items:7}}})})}(),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$("#ninja-slider ul").removeAttr("class"),$("#thumbnail-slider ul").removeAttr("class");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-nav-note a[href="'+url+'"]').parent().addClass("active"),$('.tabs-block a[href="'+url+'"]').parent().addClass("active"),$("._ipc__slider-carousel .item").eq(0).addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),retinajs(),$("._frms__form-control").on("focusin",function(){$(this).parent().addClass("focus")}),$("._frms__form-control").on("focusout",function(){$(this).parent().removeClass("focus")}),$(document.body).trigger("azbn.own.init");

!function(){$(document.body).on("click.azbn.url-history",".azbn-load-link",{},function(e){if(device.mobile()||device.tablet());else{e.preventDefault();var t=$(this),i=t.attr("href"),n=".site-block-fix",o=!0;$(document.body).trigger("azbn.url-history.get",[i,n,o])}})}();
!function(){$(document.body).on("azbn.setActive",".building-gallery__owl",{},function(l,i){l.preventDefault();var t=$(this);if(i){var e=$('.building-gallery .azbn-building-gallery-item[data-flt="'+i+'"]').eq(0).closest(".owl-item");if(e.length){var a=e.index(".building-gallery .owl-item");t.trigger("to.owl.carousel",[a,444,!0]),console.log(i+": "+a)}}}),$(document.body).on("click.azbn",".building-filter__owl .azbn-building-filter-btn",{},function(l){l.preventDefault();var i=$(this),t=parseInt(i.attr("data-flt"))||0;t&&($(".building-gallery__owl").trigger("azbn.setActive",[t]),$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),i.addClass("active"))}),$(document.body).on("translated.owl.carousel",".building-gallery__owl",{},function(l){l.preventDefault();var i=$(this),t=i.find(".owl-item.active").eq(0).find(".azbn-building-gallery-item").attr("data-flt")||0;$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),$('.building-filter__owl .azbn-building-filter-btn[data-flt="'+t+'"]').addClass("active")})}();
!function(){var t;$(document.body).on("azbn.azbn-layouts-content.hide",".azbn-layouts-content",{},function(t){t.preventDefault();var n=$(this),a=n.find(".azbn-layout-note"),o=n.find(".azbn-layout-panel");o.fadeOut("fast"),a.fadeIn("fast"),n.attr("data-status",0)}),$(document.body).on("azbn.azbn-layouts-content.setStatus",".azbn-layouts-content",{},function(n,a,o){n.preventDefault();var e=$(this),u=e.find(".azbn-layout-note"),s=e.find(".azbn-layout-panel"),l=parseInt(e.attr("data-status"))||0;window.clearTimeout(t),a?(s.find(".azbn-num").html(o),0==l&&(u.hide(),s.fadeIn("fast"))):(s.hide(),u.fadeIn("fast")),e.attr("data-status",a)}),$(document.body).on("mouseenter.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(t){t.preventDefault();var n=$(this),a=parseInt(n.attr("data-floor"))||0;$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[1,a])}),$(document.body).on("mouseleave.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(n){n.preventDefault();var a=$(this);parseInt(a.attr("data-floor"))||0;t=setTimeout(function(){$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.hide")},350)}),$(document.body).on("click.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(t){t.preventDefault();var n=$(this),a=parseInt(n.attr("data-floor-id"))||0,o=$(".azbn-layouts-content").attr("data-base-url")||"";window.location.href=o+a}),$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[0,0])}();
!function(){$(document.body).on("mouseenter.azbn","map#floorMap area",{},function(o){o.preventDefault();var a=$(this),r=a.attr("data-floor-img")||"";$("#floorimg").attr("src",r)}),$(document.body).on("mouseleave.azbn","map#floorMap area",{},function(o){o.preventDefault();var a=($(this),"http://zenit-orel.ru/image/floor/32/11.jpg");$("#floorimg").attr("src",a)}),$(document.body).on("click.azbn","map#floorMap area",{},function(o){o.preventDefault();var a="http://zenit-orel.ru/image/floor/",r="/pdf.php?id=",t=$(this),n=t.attr("data-room-id")||0;$.getJSON($("map#floorMap").attr("data-base-url")+n,function(o){$(".azbn-room-view-img a").attr("href",a+o.fullimg),$(".azbn-room-view-img a img").attr("src",a+o.bigimg),$(".azbn-room-view-print .azbn-as-print").attr("href",r+o.id),$(".azbn-room-view-print .azbn-as-pdf").attr("href",r+o.id+"&save=1"),$(".azbn-room-view-info .azbn-roomcount").html(o.roomcount),$(".azbn-room-view-info .azbn-roomspace").html(o.roomspace)})})}();
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
var h_window=$(window).height(),w_window=$(window).width(),h_navbar=$(".navbar-site").outerHeight(!0),h_header=$(".header-site").outerHeight(!0),w_news_preview=$(".news-item__preview").outerWidth(!0),h_news_block=$(".news-block").outerHeight(!0),h_footer=$(".footer-site").outerHeight(!0),h_content_index=h_window-h_navbar,h_content_scroller=h_window-h_news_block,h_content_sm=h_window-h_navbar-h_footer,h_content_sm_lay=h_window-h_navbar,h_content=h_window-h_navbar-h_footer;device.tablet()&&($(".content-site").css("min-height",h_content_sm),$(".layouts-page-content").css("height",h_content_sm_lay),$("._msp__block .scroller").mCustomScrollbar()),device.mobile()&&($("._fpc__accordion").removeAttr("id"),$(".layouts-page-content").css("height",h_content_index)),device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$("._ipc__link-block").appendTo(".content-block__cols-news"),$(".address-block").appendTo(".navbar-nav__block"),$("#ninja-slider").removeAttr("id"),$(".owl-slider ul").owlCarousel({margin:0,loop:!0,items:1,navText:[],smartSpeed:500,autoplayTimeout:1e4,nav:!0,dots:!1})):($(".content-site").css("height",h_content_scroller),$(".scroller").mCustomScrollbar()),$(".navbar-fixed-top").autoHidingNavbar(),$(".news-item__preview a").css("height",w_news_preview);
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		var topPos=$(document).scrollTop(),snb=$(".navbar-site");snb.hasClass("scroll-sidebar")?topPos<100?snb.removeClass("scroll-sidebar"):snb.hasClass("open-scroll-sidebar")&&snb.removeClass("open-scroll-sidebar"):topPos>100&&snb.addClass("scroll-sidebar");

	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});