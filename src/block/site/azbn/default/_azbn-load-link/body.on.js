(function(){
	
	$(document.body).on('azbn.url-history.init', null, {}, function(event){
		event.preventDefault();
		
		$('._msp__block .scroller').mCustomScrollbar();
		$('.scroller').mCustomScrollbar();
		
		$('.twentytwenty-container').twentytwenty();
		
		$(document.body).trigger('azbn.own.init');
		
		$(window).trigger('resize');
		
	});
	
	$(document.body).on('azbn.url-history.get', null, {}, function(event, href, target, addToHistory){
		event.preventDefault();
		
		var r;
		
		if(addToHistory) {
			r = $('<div/>', {
				class : 'azbn-load-circle',
			})
				.attr('data-state', '')
			;
			
			r.appendTo($(document.body));
			setTimeout(function(){
				r.attr('data-state', 'active');
			}, 128);
		}
		
		setTimeout(function(){
			
			$.get(href, {}, function(data) {
				
				var d = $('<div/>',{
					html : data,
				});
				
				$(target)
					.html(d.find(target).eq(0).html())
					.attr('class', d.find(target).eq(0).attr('class'))
				;
				
				d.empty().remove();
				
				if($('.azbn-load-link[href="' + href + '"]').length) {
					$('.azbn-load-link[href="' + href + '"]').closest('li').addClass('active');
				} else {
					var _href = window.location.href;
					_href = (_href.split('/')).pop();
					$('.azbn-load-link[href="./' + _href + '"]').closest('li').addClass('active');
				}
				
				if(addToHistory == true) {
					// Добавляем запись в историю, используя pushState
					window.history.pushState({href : href, target : target}, null, href);
					
					r.attr('data-state', 'finish');
					setTimeout(function(){
						r
							.empty()
							.remove()
						;
					}, 400);
				}
				
				$(document.body).trigger('azbn.url-history.init');
				//$(window).trigger('resize');
			});
			
		}, 555);
		
	});
	
	window.addEventListener('popstate', function(event) {
		//alert(JSON.stringify(event.state));
		if(event.state && event.state.target) {
			$(document.body).trigger('fecss.url-history.get', [window.location.pathname, event.state.target, false]);
		}
	}, false);
	
})();