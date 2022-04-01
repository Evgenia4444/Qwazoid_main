import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Post.scss'
import PostContent from "./PostContent.js";
import A_Like from "./A_Like";
import A_Favorites from "./A_Favorites";

class PostFull extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      likes_count: this.props.likes ? this.props.likes.length : 0,
      pre_like: this.props.likes ? this.props.likes.find((element, index, array) => {return element.user_id == this.props.current_user_id}) : null
    }
}

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
      <div className="postfull">
        
       <div className="user_info">
         {this.props.username}
       </div>

       <p>{this.props.category.name}</p>
       <PostContent text = {this.props.post.content} />
       <div className="post_actions">

          

          <A_Favorites
                  post = {this.props.post}
                  favorites = {this.props.favorites}
                  current_user_id = {this.props.current_user_id}
                  />
         
       

          <A_Like 
            post = {this.props.post}
            likes = {this.props.likes}
            current_user_id = {this.props.current_user_id}
          />
       
         
         </div>
      </div>
  
    );
  }
}



export default PostFull