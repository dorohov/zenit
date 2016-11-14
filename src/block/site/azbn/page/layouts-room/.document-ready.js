(function(){
	
	
	$(document.body).on('mouseenter.azbn', 'map#floorMap area', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var img = block.attr('data-floor-img') || '';
		
		$('#floorimg').attr('src', img);
		
	});
	
	$(document.body).on('mouseleave.azbn', 'map#floorMap area', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var t_img = $('#floorimg');
		
		t_img.attr('src', t_img.attr('data-base-url'));
		
	});
	
	$(document.body).on('click.azbn', 'map#floorMap area', {}, function(event){
		event.preventDefault();
		
		var base_url = 'http://zenit-orel.ru/image/floor/';
		var base_pdf = '/pdf.php?id=';
		
		var block = $(this);
		var room_id = block.attr('data-room-id') || 0;
		
		$.getJSON($('map#floorMap').attr('data-base-url') + room_id, function(room) {
			/*
			var room = {
				id : 2278,
				bigimg : '32/f5-17r1-sm.jpg', //http://zenit-orel.ru/image/floor/32/f5-17r12-sm.jpg
				fullimg : '32/f5-17r1.jpg',
				//text : 'Общая площадь с учетом лоджий и балконов: 73.53 м<sup>2</sup><br>Количество комнат: 2<br>Площадь комнат: 36.02 м<sup>2</sup><br>Площадь кухни: 14.33 м<sup>2</sup>',
				//plan : '',
				roomspace : '43,23',
				roomcount : 2,
			};
			*/
			
			$('.azbn-room-view-img a').attr('href', base_url + room.fullimg);
			$('.azbn-room-view-img a img').attr('src', base_url + room.bigimg);
			
			$('.azbn-room-view-print .azbn-as-print').attr('href', base_pdf + room.id);
			$('.azbn-room-view-print .azbn-as-pdf').attr('href', base_pdf + room.id + '&save=1');
			
			$('.azbn-room-view-info .azbn-roomspace').html(room.space);
			
			/*
			if(parseInt(room.roomcount) == 1) {
				$('.azbn-room-view-info .azbn-roomspace-suffix').html('а');
			} else {
				$('.azbn-room-view-info .azbn-roomspace-suffix').html('ы');
			}
			*/
			$('.azbn-room-view-info .azbn-roomspace-suffix').html('а');
			
			$('.azbn-room-view-info .azbn-roomcount').html(room.roomcount).attr('data-roomcount', room.roomcount);
			
			/*
			if(parseInt(room.roomcount) == 1) {
				$('.azbn-room-view-info .azbn-roomcount').append('<span class="count-suffix" >-но</span>');
			} else {
				$('.azbn-room-view-info .azbn-roomcount').append('<span class="count-suffix" >-х</span>');
			}
			*/
			
		});
		
	});
	
	$('map#floorMap area').eq(-1).trigger('click.azbn');
	
})();