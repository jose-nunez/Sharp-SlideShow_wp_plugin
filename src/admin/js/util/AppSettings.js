import shortid  from 'shortid';

let instance = null;

class AppSettings{

	constructor(){
		if(!instance) instance = this;

		this.API_URL=null;
		this.WP_API_URL=null;
		this.sourcelists = {
			perPage: 10,
		}

		return instance;
	}

}

export default new AppSettings();