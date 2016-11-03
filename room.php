<?

//json квартиры

require_once($base_url."../func.php");
$l = db_connect();

function arr2json($a) {
	function prepareUTF($matches){
		return json_decode('"'.$matches[1].'"');
	}
	
	return stripslashes(preg_replace_callback('/((\\\u[01-9a-fA-F]{4})+)/', 'prepareUTF',
		json_encode($a)
	));
}

$room_id = intval($_GET['room_id']);

if($room_id) {
	
	$room = sqlval("SELECT * FROM `m_ap` WHERE id = '$room_id'");
	
	if($room['id']) {
		
		echo arr2json(array(
			'id' => $room['id'],
			'bigimg' => $room['bigimg'],
			'fullimg' => $room['fullimg'],
			'roomspace' => $room['roomspace'],
			'roomcount' => $room['roomcount'],
		));
		
	} else {
		echo arr2json(array());
	}
	
} else {
	echo arr2json(array());
}