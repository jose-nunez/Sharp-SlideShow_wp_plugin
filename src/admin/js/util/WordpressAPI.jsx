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

	getPosts(){
		var requestUrl = this.API_URL+'posts';

		return axios.get(requestUrl).then(
			(resp)=>(resp),
			(err)=>{throw new Error(err.response.data.message);}
		);
	}


}
export default new WP_API();