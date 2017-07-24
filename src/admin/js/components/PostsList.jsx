import React from 'react';

import WP_API from 'wordpressAPI';
import indexArray from 'util';
import ArrayPostsList from 'arrayPostsList';

export default class PostsList extends React.Component{
	constructor(props) {
		super(props);Object.keys(this).forEach(index=>{if(React.Component[index]==undefined && this[index] instanceof Function){this[index] = this[index].bind(this);}});
		
		this.wp_api = new WP_API();
		this.state = {
			posts:[],
			isLoading:true, //loads on start
		};
	}
	render(){

		return (
			<div>
				<input type="text" placeholder="Search"/>
				{this.renderList()}
			</div>
		);
	}
	
	componentDidMount(){
		this.retreiveData();
	}
	
	retreiveData(){

		this.retreivePosts().then(
			posts=>{
				let ids = posts.
				filter(
					post=>(post.featured_media?true:false)
				).map(
					(post,index)=>(post.featured_media)
				);

				this.retreiveFeaturedImages(ids).then(
					images=>{
						let indexed_images = indexArray(images,'id');
						this.setState({posts:posts,images:indexed_images,isLoading:false});
					},
					err=>{throw err}
				);
			},
			err=>{throw err}
		)
	}

	retreivePosts(){
		return this.wp_api.getPosts().then(
			resp=>(resp.data),
			err=>{throw new Error(err.response.data.message);}
		);
	}

	retreiveFeaturedImages(ids){
		return this.wp_api.getMedia(ids).then(
			resp=>(resp.data),
			err=>{throw new Error(err.response.data.message);}
		);
	}

	renderList(){

		if(this.state.isLoading){
			return <h2>Cargando mierda!</h2>;
		}
		else{
			return <ArrayPostsList posts={this.state.posts} images={this.state.images}  />;
		}
	}

}