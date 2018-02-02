<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       josenunez.org
 * @since      1.0.0
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/public/partials
 */
?>

<?php /*
	$slideShowID
	$slides
*/ ?>

<?php function specialStyle($slide){
	$style = "";	
	$style .= $slide['img_url']? "background-image:url(".$slide['img_url'].");" : "";
	
	if($slide['settings']['display']){
		$size="";
		switch ($slide['settings']['display']) {
			case 'fit':		$size="background-size:contain;";		break;
			case 'fill':	$size="background-size:cover;";			break;
			case 'stretch':	$size="background-size:100% 100%;";		break;
			case 'tile':	$size="background-repeat:repeat;";		break;
			default:		$size="";	break;
		}
		$style .=  $size;
	}

	return $style;
} 

	function generalStyle($settings=null){
		return "padding-top:50%";
	}
?>


<div class="sharp-slideshow sss-<?=$slideShowID?>">
	<div class="sss-no-slides"></div>
	<div class="sss-container">
		<div class="numbertext"><?=($key+1); ?> / <?=count($slides); ?></div>
		<?php foreach ($slides as $key => $slide): ?>
			<a href="<?= $slide['link'] ?>" target="<?= $slide['settings']['new_page']? '_blank':'' ?>">
			<div 
				style="<?=specialStyle($slide)?>;<?=generalStyle()?>" 
				class="sss-slide sss-slide-<?=$slideShowID?> fade" 
			>
				<div class="text">
					<h1><?= $slide['title']?></h1>
					<p><?= (boolval($slide['settings']['excerpt'])? $slide['caption'] : '') ?></p>
				</div>
			</div>
			</a>
		<?php endforeach; ?>

		<a class="prev no-select" onclick="sharpSlideShow[<?=$slideShowID?>].plusSlides(-1)">&#10094;</a>
		<a class="next no-select" onclick="sharpSlideShow[<?=$slideShowID?>].plusSlides(1)">&#10095;</a>
	</div>
	<div class="sss-dots-container" style="text-align:center">
		<?php for($i=1; $i <= count($slides) ; $i++): ?>
		<span class="sss-dot sss-dot-<?=$slideShowID?>" onclick="sharpSlideShow[<?=$slideShowID?>].currentSlide(<?=$i?>)"></span> 
		<?php endfor; ?>
	</div>
</div>
