<?
$floor_name = $floor['id'] - 283;

$price = sqlval("SELECT SQL_CALC_FOUND_ROWS * FROM price where status='3' and id={$floor['id']} LIMIT 1");

?><!DOCTYPE html>
<html dir="ltr" lang="ru-RU"> 
	<head>
		<meta charset="utf-8">	
<title>Планировки квартир на этаже</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<link type="image/x-icon" href="./favicon.ico" rel="shortcut icon" />
<link type="image/x-icon" href="./favicon.ico" rel="icon" />

<link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="./favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
<link rel="manifest" href="./favicon/manifest.json">

<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<link href="./css/site.css" rel="stylesheet">
<link href="./css/animate.min.css" rel="stylesheet">
<script src="./js/spin.min.js" ></script> 

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '694678950663471');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=694678950663471&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code --> 

	</head>
	<body>	
 		
		<div class="site-block-fix bg-base-7 bg-base-blue">
	 		<div class="site-inner">
	 			<nav class="navbar navbar-site" data-wow-delay="1s">	
	<div class="container-fluid navbar-container-fluid">		
		<div class="row navbar-row">		
			<div class="cols navbar-header-cols">
				<div class="navbar-header">
					<div class="row navbar-header__row ">
						<div class="cols navbar-brand__cols">
							<a class="navbar-brand" href="./">
								<img src="./img/default/logotip.png" data-rjs="2" class="dark" alt="" >
							</a>
						</div>
				        <div class="cols navbar-hamburger__cols">
							<button class="hamburger hamburger--emphatic" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false" data-toggle-nav=".navbar-site">
								<span class="hamburger-box">
									<span class="hamburger-inner"></span>
								</span>
							</button>					
				        </div>

				    </div>
				</div>
			</div>
			<div class="cols navbar-collapse-cols">
				<div class="collapse navbar-collapse" id="bs-navbar-collapse">		
					<div class="row navbar-collapse-row">
						<div class="cols navbar-nav-cols">
							<ul class="nav navbar-nav">						
								<li><a href="./">Главная</a></li>
								<li><a href="./note.html">Описание</a></li>
								<li><a href="./layouts.html">Планировки квартир</a></li>
								<li><a href="./location.html">Расположение</a></li>
								<!--<li><a href="./faq.html">Вопросы и ответы</a></li>-->
								<li><a href="./contacts.html">Контакты</a></li>
							</ul>
						</div>	
						<div class="cols navbar-contacts-cols">
							<div class="navbar-contacts">
								<a href="mailto:sales@zenit-orel.ru" class="navbar-contacts__item icon-mailto"></a>
								<a href="#" class="navbar-contacts__item icon-tel" data-toggle="modal" data-target="#modal-call"></a>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</nav> 
			
				<div class="content-block layouts-room-page-content">
	<div class="container-fluid">	 
		<div class="content-site">
			<div class="scroller" data-mcs-theme="yellow" data-mcs-axis="y">
				<div class="content-inner">	
					<div class="row _lrpc__row">
						<div class="_lrpc__cols-heading cols">
							<div class="_lrpc__heading-block">
								<h1 class="heading-site _lrpc__heading-site"><?=$floor_name;?> этаж</h1> 
								<a href="./layouts.html" class="btn-site btn-back">назад</a>
							</div>
						</div>
						<div class="_lrpc__cols-btn cols">
							<a href="./design-floor.html" class="btn-site btn-design">Пример использования жилого пространства квартир</a>
						</div>
					</div>
					<div class="row _lrpc__row2"> 
						<div class="cols _lrpc__floor">
							<div class="_lrpc__floor-inner"  data-mcs-theme="yellow" data-mcs-axis="x">
								
								<div id="apart" name="apart" class="_lrpc__floor-apart">
									<div class="_lrpc__floor-box" style="background-image: url('http://zenit-orel.ru/image/floor/<?=$floor['bigimg'];?>');" data-base-url="http://zenit-orel.ru/image/floor/<?=$floor['bigimg'];?>" >
	 									<img src="http://zenit-orel.ru/image/floor/<?=$floor['bigimg'];?>" id="floorimg" usemap="#floorMap" style="position: absolute;">
										<map class="imap" id="floorMap" name="floorMap" data-base-url="room.php?room_id=" ><!-- data-base-url="/json/content/room.json?room_id=" -->
											<?
											$_r = array();
											if(count($floor['rooms'])) {
												foreach($floor['rooms'] as $r) {
													$_r = $r;
											?>
											<area href="#apart" shape="poly" coords="<?=$r['data']?>" data-room-id="<?=$r['id']?>" data-floor-img="http://zenit-orel.ru/image/floor/<?=$r['img']?>" >
											<?
												}
											}
											?>
											
										</map>
									</div>
								</div>
								
							</div>
						</div>
						<div class="cols _lrpc__room">
							<div id="oneroom" class="_lrpc__oneroom azbn-room-view-img">
								<a href="http://zenit-orel.ru/image/floor/<?=$_r['img'];?>" title=""><img src="http://zenit-orel.ru/image/floor/<?=$_r['bigimg'];?>"></a>
							</div>
							<div class="_lrpc__room-btn azbn-room-view-print ">
								<a href="./../pdf.php?id=0" class="btn-site btn-white-line small azbn-as-print" target="_blank" >Версия для печати</a>
								<!-- <a href="./../pdf.php?id=0&save=1" class="btn-site btn-yellow-bg-line  azbn-as-pdf"><span>Сохранить в PDF</span></a> -->
							</div>
						</div>
						<div class="cols _lrpc__info">
							<div class="_dpc__panel-info _lrpc__panel-info azbn-room-view-info">
								<div class="_num azbn-roomcount"></div>
								<div>комнатная квартира</div>
								<div><span class="azbn-roomspace" ></span> м<sup>2</sup></div>
								<div><button type="button" class="btn-site btn-white-line" data-toggle="modal" data-target="#modal-order">Заявка на консультацию</button></div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			

		</div>
	</div>
