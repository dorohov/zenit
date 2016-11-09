(function(){
	
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		
		//$(window).trigger('resize');
		//$(this).find('.modal-owl').trigger('');
		
		var modal = $(this);
		var owl = modal.find('.modal-owl');
		
		$(window).trigger('resize');
		
	});
	
})();