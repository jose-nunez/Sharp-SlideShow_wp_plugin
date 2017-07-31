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

<div class="sharp-slideshow sss-<?=$slideShowID?>">
	<div class="sss-container">

		<?php foreach ($slides as $key => $slide): ?>
				<div class="sss-slide sss-slide-<?=$slideShowID?> fade">
					<div class="numbertext"><?=($key+1); ?> / <?=count($slides); ?></div>
					<a href="<?= $slide['link'] ?>" target="<?= $slide['target'] ?>">
						<img src="<?= $slide['img_url'] ?>" style="width:100%">
						<div class="text"><?= $slide['title'].' '.$slide['caption'] ?></div>
					</a>
				</div>
		<?php endforeach; ?>

		<a class="prev no-select" onclick="sharpSlideShow[<?=$slideShowID?>].plusSlides(-1)">&#10094;</a>
		<a class="next no-select" onclick="sharpSlideShow[<?=$slideShowID?>].plusSlides(1)">&#10095;</a>
	</div>
	<div style="text-align:center">
		<span class="sss-dot sss-dot-<?=$slideShowID?>" onclick="sharpSlideShow[<?=$slideShowID?>].currentSlide(1)"></span> 
		<span class="sss-dot sss-dot-<?=$slideShowID?>" onclick="sharpSlideShow[<?=$slideShowID?>].currentSlide(2)"></span> 
		<span class="sss-dot sss-dot-<?=$slideShowID?>" onclick="sharpSlideShow[<?=$slideShowID?>].currentSlide(3)"></span> 
	</div>
</div>
