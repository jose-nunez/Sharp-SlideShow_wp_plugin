import indexArray from 'util';
import WP_API from 'wordpressAPI';
import SharpSlideShow_API from 'sharpSlideShowAPI';

let instance = null;

class SourcesLoader{

	constructor(){
		if(!instance) instance = this;
		return instance;
	}

	
	retreiveSlides = slideShowID=>{
		return SharpSlideShow_API.getSlides(slideShowID).then(
			resp=>({slides:resp.data}),
			err=>{throw err;}
		);
	}

	retreivePosts = (perPage,page)=>{
		return WP_API.getPosts(perPage,page).then(
			resp=>({posts:resp.data,pageCount:parseInt(resp.headers['x-wp-totalpages'])}),
			err=>{throw new Error(err.response.data.message);}
		).then(
			data=>{
				let ids = data.posts
				.filter(post=>post.featured_media?true:false)
				.map((post,index)=>post.featured_media);

				return this.retreiveFeaturedImages(ids).then(
					images=>{
						let indexed_images = indexArray(images,'id');
						return {pageCount:data.pageCount,posts:data.posts,images:indexed_images};
					},
					err=>{throw err}
				);
			},
			err=>{throw err;}
		);
	}
	retreiveFeaturedImages = ids=>{
		return WP_API.getMedia(ids).then(
			resp=>(resp.data),
			err=>{throw new Error(err.response.data.message);}
		);
	}


}

export default new SourcesLoader();
