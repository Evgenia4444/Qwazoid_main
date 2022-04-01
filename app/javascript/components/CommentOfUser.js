import React from "react"
import PropTypes from "prop-types"


class CommentOfUser extends React.Component {
  render () {
    return (
      <div className="comment_container">
        
       <p>{this.props.body}</p>
       
          {this.props.created_at}
        
      </div>
    );
  }
}

export default CommentOfUser 
