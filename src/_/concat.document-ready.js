$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$("#ninja-slider ul").removeAttr("class"),$("#thumbnail-slider ul").removeAttr("class");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-nav-note a[href="'+url+'"]').parent().addClass("active"),$('.tabs-block a[href="'+url+'"]').parent().addClass("active"),$("._ipc__slider-carousel .item").eq(0).addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),retinajs(),$("._frms__form-control").on("focusin",function(){$(this).parent().addClass("focus")}),$("._frms__form-control").on("focusout",function(){$(this).parent().removeClass("focus")}),$(".building-gallery__owl").owlCarousel({items:3,nav:!0,navText:[],responsive:{0:{items:1,nav:!1},760:{items:2,margin:25},1e3:{items:3,margin:25},1025:{margin:45},1650:{margin:65}}}),$(".building-filter__owl").owlCarousel({margin:0,items:8,navText:[],nav:!1,responsive:{0:{items:1},500:{items:2},760:{items:4},1025:{items:5},1400:{items:7}}});

!function(){$(document.body).on("azbn.setActive",".building-gallery__owl",{},function(l,i){l.preventDefault();var t=$(this);if(i){var e=$('.building-gallery .azbn-building-gallery-item[data-flt="'+i+'"]').eq(0).closest(".owl-item");if(e.length){var a=e.index(".building-gallery .owl-item");t.trigger("to.owl.carousel",[a,444,!0]),console.log(i+": "+a)}}}),$(document.body).on("click.azbn",".building-filter__owl .azbn-building-filter-btn",{},function(l){l.preventDefault();var i=$(this),t=parseInt(i.attr("data-flt"))||0;t&&($(".building-gallery__owl").trigger("azbn.setActive",[t]),$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),i.addClass("active"))}),$(document.body).on("translated.owl.carousel",".building-gallery__owl",{},function(l){l.preventDefault();var i=$(this),t=i.find(".owl-item.active").eq(0).find(".azbn-building-gallery-item").attr("data-flt")||0;$(".building-filter__owl .azbn-building-filter-btn.active").removeClass("active"),$('.building-filter__owl .azbn-building-filter-btn[data-flt="'+t+'"]').addClass("active")})}();