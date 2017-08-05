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
		add_option('sharp_slideshow_excerpt_length');


		update_option('sharp_slideshow_data',array(
			'slideshows'=>array(
				'Mi_sharpito_1'=>'1313',
				'1313'=>array(
					'name' =>'Mi_sharpito_1',
					'settings'=>array(),
					'auto_slides'=>array(),
					'slides'=>array(
						array(
							'type' =>'post', // post, page, custom post
							'id'=>'491',
							'settings'=>array(
								'display'=>'tile',//fit|fill|stretch|tile|center
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'type' =>'post',
							'id'=>'380',
							'settings'=>array(
								'display'=>'fit',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'type' =>'post',
							'id'=>'348',
							'settings'=>array(
								'display'=>'center',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
					),
				),
				'Mi_sharpito_2'=>'1212',
				'1212'=>array(
					'name' =>'Mi_sharpito_2',
					'settings'=>array(),
					'auto_slides'=>array(),
					'slides'=>array(
						array(
							'type' =>'post', // post, page, custom post
							'id'=>'412',
							'settings'=>array(
								'display'=>'center',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'type' =>'post',
							'id'=>'452',
							'settings'=>array(
								'display'=>'fit',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'type' =>'post',
							'id'=>'342',
							'settings'=>array(
								'display'=>'fill',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array(
							'type' =>'post',
							'id'=>'478',
							'settings'=>array(
								'display'=>'center',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
					),
				),
			),
		));
	}

}
