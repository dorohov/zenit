
$(function() {
	
	var block = $('.scroll-page').eq(0);
	var dots = $('.scroll-page__dots').eq(0);
	var blog_navbar;
	
	var scrolling;
	
	var can_scroll = function(timeout){
		if(timeout) {
			setTimeout(function(){
				scrolling = false;
			}, timeout);
		} else {
			scrolling = false;
		}
	};
	
	can_scroll();
	
	if(block.size() && !screenJS.isXS() && !screenJS.isSM() && !device.mobile() && !device.tablet()) {
		
		if(block.hasClass('blog-page-content')) {
			
			$('.scroll-page__slide.last_slide').remove().empty();
			blog_navbar = $('.navbar-site-right').eq(0);
			
		}
		
		if(dots) {
			
			dots.find('.scroll-page__dot').remove().empty();
			
			block.find('.scroll-page__slide').each(function(index){
				
				var slide = $(this);
				var slide_id = slide.attr('data-slide-id') || 0;
				
				var dot = $('<button/>', {
					class : 'scroll-page__dot'
				})
					.attr('data-slide-id', slide_id)
					.on('click', function(event) {
						event.preventDefault();
						
						var __slide_id = block.attr('data-slide-id');
						if(slide_id > __slide_id) {
							for(var i = slide_id + 1; i < __slide_id + 1; i++) {
								block.attr('data-slide-id', i);
							}
						} else if(slide_id < __slide_id) {
							for(var i = slide_id - 1; i > __slide_id - 1; i--) {
								block.attr('data-slide-id', i);
							}
						}
						
						//block.attr('data-slide-id', slide_id);
						block.trigger('azbn.wheel', [{diff:0, next:slide_id, callback:function(){
							can_scroll(633);
						}}]);
					})
					.appendTo(dots)
				;
				
			});
			
			
			
			dots.on('azbn.setDot', function(event, obj){
				
				dots.find('.scroll-page__dot.active').removeClass('active');
				dots.find('.scroll-page__dot[data-slide-id="' + obj.next + '"]').addClass('active');
				
			});
			
		dots.trigger('azbn.setDot', [{next : 0}]);
			
		}
		
		$(document.body).on('azbn.wheel', '.scroll-page', {}, function(event, obj){
			event.preventDefault();
			
			var cb = obj.callback;
			
			if(obj.next == block.find('.scroll-page__slide').length) {
				
			} else {
				
				//event.preventDefault();
				
				block.find('.scroll-page__slide')
					.filter('.active')
						.toggleClass('active')
					.end()
					.eq(obj.next)
						.toggleClass('active')
				;
				
				if(dots) {
					dots.trigger('azbn.setDot', [obj]);
				}
				
			}
			
			cb();
		});
		
		
		$(document.body).on('wheel mousewheel DOMMouseScroll MozMousePixelScroll', '.scroll-page', {}, function(event) {
			//event.preventDefault();
			//diff:event.originalEvent.wheelDelta
			
			if(scrolling) {
				
				event.preventDefault();
				
				return;
				
			} else {
				
				scrolling = true;
				
				var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
				var slide = parseInt(block.attr('data-slide-id'));
				var next;
				
				console.warn(diff);
				
				if(blog_navbar && blog_navbar.hasClass('open')) {
					blog_navbar.find('.azbn-blog-menu-btn').trigger('click');
				}
				
				if(diff > 0) {
					
					event.preventDefault();
					
					if(slide > 0) {
						
						next = slide - 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(633);
						}}]);
						
					} else {
						
						can_scroll();
						
					}
					
				} else if(diff < 0) {
					
					//console.log([slide, block.find('.scroll-page__slide').length, block.find('.scroll-page__slide').length -1, block.hasClass('blog-page-content')].join(','));
					
					if(slide == (block.find('.scroll-page__slide').length - 1) && (block.hasClass('blog-page-content'))) {
						
						if(!blog_navbar.hasClass('open')) {
							blog_navbar.find('.azbn-blog-menu-btn').trigger('click');
						}
						
						can_scroll(633);
						
					} else if(slide < block.find('.scroll-page__slide').length - 1) {
						
						event.preventDefault();
						
						next = slide + 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(1234);
						}}]);
						
					} else {
						
						event.preventDefault();
						
						can_scroll();
						
					}
					
					
				} else {
					
					//event.preventDefault();
					
					can_scroll();
					
				}
				
				//can_scroll();
				
			}
			
		});
		
	} else {
		
	}
	
});