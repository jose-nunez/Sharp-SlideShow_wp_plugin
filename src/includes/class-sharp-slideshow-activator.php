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
		add_option('sharp_slideshow_data',array());

		update_option('sharp_slideshow_data',array(
			'slideshows'=>array(
				'slideshow_1'=>array(
					'name' =>'Mi sharpito',
					'slides'=>array(
						array( //1
							'type' =>'post', // post, page, custom post
							'id'=>'491',
							'excerpt'=>true,
							'new_page'=>false,
						),
						array( //2
							'type' =>'post',
							'id'=>'380',
							'excerpt'=>true,
							'new_page'=>false,
						),
						array( //3
							'type' =>'post',
							'id'=>'348',
							'excerpt'=>true,
							'new_page'=>false,
						),
					),
				),
			),
		));
	}

}
