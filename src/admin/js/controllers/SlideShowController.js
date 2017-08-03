
var instance = null;

class SlideShowController{
	constructor() {
		if(instance!=null) return instance; //Singleton!
		this.refreshCallbackList = [];
	}

	addRefreshCallback = callbackFunc=>{
		this.refreshCallbackList.push(callbackFunc);
		console.log('New refreshCallback',this.refreshCallbackList);
	};

	removeRefreshCallback = callbackFunc=>{
		var index = this.refreshCallbackList.indexOf(callbackFunc);
		this.refreshCallbackList.splice(index,1);
		console.log('Removed refreshCallback',this.refreshCallbackList);
	};

	requestRefresh = ()=>this.refreshCallbackList.forEach(callbackFunc=>callbackFunc());

}

export default new SlideShowController();