</div>
			
				<footer class="footer-site bg-darken not-blue" data-wow-delay="1s">	
	<div class="container">
		<div class="row _fs__row">
			<div class="cols _fs__copyright-cols">
				<div>Офис продаж:</div>
			</div>
			<div class="cols _fs__address-cols">
				<div class="_fs__address-block">
					<div class="row _fs__address-row">
						<div class="cols _fs__tel-cols">
							<div><a href="tel:+74862445060">+7 (4862) <span>44-50-60</span></a></div>
						</div>
						<div class="cols _fs__location-cols">
							<div>г. Орел, ул. Старо-Московская, 10</div>
						</div>
						<div class="cols _fs__email-cols">
							<div><a href="mailto:sales@zenit-orel.ru">sales@zenit-orel.ru</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="cols _fs__soc-cols">
				<div class="soc-site _fs__soc-site">
					<a href="https://vk.com/zao_zenit" class="soc-site__item icon-vk" target="_blank"></a>
					<a href="https://www.facebook.com/zaozenit/" class="soc-site__item icon-fb" target="_blank"></a>
					<a href="https://www.instagram.com/zao_zenit/" class="soc-site__item icon-inst" target="_blank"></a>
				</div>
			</div>
			<div class="cols _fs__dorohovdesign-cols">
				<div class="_fs__dorohovdesign">
					<div class="row _fs__dorohovdesign-row">
						<div class="cols">Разработка сайта</div>
						<div class="cols"><a href="http://dorohovdesign.ru/" target="_blank"><img src="./img/default/dorohovdesign.png" alt=""></a></div>
					</div>
				</div>		 
			</div>		
		</div>
	</div>
</footer>  	

	 		</div>
 		</div>
		<div class="modal fade" id="modal-call" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _msc__dialog">
		<div class="modal-content _msc__content">
			<div class="modal-body _msc__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _msc__block">		
					<h3 class="modal-title">Закажите</h3>
					<div class="">обратный звонок</div>			
					<form action="./formsave.php" method="POST" class="form-site azbn-form _msc__form">
	<input type="hidden" name="f[Источник]" value="Форма заявки на обратный звонок" />
	<div class="_frms__input icon icon-user">
		<input type="text" name="f[Имя]" class="_frms__form-control form-control validate[required]" id="f[name]" placeholder="Ваше имя">
	</div>	
	<div class="_frms__input icon icon-tel">
		<input type="tel" name="f[Телефон]" class="_frms__form-control form-control validate[required,custom[phone]]"  id="f[phone]" placeholder="Ваш телефон">
	</div>	
	<div class="_frms__input _msc__form-btn">
		<button type="submit" class="btn-site btn-blue">Перезвоните мне</button>
	</div>	
