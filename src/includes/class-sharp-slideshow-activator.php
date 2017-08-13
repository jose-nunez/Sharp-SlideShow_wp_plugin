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
							'id' => '5987544f94581',
							'source_type' =>'post', // post, page, custom post
							'source_id'=>'1788',
							'settings'=>array(
								'display'=>'tile',//fit|fill|stretch|tile|center
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'id' => '5987544f94590',
							'source_type' =>'post',
							'source_id'=>'1758',
							'settings'=>array(
								'display'=>'fit',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'id' => '5987544f94597',
							'source_type' =>'post',
							'source_id'=>'1768',
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
							'id' => '5987544f9459d',
							'source_type' =>'post', // post, page, custom post
							'source_id'=>'1772',
							'settings'=>array(
								'display'=>'center',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'id' => '5987544f945a3',
							'source_type' =>'post',
							'source_id'=>'1694',
							'settings'=>array(
								'display'=>'fit',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array( 
							'id' => '5987544f945a9',
							'source_type' =>'post',
							'source_id'=>'1750',
							'settings'=>array(
								'display'=>'fill',
								'excerpt'=>true,
								'new_page'=>true,
							),
						),
						array(
							'id' => '5987544f945b1',
							'source_type' =>'post',
							'source_id'=>'1706',
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
