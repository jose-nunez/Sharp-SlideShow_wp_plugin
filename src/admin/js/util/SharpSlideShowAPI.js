import axios from 'axios';
import AppSettings from 'appSettings';

let instance = null;

class SharpSlideShow_API{

	constructor(){
		if(!instance) instance = this;
		return instance;
	}

	request(requestUrl,args){
		if(args) return axios.post(requestUrl,args).then((resp)=>(resp),(err)=>(err));
		else return axios.get(requestUrl).then((resp)=>(resp),(err)=>(err));
	}

	getSlideShowsIDs = ()=>this.request(AppSettings.API_URL+'slideshowsids');
	getSlideShow = slideShowID=>this.request(AppSettings.API_URL+'slideshow/'+slideShowID);
	getSlides = slideShowID => this.request(AppSettings.API_URL+'slides/'+slideShowID);
	removeSlide = (slideShowID,slideID)=>this.request(AppSettings.API_URL+'removeSlide',{slideShowID:slideShowID,slideID:slideID});
	addSlide = (slideShowID,slide)=>this.request(AppSettings.API_URL+'addSlide',{slideShowID:slideShowID,slide:slide});
}
export default new SharpSlideShow_API();