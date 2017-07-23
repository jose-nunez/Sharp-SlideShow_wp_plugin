<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       josenunez.org
 * @since      1.0.0
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/public
 * @author     Jose Nunez <info@josenunez.org>
 */
class Sharp_Slideshow_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_register_style($this->plugin_name.'public', plugins_url('/css/sharp-slideshow-public.css',__FILE__ ) , array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_register_script($this->plugin_name.'public', plugins_url('/js/sharp-slideshow-public.js', __FILE__ ), array(), $this->version, true );
	}

	/**
	* Extends Endpoints API
	* http://joannecrowther.local/wp-json/sharp-slideshow/v1/slideshow
	*/
	public function extend_API( $data ) {
		register_rest_route( 
			'sharp-slideshow/v1', 
			'/slideshow', 
			array(
				'methods' => 'GET',
				'callback' => array($this,'shortcode_api'),
			) 
		);	
	}

	/**
	 * 
	 */
	public function shortcode_api($atts, $content=null, $code=""){
		// return htmlentities($this->display());
		return $this->display();
	}

	/**
	 * Loads the content on shortcode invocation
	 * [sharp-slideshow]
	 *
	 * @since    1.0.0
	 */
	public function shortcode($atts, $content=null, $code=""){
		wp_enqueue_style( $this->plugin_name.'public');
		wp_enqueue_script($this->plugin_name.'public');

		$js = "intialice(jQuery);";
		wp_add_inline_script($this->plugin_name.'public',$js);
		
		return $this->display();
	}

	/**
	 * Returns the front code to be shown
	 *
	 * @since    1.0.0
	 */
	private function display(){
		ob_start();

			$slides = array(
				array('title'=>'title 1','caption'=>'este es el caption 1','img_url'=>plugin_dir_url( __FILE__ ) .'/img/img1.jpg','link'=>'est-quia-recusandae-sed-facere-autem'),
				array('title'=>'title 2','caption'=>'este es el caption 2','img_url'=>plugin_dir_url( __FILE__ ) .'/img/img2.jpg','link'=>'natus-est-est-autem-fuga/'),
				array('title'=>'title 3','caption'=>'este es el caption 3','img_url'=>plugin_dir_url( __FILE__ ) .'/img/img3.jpg','link'=>'http://www.josenunez.org','target'=>'_blank'),
			);

			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/sharp-slideshow-public-display.php';
		return ob_get_clean();
	}

}
