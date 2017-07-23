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
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/sharp-slideshow-admin.js', null, $this->version, true );
		wp_register_script($this->plugin_name . 'admin', plugins_url('/js/sharp-slideshow-admin.js', __FILE__ ), null, $this->version, true );
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
		require_once plugin_dir_path( dirname( __FILE__ ) ) . '/admin/partials/sharp-slideshow-admin-display.php';
	}

	public function register_settings(){
		// register_setting('sharp_slideshow_settings','sharp_slideshow_VARNAME');
	}
}
