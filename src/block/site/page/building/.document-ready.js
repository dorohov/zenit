(function(){
	
	$(document.body).on('azbn.setActive', '.building-gallery__owl', {}, function(event, date){
		event.preventDefault();
		
		var block = $(this);
		
		if(date) {
			
			var item = $('.building-gallery .azbn-building-gallery-item[data-flt="' + date + '"]').eq(0).closest('.owl-item');
			
			if(item.length) {
				var i = item.index('.building-gallery .owl-item');
				block.trigger('to.owl.carousel', [i, 444, true]);
				console.log(date + ': ' + i);
			}
			
		}
		
	});
	
	$(document.body).on('click.azbn', '.building-filter__owl .azbn-building-filter-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = parseInt(btn.attr('data-flt')) || 0;
		
		if(flt) {
			
			$('.building-gallery__owl').trigger('azbn.setActive', [flt]);
			
			$('.building-filter__owl .azbn-building-filter-btn.active').removeClass('active');
			btn.addClass('active');
			
		}
		
	});
	
	$(document.body).on('translated.owl.carousel', '.building-gallery__owl', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var flt = block.find('.owl-item.active').eq(0).find('.azbn-building-gallery-item').attr('data-flt') || 0;
		
		$('.building-filter__owl .azbn-building-filter-btn.active').removeClass('active');
		$('.building-filter__owl .azbn-building-filter-btn[data-flt="' + flt + '"]').addClass('active');
		
	});
	
})();