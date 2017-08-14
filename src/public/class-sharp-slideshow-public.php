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
	public function __construct( $plugin_name, $version, $options ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->options = $options;
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
	public function extend_API($data) {
		register_rest_route($this->options['api_namespace'],
			'/slideshowsids',array('methods' => 'GET','callback' => array($this,'get_slideshows_ids_api'))
		);
		register_rest_route($this->options['api_namespace'],
			'/slideshow/(?P<slideShowID>[a-zA-Z0-9-]+)',array('methods' => 'GET','callback' => array($this,'shortcode_api')) 
		);

		register_rest_route($this->options['api_namespace'],
			'/slides/(?P<slideShowID>[a-zA-Z0-9-]+)',array('methods' => 'GET','callback' => array($this,'get_slides_api'))
		);
	}

	public function get_slides_api($data){
		return $this->get_slides($data['slideShowID']);
	}
	public function shortcode_api($data){
		// return htmlentities($this->display());
		return $this->display($data['slideShowID']);
	}


	public function get_slideshows_ids_api($data){
		return $this->get_slideshows_ids();
	}
	private function get_slideshows_ids(){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$slideshows = $sharp_slideshow_data['slideshows']; 
		$ids = array();
		foreach ($slideshows as $index => $slide) {
			if($this->isSlideID($slideshows,$index)) $ids[] = array('ID'=>$index,'name'=>$slide['name']);
		}
		return $ids;
	}

	private function get_slideshow_id($slideShowName=-1){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$slideshows = $sharp_slideshow_data['slideshows']; 

		if($this->isSlideName($slideshows,$slideShowName)){ //is the name!
			return intval($slideshows[$slideShowName]);
		}
		else if($this->isSlideID($slideshows,$slideShowName)){ //is the ID!
			return $slideShowName;
		}
		else return 0;
	}
	
	private function isSlideName($slideshows,$name){
		if(is_string($slideshows[''.$name])) return true;
		return false;
	}
	private function isSlideID($slideshows,$id){
		if(is_array($slideshows[''.$id])) return true;
		return false;
	}
	/**
	 * Loads the content on shortcode invocation
	 * [sharp-slideshow]
	 *
	 * @since    1.0.0
	 */
	public function shortcode($atts, $content=null, $code=""){
		
		$attributes = shortcode_atts(array('name' => 0,),$atts);

		$slideShowID = $this->get_slideshow_id($attributes['name']);
		if($slideShowID===0) return;

		wp_enqueue_style( $this->plugin_name.'public');
		wp_enqueue_script($this->plugin_name.'public');

		$js = "intialice_sharpSlideShow(".$slideShowID.");";
		wp_add_inline_script($this->plugin_name.'public',$js);
		
		return $this->display($slideShowID);
	}
	/**
	 * Returns the front code to be shown
	 *
	 * @since    1.0.0
	 */
	private function display($slideShowID){	
		ob_start();
			$slides = $this->get_slides($slideShowID);
			include plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/sharp-slideshow-public-display.php';
		return ob_get_clean();

		// return 'holi '.$slideShowID;
	}

	/**
	 * Loads the content for the slideshow
	 *
	 * @since    1.0.0
	 */
	private function get_slides($slideShowID){
		$sharp_slideshow_data = get_option('sharp_slideshow_data');
		$pre_slides = $sharp_slideshow_data['slideshows'][''.$slideShowID]['slides'];
		
		$sources = array();
		$posts_ids = '';
		$pages_ids = '';
		foreach ($pre_slides as $key => $pre_slide){
			if($pre_slide['source_type']=='post') $posts_ids .= $pre_slide['source_id'].',';
			if($pre_slide['source_type']=='page') $pages_ids .= $pre_slide['source_id'].',';
		}
		rtrim($posts_ids,',');
		rtrim($pages_ids,',');
		
		$sources['post'] = $this->get_posts_idexed(array('include'=>$posts_ids));
		$sources['page'] = $this->get_pages_idexed(array('include'=>$pages_ids));

		$slides = array();
		foreach ($pre_slides as $key => $pre_slide) {
			$slides[] = $this->process_slide($pre_slide,$sources[$pre_slide['source_type']][''.$pre_slide['source_id']]);
		}
		return $slides;
		// return array();
	}
	function store_excerpt_length($length) {
		update_option( 'sharp_slideshow_excerpt_length', $length );
		return $length;
	}

	private function get_posts_idexed($args){
		$posts_array = get_posts( $args );
		$result = array();
		foreach ($posts_array as $key => $post) $result[''.$post->ID] = $post;
		return $result;
	}

	private function get_pages_idexed($args){
		$pages_array = get_pages( $args );
		$result = array();
		foreach ($pages_array as $key => $page) $result[''.$page->ID] = $page;
		return $result;
	}

	private function process_slide($pre_slide,$source){
		if($pre_slide['source_type']=='post' || $pre_slide['source_type']=='page'){
			$slide = array_merge($pre_slide,array(
				'title'=>$source->post_title,
				'caption'=> ($pre_slide['settings']['excerpt'] && $source->post_excerpt) ? $source->post_excerpt : wp_kses_post(wp_trim_words( $source->post_content,intval(get_option('sharp_slideshow_excerpt_length')))),
				'link'=>get_permalink($source->ID),
			));
			
			$img_url = get_the_post_thumbnail_url($source->ID,'large');
			if($img_url) $slide['img_url'] = $img_url;
			
			return $slide;
		}
	}

}
