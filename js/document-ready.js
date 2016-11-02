"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var t="noname";return e.isXS()?t="xs":e.isSM()?t="sm":e.isMD()?t="md":e.isLG()&&(t="lg"),t},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var t="noname";return e.isPortrait()?t="portrait":e.isLandscape()&&(t="landscape"),t},e.is=function(t){return t==e.screenIs()||t==e.orientationIs()},e.onResize=function(t,n){if(t.type){var o=e.__resizefunctions[t.type];t.orientation?o[t.orientation].push(n):o.default.push(n)}},e.resizeCall=function(t){if(t.type){if(e.__resizefunctions[t.type].default)for(var n=0;n<e.__resizefunctions[t.type].default.length;n++){var o=e.__resizefunctions[t.type].default[n];o(t)}if(e.__resizefunctions[t.type][t.orientation])for(var n=0;n<e.__resizefunctions[t.type][t.orientation].length;n++){var o=e.__resizefunctions[t.type][t.orientation][n];o(t)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,t,n,o,i){console.log("Error FECSS: "+t+":"+n+":"+o+": "+JSON.stringify(e)+"\n"+JSON.stringify(i))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var t=jQuery.fn.addClass,n=jQuery.fn.removeClass,o=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var t=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),t},e.fn.toggleClass=function(){var t=o.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),t}}(jQuery),!function(){$(window).load(function(){$("[data-toggle-nav]").click(function(){var e=$(this).data("toggle-nav");$(e).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var e=$(this).data("collapse-nav");$(e).toggleClass("open-scroll-sidebar")})})}(),!function(){$(window).load(function(){$("[data-toggle-rnav]").click(function(){var e=$(this).data("toggle-rnav");$(e).toggleClass("open"),$(".navbar-site").toggleClass("navbar-site-right-open")})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var t=(new Date).getTime();$(document.body).attr("data-created_at",t)}),$(document.body).on("fecss.window.unload",null,{},function(e,t){console.log("body trigger:fecss.window.unload: "+JSON.stringify(t))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,t){console.log("body trigger:fecss.keydown: "+JSON.stringify(t))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,t){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),!function(){$(document.body).on("azbn.url-history.init",null,{},function(e){e.preventDefault(),$("._msp__block .scroller").mCustomScrollbar(),$(".scroller").mCustomScrollbar(),$(document.body).trigger("azbn.own.init"),$(window).trigger("resize")}),$(document.body).on("azbn.url-history.get",null,{},function(e,t,n,o){e.preventDefault(),$.get(t,{},function(e){var i=$("<div/>",{html:e});$(n).html(i.find(n).eq(0).html()).attr("class",i.find(n).eq(0).attr("class")),i.empty().remove(),$('.azbn-load-link[href="'+t+'"]').closest("li").addClass("active"),1==o&&window.history.pushState({href:t,target:n},null,t),$(document.body).trigger("azbn.url-history.init")})}),window.addEventListener("popstate",function(e){e.state&&e.state.target&&$(document.body).trigger("fecss.url-history.get",[window.location.pathname,e.state.target,!1])},!1)}(),$(document.body).on("changeClass",null,{},function(e,t){$(function(){})}),$(function(){var e="noname-browser",t=navigator.userAgent.toLowerCase();t.indexOf("msie")!=-1&&(e="msie"),t.indexOf("trident")!=-1&&(e="msie"),t.indexOf("konqueror")!=-1&&(e="konqueror"),t.indexOf("firefox")!=-1&&(e="firefox"),t.indexOf("safari")!=-1&&(e="safari"),t.indexOf("chrome")!=-1&&(e="chrome"),t.indexOf("chromium")!=-1&&(e="chromium"),t.indexOf("opera")!=-1&&(e="opera"),t.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),!function(){$(document.body).on("azbn.own.init",null,{},function(e){e.preventDefault(),$(".building-gallery__owl").length&&$(".building-gallery__owl").owlCarousel({items:3,nav:!0,navText:[],responsive:{0:{items:1,nav:!1},760:{items:2,margin:25},1e3:{items:3,margin:25},1025:{margin:45},1650:{margin:65}}}),$(".building-filter__owl").length&&$(".building-filter__owl").owlCarousel({margin:0,items:8,navText:[],nav:!1,responsive:{0:{items:1},500:{items:2},760:{items:4},1025:{items:5},1400:{items:7}}})})}(),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$("#ninja-slider ul").removeAttr("class"),$("#thumbnail-slider ul").removeAttr("class");var e=window.location.pathname;$('.navbar-nav a[href="'+e+'"]').parent().addClass("active"),$('.navbar-nav-note a[href="'+e+'"]').parent().addClass("active"),$('.tabs-block a[href="'+e+'"]').parent().addClass("active"),$("._ipc__slider-carousel .item").eq(0).addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),retinajs(),$("._frms__form-control").on("focusin",function(){$(this).parent().addClass("focus")}),$("._frms__form-control").on("focusout",function(){$(this).parent().removeClass("focus")}),$(document.body).trigger("azbn.own.init"),!function(){$(document.body).on("click.azbn.url-history",".azbn-load-link",{},function(e){if(device.mobile()||device.tablet());else{e.preventDefault();var t=$(this),n=t.attr("href"),o=".site-block-fix",i=!0;$(document.body).trigger("azbn.url-history.get",[n,o,i])}})}(),!function(){$(document.body).on("azbn.setActive",".building-gallery__owl",{},function(e,t){e.preventDefault();var n=$(this);if(t){var o=$('.building-gallery .azbn-building-gallery-item[data-flt="'+t+'"]').eq(0).closest(".owl-item");if(o.length){var i=o.index(".building-gallery .owl-item");n.trigger("to.owl.carousel",[i,444,!0]),console.log(t+": "+i)}}}),$(document.body).on("click.azbn",".building-filter__owl .azbn-building-filter-btn",{},function(e){e.preventDefault();var t=$(this),n=parseInt(t.attr("data-flt"))||0;n&&($(".building-gallery__owl").trigger("azbn.setActive",[n]),$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),t.addClass("active"))}),$(document.body).on("translated.owl.carousel",".building-gallery__owl",{},function(e){e.preventDefault();var t=$(this),n=t.find(".owl-item.active").eq(0).find(".azbn-building-gallery-item").attr("data-flt")||0;$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),$('.building-filter__owl .azbn-building-filter-btn[data-flt="'+n+'"]').addClass("active")})}(),!function(){var e;$(document.body).on("azbn.azbn-layouts-content.hide",".azbn-layouts-content",{},function(e){e.preventDefault();var t=$(this),n=t.find(".azbn-layout-note"),o=t.find(".azbn-layout-panel");o.fadeOut("fast"),n.fadeIn("fast"),t.attr("data-status",0)}),$(document.body).on("azbn.azbn-layouts-content.setStatus",".azbn-layouts-content",{},function(t,n,o){t.preventDefault();var i=$(this),a=i.find(".azbn-layout-note"),s=i.find(".azbn-layout-panel"),r=parseInt(i.attr("data-status"))||0;window.clearTimeout(e),n?(s.find(".azbn-num").html(o),0==r&&(a.hide(),s.fadeIn("fast"))):(s.hide(),a.fadeIn("fast")),i.attr("data-status",n)}),$(document.body).on("mouseenter.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(e){e.preventDefault();var t=$(this),n=parseInt(t.attr("data-floor"))||0;$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[1,n])}),$(document.body).on("mouseleave.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(t){t.preventDefault();var n=$(this);parseInt(n.attr("data-floor"))||0,e=setTimeout(function(){$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.hide")},350)}),$(document.body).on("click.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(e){e.preventDefault();var t=$(this),n=parseInt(t.attr("data-floor-id"))||0,o=$(".azbn-layouts-content").attr("data-base-url")||"";window.location.href=o+n}),$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[0,0])}(),!function(){$(document.body).on("mouseenter.azbn","map#floorMap area",{},function(e){e.preventDefault();var t=$(this),n=t.attr("data-floor-img")||"";$("#floorimg").attr("src",n)}),$(document.body).on("mouseleave.azbn","map#floorMap area",{},function(e){e.preventDefault();var t=($(this),"http://zenit-orel.ru/image/floor/32/11.jpg");$("#floorimg").attr("src",t)}),$(document.body).on("click.azbn","map#floorMap area",{},function(e){e.preventDefault();var t="http://zenit-orel.ru/image/floor/",n="/pdf.php?id=",o=$(this),i=o.attr("data-room-id")||0;$.getJSON($("map#floorMap").attr("data-base-url")+i,function(e){$(".azbn-room-view-img a").attr("href",t+e.fullimg),$(".azbn-room-view-img a img").attr("src",t+e.bigimg),$(".azbn-room-view-print .azbn-as-print").attr("href",n+e.id),$(".azbn-room-view-print .azbn-as-pdf").attr("href",n+e.id+"&save=1"),$(".azbn-room-view-info .azbn-roomcount").html(e.roomcount),$(".azbn-room-view-info .azbn-roomspace").html(e.roomspace)})})}(),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},t={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",o="window-height",i=$(window).outerWidth(!0),a=$(window).outerHeight(!0),s=$("html body").eq(0);i<e.xs.max&&(s.hasClass("window-width-sm")&&s.removeClass("window-width-sm"),s.hasClass("window-width-md")&&s.removeClass("window-width-md"),s.hasClass("window-width-lg")&&s.removeClass("window-width-lg"),n="window-width-xs"),i>e.sm.min&&i<e.sm.max&&(s.hasClass("window-width-xs")&&s.removeClass("window-width-xs"),s.hasClass("window-width-md")&&s.removeClass("window-width-md"),s.hasClass("window-width-lg")&&s.removeClass("window-width-lg"),n="window-width-sm"),i>e.md.min&&i<e.md.max&&(s.hasClass("window-width-xs")&&s.removeClass("window-width-xs"),s.hasClass("window-width-sm")&&s.removeClass("window-width-sm"),s.hasClass("window-width-lg")&&s.removeClass("window-width-lg"),n="window-width-md"),i>e.lg.min&&(s.hasClass("window-width-xs")&&s.removeClass("window-width-xs"),s.hasClass("window-width-sm")&&s.removeClass("window-width-sm"),s.hasClass("window-width-md")&&s.removeClass("window-width-md"),n="window-width-lg"),a<t.xs.max&&(s.hasClass("window-height-sm")&&s.removeClass("window-height-sm"),s.hasClass("window-height-md")&&s.removeClass("window-height-md"),s.hasClass("window-height-lg")&&s.removeClass("window-height-lg"),o="window-height-xs"),a>t.sm.min&&a<t.sm.max&&(s.hasClass("window-height-xs")&&s.removeClass("window-height-xs"),s.hasClass("window-height-md")&&s.removeClass("window-height-md"),s.hasClass("window-height-lg")&&s.removeClass("window-height-lg"),o="window-height-sm"),a>t.md.min&&a<t.md.max&&(s.hasClass("window-height-xs")&&s.removeClass("window-height-xs"),s.hasClass("window-height-sm")&&s.removeClass("window-height-sm"),s.hasClass("window-height-lg")&&s.removeClass("window-height-lg"),o="window-height-md"),a>t.lg.min&&(s.hasClass("window-height-xs")&&s.removeClass("window-height-xs"),s.hasClass("window-height-sm")&&s.removeClass("window-height-sm"),s.hasClass("window-height-md")&&s.removeClass("window-height-md"),o="window-height-lg"),$("html body").eq(0).addClass(n).addClass(o)});var t=$(window).height(),n=($(window).width(),$(".navbar-site").outerHeight(!0)),o=($(".header-site").outerHeight(!0),$(".news-item__preview").outerWidth(!0)),i=$(".news-block").outerHeight(!0),a=$(".footer-site").outerHeight(!0),s=t-n,r=t-i,l=t-n-a,d=t-n;device.tablet()&&($(".content-site").css("min-height",l),$(".layouts-page-content").css("height",d),$("._msp__block .scroller").mCustomScrollbar()),device.mobile()&&($("._fpc__accordion").removeAttr("id"),$(".layouts-page-content").css("height",s)),device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$("._ipc__link-block").appendTo(".content-block__cols-news"),$(".address-block").appendTo(".navbar-nav__block"),$("#ninja-slider").removeAttr("id"),$(".owl-slider ul").owlCarousel({margin:0,loop:!0,items:1,navText:[],smartSpeed:500,autoplayTimeout:1e4,nav:!0,dots:!1})):($(".content-site").css("height",r),$(".scroller").mCustomScrollbar()),$(".navbar-fixed-top").autoHidingNavbar(),$(".news-item__preview a").css("height",o)}).trigger("resize"),$(window).on("scroll",function(e){var t=$(document).scrollTop(),n=$(".navbar-site");n.hasClass("scroll-sidebar")?t<100?n.removeClass("scroll-sidebar"):n.hasClass("open-scroll-sidebar")&&n.removeClass("open-scroll-sidebar"):t>100&&n.addClass("scroll-sidebar")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});