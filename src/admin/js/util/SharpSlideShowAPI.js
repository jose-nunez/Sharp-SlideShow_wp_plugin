import axios from 'axios';
import AppSettings from 'appSettings';

let instance = null;

class SharpSlideShow_API{

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

	getSlideShowsIDs = ()=>this.request(AppSettings.API_URL+'slideshowsids');
	getSlideShow = slideShowID=>this.request(AppSettings.API_URL+'slideshow/'+slideShowID);
	getSlides = slideShowID => this.request(AppSettings.API_URL+'slides/'+slideShowID);
}
export default new SharpSlideShow_API();