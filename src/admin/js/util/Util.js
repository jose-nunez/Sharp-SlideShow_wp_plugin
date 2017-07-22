
/*export default {
	indexArray: (array,index_attr)=>{
		let result = {};
		for (let i=0; i<array.length;i++) {
		  result[array[i].index_attr] = array[i];
		}
		return result;
	},
}*/

export default (array,index_attr)=>{
	let result = {};
	for (let i=0; i<array.length;i++) {
	  result[array[i][index_attr]] = array[i];
	}
	return result;
}