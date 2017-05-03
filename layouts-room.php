<?

//страница этажа

require_once("/home/h308278/zenit-orel.ru/docs/func.php");
$l = db_connect();

Header('Content-Type: text/html; charset=utf-8');

$floor_id = intval($_GET['floor_id']);

if($floor_id) {
	
	$floor = sqlval("SELECT * FROM `m_floor` WHERE id = '$floor_id'");
	
	if($floor['id']) {
		
		$floor['rooms'] = fetchAll("SELECT * FROM `m_ap` WHERE floor = '{$floor['id']}'");
		
		require_once('layouts-room.tpl.php');
		
	} else {
		readfile('404.html');
	}
	
} else {
	readfile('404.html');
}