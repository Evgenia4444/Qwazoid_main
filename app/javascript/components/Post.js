import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Post.scss'
import PostContent from "./PostContent.js";


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      likes_count: this.props.likes ? this.props.likes.length : 0,
      pre_like: this.props.likes ? this.props.likes.find((element, index, array) => {return element.user_id == this.props.current_user_id}) : null
    }
}




componentDidMount(e) {
  this.setState({
    token: document.querySelector('meta[name="csrf-token"]').content
  })
}


handleClick = () => {
let requestOption = {method: ''}
if(this.state.pre_like) {
requestOption.method = 'DELETE';
this.setState({
likes_count:  this.state.likes_count-1
});
}
else {requestOption.method = 'POST';
this.setState({
likes_count:  this.state.likes_count+1
});
}


let requestUrl = "/posts/"+this.props.post.id+"/likes";
if(this.state.pre_like) requestUrl+="/"+this.state.pre_like.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);



fetch(requestUrl, requestOption).then((response) => {
return response.json();
}).then((result) => {
this.setState({
  pre_like: result})
});
}


addPic = () => this.state.pre_like ? imageLike.like : imageLike.unlike


  render() {

   
    let imgsrc = '';

    if (!this.props.post.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.post.image.url;
    }

    let postStyle = {
      backgroundImage: `url(${imgsrc})`
    };


    
    return (
      <div className="post">
       <div className="user_info">
         {this.props.post.user_id}
       </div>
       <p>{this.props.post.category_id}</p>
       <PostContent text = {this.props.post.content} />
       <div className="post_actions">
       <p>{this.state.likes_count}</p>
         </div>

      </div>

   
    );
  }
}



export default Post