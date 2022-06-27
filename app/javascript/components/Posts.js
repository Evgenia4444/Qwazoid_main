import React from "react"
import PropTypes from "prop-types"
import Post from "./Post.js"




class Posts extends React.Component {

  
  render() {
   



return(

  <div className="posts_container">
    <div className="posts_container--actions">
      
   <h3>Инопланетяне являются авторами загадочных кругов на полях</h3>
   <a href = "/posts/new">Создать пост</a>
    </div>
    <div className='posts_slider' >
    

       
        {this.props.posts.slice(0, 2).map(post => (
          <Post 
          key = {post.id}
          post = {post}
          />
          ))}
      
        
    </div>
 </div>

)
    
  }
}


Posts.propTypes = {
  posts: PropTypes.array
}
export default Posts