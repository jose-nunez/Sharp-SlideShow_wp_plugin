import axios from 'axios';
import AppSettings from 'appSettings';

let instance = null;

class WP_API{

	constructor(){
		if(!instance) instance = this;
		return instance;
	}

	request(requestUrl){
		return axios.get(requestUrl).then(
			(resp)=>(resp),
			(err)=>(err)
		);
	}

	getPosts = (per_page=10,page=1)=>this.request(AppSettings.WP_API_URL+'posts?per_page='+per_page+'&page='+page);
	getMedia = ids=>this.request(AppSettings.WP_API_URL+'media?include=' + ids.toString());

}
export default new WP_API();