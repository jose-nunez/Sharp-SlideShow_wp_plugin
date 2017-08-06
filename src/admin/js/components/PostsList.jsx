import React from 'react';
import ReactPaginate from 'react-paginate';
import shortid  from 'shortid';

import WP_API from 'wordpressAPI';
import indexArray from 'util';
import ArrayPostsList from 'arrayPostsList';


var perPage = 10;

export default class PostsList extends React.Component{
	constructor(props) {
		super(props);
		
		this.wp_api = new WP_API(this.props.wp_api_url);
		this.state = {
			posts:[],
			page: 1,
			isLoading:true, //loads on start
		};

		this.retrivingData=null;
	}
	render(){

		return (
			<div className="posts-list">
				<ReactPaginate
					onPageChange={this.handlePageClick}
					pageCount={this.state.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					
					previousLabel={"previous"}
					nextLabel={"next"}
					breakLabel={<a href="">...</a>}
					breakClassName={"break-me"}
					containerClassName={"pagination no-select-all"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"} />
				{this.renderList()}
			</div>
		);
	}
	
	componentDidMount(){
		this.retreiveData();
	}
	
	retreiveData(){
		var processID = shortid.generate();
		this.retrivingData = processID;
		
		this.retreivePosts().then(
			posts=>{
				
				if(this.retrivingData !== processID)return;

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
			err=>{
				if(retrivingData !== processID) return; 
				throw err;
			}
		)
	}

	retreivePosts(){
		return this.wp_api.getPosts(perPage,this.state.page).then(
			resp=>{
				this.setState({pageCount:parseInt(resp.headers['x-wp-totalpages'])});
				return resp.data
			},
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
			return <span className="spinner block is-active"></span>;
		}
		else{
			return (
				<ArrayPostsList posts={this.state.posts} images={this.state.images}  />
			);
		}
	}

	handlePageClick = (data) => {
		let page = data.selected+1;

		this.setState({page:page,isLoading:true,posts:[]}, () => {
			this.retreiveData();
		});
	};

}