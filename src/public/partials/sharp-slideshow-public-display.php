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

<div class="sharp-slideshow">
	<div class="slideshow-container">

		<?php foreach ($slides as $key => $slide): ?>
			<a href="<?= $slide['link'] ?>" target="<?= $slide['target'] ?>">
				<div class="mySlides fade">
					<div class="numbertext"><?=($key+1); ?> / <?=count($slides); ?></div>
					<img src="<?= $slide['img_url'] ?>" style="width:100%">
					<div class="text"><?= $slide['title'].' '.$slide['caption'] ?></div>
				</div>
			</a>
		<?php endforeach; ?>

		<a class="prev no-select" onclick="sharpSlideShow.plusSlides(-1)">&#10094;</a>
		<a class="next no-select" onclick="sharpSlideShow.plusSlides(1)">&#10095;</a>
	</div>
	<div style="text-align:center">
		<span class="dot" onclick="sharpSlideShow.currentSlide(1)"></span> 
		<span class="dot" onclick="sharpSlideShow.currentSlide(2)"></span> 
		<span class="dot" onclick="sharpSlideShow.currentSlide(3)"></span> 
	</div>
</div>
