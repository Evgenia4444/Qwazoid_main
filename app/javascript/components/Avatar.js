import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Avatar.scss'



class Avatar extends React.Component {
  render () {
    let userpicksrc = '';

    if (!this.props.user.userpick.url) {
      userpicksrc = '';
    }  else {
      userpicksrc = this.props.user.userpick.url;
    }

    let avatarStyle = {
      backgroundImage: `url(${userpicksrc})`
    };



    return (
      <div className = 'avatar'>
        <div style={avatarStyle}></div>
      </div>
    );
  }
}

export default Avatar
