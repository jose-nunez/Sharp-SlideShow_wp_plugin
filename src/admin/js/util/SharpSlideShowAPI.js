import axios from 'axios';

class SharpSlideShow_API{

	constructor(WP_URL='http://joannecrowther.local/'){
		// if(!instance){ instance = this; }

		this.API_URL = WP_URL+'wp-json/sharp-slideshow/v1/';
	}

	request(requestUrl){
		return axios.get(requestUrl).then(
			(resp)=>(resp),
			(err)=>(err)
		);
	}

	getSlideShow(){
		var requestUrl = this.API_URL+'slideshow';
		return this.request(requestUrl);
	}
}
export default SharpSlideShow_API;