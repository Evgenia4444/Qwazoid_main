import React from "react"
import PropTypes from "prop-types"
import Post from "./Post.js"
import NextArrow from '../../assets/images/NextArrow.png'



class Posts extends React.Component {

  
  render() {
   

const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

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