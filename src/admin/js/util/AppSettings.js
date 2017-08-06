import shortid  from 'shortid';

let instance = null;

class AppSettings{

	constructor(){
		if(!instance) instance = this;

		this.id = shortid.generate();
		this.sourcelists = {
			perPage: 10,
		}

		return instance;
	}

}

export default new AppSettings();