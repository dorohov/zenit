var map;


DG.then(function () {
	map = DG.map('map', {
		center: [52.958175, 36.07072],
		zoom: 17
  	});
	var myIcon = DG.icon({
		iconUrl: '/img/default/icon-map.png',
		iconRetinaUrl: '/img/default/icon-map.png',
		iconSize: [100, 128],
		iconAnchor: [50, 128],
		popupAnchor: [0, 0]
	});
	DG.marker([52.958466, 36.070637], {icon: myIcon}).addTo(map).bindPopup('ул. Розы Люксембург, д.33');
	//DG.marker([52.958466, 36.070637]).addTo(map).bindPopup('ул. Розы Люксембург, д.33');
});