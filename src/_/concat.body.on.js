$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
!function(){$(document.body).on("azbn.url-history.init",null,{},function(t){t.preventDefault(),$("._msp__block .scroller").mCustomScrollbar(),$(".scroller").mCustomScrollbar(),$(".twentytwenty-container").twentytwenty(),$(document.body).trigger("azbn.own.init"),$(window).trigger("resize")}),$(document.body).on("azbn.url-history.get",null,{},function(t,e,n,o){t.preventDefault(),$.get(e,{},function(t){var r=$("<div/>",{html:t});$(n).html(r.find(n).eq(0).html()).attr("class",r.find(n).eq(0).attr("class")),r.empty().remove(),$('.azbn-load-link[href="'+e+'"]').closest("li").addClass("active"),1==o&&window.history.pushState({href:e,target:n},null,e),$(document.body).trigger("azbn.url-history.init")})}),window.addEventListener("popstate",function(t){t.state&&t.state.target&&$(document.body).trigger("fecss.url-history.get",[window.location.pathname,t.state.target,!1])},!1)}();