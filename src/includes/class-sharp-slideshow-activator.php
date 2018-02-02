<?php

/**
 * Fired during plugin activation
 *
 * @link       josenunez.org
 * @since      1.0.0
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/includes
 * @author     Jose Nunez <info@josenunez.org>
 */
class Sharp_Slideshow_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		add_option('sharp_slideshow_excerpt_length');


		// add_option('sharp_slideshow_data','feo poto');
		// add_option('sharp_slideshow_data',array());
		// update_option('sharp_slideshow_data',array(
		add_option('sharp_slideshow_data',array(
			'slideshows'=>array(
				'Slider_1'=>'1313',
				'1313'=>array(
					'name' =>'Slider 1',
					'settings'=>array(),
					'auto_slides'=>array(),
					'slides'=>array(),
				),
				'Slider 2'=>'1212',
				'1212'=>array(
					'name' =>'Slider 2',
					'settings'=>array(),
					'auto_slides'=>array(),
					'slides'=>array(),
				),
			),
		));
	}

}
