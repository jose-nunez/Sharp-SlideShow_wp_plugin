import axios from 'axios';

/*
 *	¿SINLGETON? 
 *	 
 */

// var instance = null;

class WP_API{

	constructor(API_URL){
		// if(!instance){ instance = this; }

		this.API_URL = API_URL;
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