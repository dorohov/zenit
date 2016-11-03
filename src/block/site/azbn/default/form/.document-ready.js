(function(){
	
	$(document.body).on('submit.azbn', '.azbn-form', {}, function(event){
		event.preventDefault();
		
		var form = $(this);
		$.post('./formsave.php', form.serialize(), function(data){
			
			console.log(data)
			
			form.trigger('reset');
			form.closest('.modal').modal('hide');
			$('#modal-message').modal();
			
		})
		
	});
	
})();