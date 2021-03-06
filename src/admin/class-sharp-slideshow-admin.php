<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       josenunez.org
 * @since      1.0.0
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Sharp_Slideshow
 * @subpackage Sharp_Slideshow/admin
 * @author     Jose Nunez <info@josenunez.org>
 */
class Sharp_Slideshow_Admin {

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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version, $options ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->options = $options;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_register_style($this->plugin_name.'public', plugins_url('/../public/css/sharp-slideshow-public.css',__FILE__ ) , array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_register_script($this->plugin_name . 'public', plugins_url('/../public/js/sharp-slideshow-public.js', __FILE__ ), array(), $this->version, true );
		wp_register_script($this->plugin_name . 'admin' , plugins_url('/js/sharp-slideshow-admin.js', __FILE__ ), null, $this->version, true );
	}

	/**
	 * Register the Menu item for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function add_menu(){
		add_submenu_page('options-general.php','Sharp Slideshow','Sharp Slideshow','administrator',__FILE__,array($this,'settings_page'));
		// add_menu_page('Sharp Slideshow','Sharp Slideshow','administrator',__FILE__,array($this,'settings_page'),'');
	}
	/**
	 * Shows main admin page.
	 *
	 * @since    1.0.0
	 */
	public function settings_page(){
		if ( !current_user_can( 'manage_options' ) )  {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}

		wp_enqueue_script( $this->plugin_name.'admin');
		$js = "var sharp_slideshow_api_url ='".$this->options['api_url']."';";
		$js .= "var sss_wp_api_url ='".$this->options['wp_api_url']."';";
		wp_add_inline_script($this->plugin_name.'admin',$js,'before');

		wp_enqueue_script( $this->plugin_name.'public');
		wp_enqueue_style( $this->plugin_name.'public');
		require_once plugin_dir_path( dirname( __FILE__ ) ) . '/admin/partials/sharp-slideshow-admin-display.php';
	}

	public function register_settings(){
		// register_setting('sharp_slideshow_settings','sharp_slideshow_VARNAME');
	}

	/**
	* Extends Endpoints API
	* http://joannecrowther.local/wp-json/sharp-slideshow/v1/slideshow
	*/
	public function extend_API($data) {
		register_rest_route($this->options['api_namespace'],
			'/addSlide',array('methods' => 'POST','callback' => array($this,'add_slide_api'))
		);
		register_rest_route($this->options['api_namespace'],
			'/updateSlide',array('methods' => 'POST','callback' => array($this,'update_slide_api'))
		);

		register_rest_route($this->options['api_namespace'],
			'/removeSlide',array('methods' => 'POST','callback' => array($this,'remove_slide_api'))
		);	
	}

	public function add_slide_api($data){
		return $this->add_slide($data['slideShowID'],$data['slide']);
		
	}
	public function update_slide_api($data){
		return $this->update_slide($data['slideShowID'],$data['slide']);
		
	}
	public function remove_slide_api($data){
		return $this->remove_slide($data['slideShowID'],$data['slideID']);
	}

	private function add_slide($slideShowID,$slide){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		
		$slide['id'] = uniqid();
		$sharp_slideshow_data['slideshows'][$slideShowID]['slides'][] = $slide;
		
		update_option('sharp_slideshow_data',$sharp_slideshow_data);
		return $sharp_slideshow_data['slideshows'][$slideShowID]['slides'];
	}
	private function update_slide($slideShowID,$slide){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$the_key = $this->find_slide($slideShowID,$slide['id']);
		
		$sharp_slideshow_data['slideshows'][$slideShowID]['slides'][$the_key] = $slide;;
		
		update_option('sharp_slideshow_data',$sharp_slideshow_data);
		return true;
	}
	private function remove_slide($slideShowID,$slideID){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$the_key = $this->find_slide($slideShowID,$slideID);
		
		unset($sharp_slideshow_data['slideshows'][$slideShowID]['slides'][$the_key]);
		
		update_option('sharp_slideshow_data',$sharp_slideshow_data);
		return true;
	}

	private function find_slide($slideShowID,$slideID){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$slideShow = $sharp_slideshow_data['slideshows'][$slideShowID];
		foreach ($slideShow['slides'] as $key => $slide) {
			if($slide['id']==$slideID) return $key;
		}
		return -1;
	}
}
