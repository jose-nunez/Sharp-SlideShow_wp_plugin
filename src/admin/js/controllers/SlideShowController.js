
var instance = null;

class SlideShowController{
	constructor() {
		if(instance!=null) return instance; //Singleton!
		this.refreshCallbackList = [];
	}

	addRefreshCallback = callbackFunc=>{
		this.refreshCallbackList.push(callbackFunc);
	};

	removeRefreshCallback = callbackFunc=>{
		var index = this.refreshCallbackList.indexOf(callbackFunc);
		if(index>=0){ 
			this.refreshCallbackList.splice(index,1);
			console.log('Removed refreshCallback',this.refreshCallbackList);
		}
	};

	requestRefresh = ()=>this.refreshCallbackList.forEach(callbackFunc=>callbackFunc());

}

export default new SlideShowController();