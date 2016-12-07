<?
$args = array('post_type'=>'page', 'orderby'=>'id', 'order'=>'ASC', 'numberposts' => 0, 'include' => '22,24,30,32,44,5645');
$services = get_posts($args);

//echo $this->post['id'];
//if($this->post['id'] != 13 && $this->post['id'] != 17 && get_post()->post_parent != 17) {

if(is_front_page()) {?>
<div class="index-page-slide last_slide">
<footer class="footer-site index notop">

<?} elseif($this->post['id'] == 13 || $this->post['id'] == 17 || get_post()->post_parent == 17 || is_search()) {?>

<?}elseif(($GLOBALS['footer_type'] == 'slide' && get_field('post_add_type', get_post()->ID) == 'landing') || $GLOBALS['footer_type'] == 'hidden' || (get_post()->ID == 15) || is_category(array('blog', 'pr', 'akcii', 'brending', 'dizain', 'interesnoe', 'marketing', 'novosti', 'process', 'sozdanie-i-prodvizhenie-sajtov', 'firmennyj-stil', 'poligrafi'))){?>
<div class="index-page-slide last_slide">
<footer class="footer-site index notop">
<? if(is_single() && get_field('post_add_type', get_post()->ID) == 'landing'){
	$this->tpl('_/footer-lp-nav', array());
}
}else if(is_single() && get_field('post_add_type', get_post()->ID) == 'landing-star') {
	
	?>
	<footer class="footer-site notop">
	<?
	$this->tpl('_/footer-lp-nav', array());

} else {?>
<footer class="footer-site <?=$GLOBALS['footer_class'];?>">
<?}?>


<?
if($this->post['id'] != 13 && $this->post['id'] != 17 && get_post()->post_parent != 17 &&  !is_search()) {
?>

	<div class="_fs__bg-btn-left"></div>
	<div class="_fs__bg-btn-right"></div>
	<div class="_fs__bg-btn-center"></div>
	<a href="body" class="_fs__btn-top go-to-top active"></a>
	<div class="_fs__inner">
		<div class="container">
			<?if($this->post['id'] != 11){?><div class="form-site__footer">
				<h2 class="_fsf__heading">Хотите работать с нами?</h2>
				<div class="_fsf__note">
					Заполните форму ниже и мы свяжемся с вами в ближайшее время.
				</div>
				<form action="/formsave/" class="form-site inline" method="POST">
					<input type="hidden" name="key" value="londonisthecapitalofgreatbritain">
					<input type="hidden" name="f[Форма]" value="Заявка со страницы (<? the_title(); ?>)">
					<div class="_frms__input icon-user">
						<input type="text" class="_frms__form-control form-control validate[required]" name="f[Имя]" placeholder="Ваше имя">
					</div>	
					<div class="_frms__input icon-phone">
						<input type="text" class="_frms__form-control form-control validate[required]" name="f[Телефон/e-mail]" placeholder="Ваше телефон или email">
					</div>	
					<div class="_frms__input icon-comment">
						<input type="text" class="_frms__form-control form-control validate[required]" name="f[Коментарий]" placeholder="Ваш коментарий">
					</div>	
					<div class="_frms__input _msr__form-btn">
						<button type="submit" class="btn-site btn-white-line btn-line">Отправить</button>
					</div>	
				</form>	
			</div><?}?>
			<div class="row _fs__row">
				<div class="cols _fs__logotip-cols">
					<div><a href="/"><img src="<? echo $this->path('img');?>/default/logotip-white.png" alt="" data-rjs="2"></a></div>
				</div>
				<div class="cols _fs__address-cols"><?=getContacts('address');?></div>
				<div class="cols _fs__phone-cols">
					<div><a href="tel:<?=getContacts('phone1callto');?>"><?=getContacts('phone1');?></a></div>
					<div><a href="tel:<?=getContacts('phone2callto');?>"><?=getContacts('phone2');?></a></div>
				</div>
				<div class="cols _fs__email-cols">
					<div><a href="mailto:<?=getContacts('email');?>"><?=getContacts('email');?></a></div>
				</div>
			</div>
		</div>
	</div>
	<div class="_fs__soc-block">
		<a href="<?=getContacts('soc_be');?>" target="_blank" rel="nofollow" class="_fs__soc soc-site icon-be"></a>
		<a href="<?=getContacts('soc_vk');?>" target="_blank" rel="nofollow" class="_fs__soc soc-site icon-vk"></a>
		<!-- <a href="<?//=getContacts('soc_drb');?>" target="_blank" rel="nofollow" class="_fs__soc soc-site icon-drb"></a> -->
		<a href="<?=getContacts('soc_fb');?>" target="_blank" rel="nofollow" class="_fs__soc soc-site icon-fb"></a>
		<a href="<?=getContacts('soc_tw');?>" target="_blank" rel="nofollow" class="_fs__soc slider-soc soc-site icon-tw"></a>
		<a href="<?=getContacts('soc_igm');?>" target="_blank" rel="nofollow" class="_fs__soc soc-site icon-igm"></a> 
	</div>

<?
}
?>

