(function(){
	
	$(document.body).on('click.azbn.url-history', '.azbn-load-link', {}, function(event){
		
		if(device.mobile() || device.tablet()) {
			
		} else {
			event.preventDefault();
			
			var btn = $(this);
			var href = btn.attr('href');
			
			var target = '.site-block-fix';
			
			var addToHistory = true;
			
			$(document.body).trigger('azbn.url-history.get', [href, target, addToHistory]);
			
		}
		
	});
	
})();