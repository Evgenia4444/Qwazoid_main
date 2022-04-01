import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Post.scss'

const PostContent = ({
text
}) => {
    return (
      
        <p dangerouslySetInnerHTML={{__html: `${text}` }}></p>
     
    );
}

export default PostContent