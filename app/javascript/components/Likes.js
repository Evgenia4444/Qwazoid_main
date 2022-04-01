import React from "react"
import PropTypes from "prop-types"
import Like from 'images/Like.svg'
import Unlike from 'images/Unlike.svg'


const imageLike ={
  like: Like,
  unlike: Unlike
}



class Likes extends React.Component {

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

  render () {
    
    return (
       <div className="like">
        <div onClick={
          () => {
            this.handleClick();
          }
          }>
          <img src={this.addPic()}/>
        </div>
        <p className="like-count">{this.state.likes_count}</p>
      </div>
    );
  }
}

export default Likes
