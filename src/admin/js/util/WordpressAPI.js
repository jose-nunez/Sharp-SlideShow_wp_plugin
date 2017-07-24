import axios from 'axios';

/*
 *	¿SINLGETON? 
 *	 
 */

// var instance = null;

class WP_API{

	constructor(WP_URL='http://joannecrowther.local/'){
		// if(!instance){ instance = this; }

		this.API_URL = WP_URL+'wp-json/wp/v2/';
	}

	request(requestUrl){
		return axios.get(requestUrl).then(
			(resp)=>(resp),
			(err)=>(err)
		);
	}

	getPosts(per_page=10,page=1){
		var requestUrl = this.API_URL+'posts?per_page='+per_page+'&page='+page;
		return this.request(requestUrl);
	}

	getMedia(ids){
		var requestUrl = this.API_URL+'media?include=' + ids.toString();
		return this.request(requestUrl);
	}


}
export default WP_API;