<?
if(is_front_page()) {?>
</footer>
</div>

<?} elseif($this->post['id'] == 13 || $this->post['id'] == 17 || get_post()->post_parent == 17 || is_search()) {?>

<?}elseif($GLOBALS['footer_type'] == 'slide'){?>
</div>
</div>
<?}else{?>
</footer>
<?}?>


<?
//}
?>

</div>
<? $this->tpl('_/form', array()); ?>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="<? echo $this->path('plugins');?>/fancybox/source/jquery.fancybox.css" media="screen" />
<link rel="stylesheet" type="text/css" href="<? echo $this->path('plugins');?>/fancybox/source/helpers/jquery.fancybox-buttons.css" />
<script src="<? echo $this->path('js');?>/bootstrap.min.js" ></script>
<script src="<? echo $this->path('js');?>/jquery.bootstrap-autohidingnavbar.min.js" ></script>
<script src="<? echo $this->path('js');?>/device.min.js" ></script>
<script src="<? echo $this->path('js');?>/storage.js" ></script>
<script src="<? echo $this->path('js');?>/moment/moment.min.js" ></script>
<script src="<? echo $this->path('js');?>/jquery-plugin/jquery.appear.js"></script> 
<script src="<? echo $this->path('plugins');?>/owl.carousel/owl.carousel.min.js"></script> 
<script src="<? echo $this->path('js');?>/document-ready.js" ></script>
<script src="<? echo $this->path('js');?>/azbn.wheel.js" ></script>
<script src="<? echo $this->path('plugins');?>/fancybox/lib/jquery.mousewheel-3.0.6.pack.min.js"></script>
<script src="<? echo $this->path('plugins');?>/fancybox/source/jquery.fancybox.min.js"></script>
<script src="<? echo $this->path('plugins');?>/fancybox/source/helpers/jquery.fancybox-buttons.min.js"></script>
<script src="<? echo $this->path('js');?>/jquery.validationEngine-ru.min.js" ></script>
<script src="<? echo $this->path('js');?>/jquery.validationEngine.min.js" ></script>
<script src="<? echo $this->path('plugins');?>/jquery.scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="<? echo $this->path('js');?>/retina.min.js" ></script>
<? if(get_post()->ID == 13){?>
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script src="<? echo $this->path('js');?>/document-ready-google-map.js" ></script>
<? }
wp_footer();?>
<script>
	var last = parseInt($('.scroll-page__slide').last().attr('data-slide-id'));
	last += 1;
	$('.last_slide').attr('data-slide-id', last).addClass('scroll-page__slide');
	
</script>

<?
/* --------- Счетчики вставляем сюда --------- */
$this->tpl('_/metrika', array());
/* --------- /Счетчики вставляем сюда --------- */
?>

<script type="text/javascript" src="//vk.com/js/api/openapi.js?136"></script> 
<!-- VK Widget --> 
<div id="vk_community_messages"></div> 
<script type="text/javascript"> 
VK.Widgets.CommunityMessages("vk_community_messages", 41023473, {}); 
</script>

</body>
</html>