</form>
				</div>
			</div>
		</div>
	</div>
</div>  
		<div class="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _msc__dialog">
		<div class="modal-content _msc__content">
			<div class="modal-body _msc__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block">		
					<h3 class="modal-title _msm__title">Ваша заявка принята. <br>Спасибо!</h3>
					<div>Мы свяжимся с Вами в ближайшее время!</div>
				</div> 
			</div>
		</div>
	</div>
</div>
		<div class="modal fade" id="modal-order" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _msc__dialog">
		<div class="modal-content _msc__content">
			<div class="modal-body _msc__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _msc__block">		
					<h3 class="modal-title">Заявка</h3>
					<div class="">на консультацию</div>			
					<form action="./formsave.php" method="POST" class="form-site azbn-form _msc__form">
	<input type="hidden" name="f[Источник]" value="Форма заявки на просмотр" />
	<div class="_frms__input icon icon-user">
		<input type="text" name="f[Имя]" class="_frms__form-control form-control validate[required]" id="fo[name]" placeholder="Ваше имя">
	</div>	
	<div class="_frms__input icon icon-tel">
		<input type="tel" name="f[Телефон]" class="_frms__form-control form-control validate[required,custom[phone]]"  id="fo[phone]" placeholder="Ваш телефон">
	</div>	
	<div class="_frms__input _msc__form-btn">
		<button type="submit" class="btn-site btn-blue">Отправить</button>
	</div>	
</form>
				</div>
			</div>
		</div>
	</div>
</div>  
		
			
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<link rel="stylesheet" type="text/css" href="./plugins/fancybox/source/jquery.fancybox.css" media="screen" />
<link rel="stylesheet" type="text/css" href="./plugins/fancybox/source/helpers/jquery.fancybox-buttons.css" />

<script src="./js/jquery.min.js" ></script>

<script src="./js/bootstrap.min.js" ></script>
<script src="./js/jquery.bootstrap-autohidingnavbar.min.js" ></script>
<script src="./js/device.min.js" ></script>
<script src="./js/wow.min.js" ></script>
<script src="./plugins/owl.carousel/owl.carousel.min.js"></script>

<link rel="stylesheet" type="text/css" href="./plugins/twentytwenty/css/twentytwenty.css">
<script src="./plugins/twentytwenty/js/jquery.event.move.js"></script>
<script src="./plugins/twentytwenty/js/jquery.twentytwenty.js"></script>
<script>
	$(window).load(function(){
		$(".twentytwenty-container").twentytwenty();
	});
</script>

<script src="./js/document-ready.js" ></script>
<script src="./js/azbn.wheel.js"></script>

<script src="./plugins/fancybox/lib/jquery.mousewheel-3.0.6.pack.min.js"></script>
<script src="./plugins/fancybox/source/jquery.fancybox.min.js"></script>
<script src="./plugins/fancybox/source/helpers/jquery.fancybox-buttons.min.js"></script>

<script src="./js/jquery.validationEngine-ru.min.js" ></script>
<script src="./js/jquery.validationEngine.min.js" ></script>

<script src="./plugins/jquery.scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="./js/retina.min.js" ></script>

<script>

if(typeof Spinner != 'undefined') {
	
	var opts = {
		lines: 10, // The number of lines to draw
		length: 7, // The length of each line
		width: 5, // The line thickness
		radius: 10, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		color: '#fff', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 25, // Top position relative to parent in px
		left: 25 // Left position relative to parent in px
	};
	var target = document.getElementById('_czr__spinner')
	var spinner = new Spinner(opts).spin(target);
	
}

</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter40102910 = new Ya.Metrika({
                    id:40102910,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/40102910" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<link rel="stylesheet" href="https://cdn.callbackkiller.com/widget/cbk.css">
<script type="text/javascript" src="https://cdn.callbackkiller.com/widget/cbk.js?cbk_code=2a25e85db647b0cbc9637a496597ff9e" charset="UTF-8" async></script>

	</body>
</html>