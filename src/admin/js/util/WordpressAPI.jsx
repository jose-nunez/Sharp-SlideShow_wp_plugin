import axios from 'axios';

/*
 *	SINLGETON 
 *	 
 */

var instance = null;

export default class WP_API{

	constructor(){
		if(!instance){ instance = this; }

		this.holanda = 'hola feo';

		return instance;
	}


}