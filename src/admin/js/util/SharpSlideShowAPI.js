import axios from 'axios';

class SharpSlideShow_API{

	constructor(WP_URL='http://joannecrowther.local/'){
		this.API_URL = WP_URL+'wp-json/sharp-slideshow/v1/';
	}

	request(requestUrl){
		return axios.get(requestUrl).then(
			(resp)=>(resp),
			(err)=>(err)
		);
	}

	getSlideShowsIDs(){return this.request(this.API_URL+'slideshowsids');}
	getSlideShow(slideShowID){return this.request(this.API_URL+'slideshow/'+slideShowID);}
	getSlides(slideShowID){return this.request(this.API_URL+'slides/'+slideShowID);}
}
export default SharpSlideShow_API;