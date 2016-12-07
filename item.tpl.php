<?

$parents = get_ancestors($this->post['id'], 'page', 'post_type');
$parent_link = l($parents[0]);
$parent_title = t($parents[0]);

?>

<div class="container">
	
	<div class="content-block services-page-content ">
		<h1 class="heading-site"><?=t($this->post['id']);?></h1>
		<ul class="breadcrumb-site">
			<li><a href="/">Главная</a></li>
			<li><a href="<?=$parent_link;?>"><?=$parent_title;?></a></li>
			<li class="active"><?=t($this->post['id']);?></li>
		</ul>
		<div class="row block-row services-row">
			
			<div class="cols block-cols services-panel-cols">
				<?
				$this->tpl('service/navbar-services', array(
					'parent' => $parents[0],
					'other_parent' => ($parents[0] == 5) ? 142 : 5,
					'menu_title' => $parent_title,
				));
				?>
			</div>
			
			<?if(in_array(142, $parents)){?>
			<div class="cols block-cols services-list-cols services-type-cols ">
					<div class="_si__cost">Цена от <span class="_ruble icon-ruble yellow"><?=get_field('cost', $this->post['id']);?></span>
						<?
						switch(intval(get_field('cost_m2', $id))) {
							case 0:{} break;
							case 1:{echo '/м<sup>2</sup>';} break;
							case 2:{echo '/шт.';} break;
							default:{} break;
						}
						?>
					</div>
			<?}else{?>
			<div class="cols block-cols services-list-cols">
				<div class="services-item _sip__item">
					<div class="row _si__row">
						<div class="cols _si__preview-cols">
							<div class="_si__preview block-item__preview">
								<span class="block-item__preview-inner" style="background-image: url(<?=$this->Imgs->postImg($this->post['id'], 'full');?>"></span>
							</div>
						</div>
						<div class="cols _si__note-cols">
							<div class="_si__note">
								<div class="_si__cost">Цены от <span class="_ruble icon-ruble yellow"><?=get_field('cost', $this->post['id']);?></span>
									<?
									switch(intval(get_field('cost_m2', $id))) {
										case 0:{} break;
										case 1:{echo '/м<sup>2</sup>';} break;
										case 2:{echo '/шт.';} break;
										default:{} break;
									}
									?>
								</div>
								<ul class="_si__list">
									<?=get_field('preview', $this->post['id']);?>
								</ul>
							</div>
						</div>
					</div>
					<div class="_si__btn-block">
						<button type="button" class="btn-site btn-yellow-light btn-services azbn-order-service" data-service-title="<?=t($this->post['id']);?>" data-toggle="modal" data-target="#modal-order" >Оставить заявку</button>
					</div>
				</div>
			<?}?>
				<div class="text-block _sip__text-block">
					<?
					the_content();
					?>
				</div>
			</div>
			
		</div>
	</div>
	
	
	<?
	$this->tpl('_/panel', array());
	?>
	
</div>

<?
$this->tpl('service/modal-order', array());
?>