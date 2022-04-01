import React from "react"
import PropTypes from "prop-types"
import Saved from "../../assets/images/saved.svg"
import Unsaved from "../../assets/images/unsaved.svg"
import '../../assets/stylesheets/likes.scss' 

const imageSave ={
  fav: Saved,
  unfav: Unsaved
}

class A_Favorites extends React.Component {

  constructor(props) {
      super(props);
      this.state={
        favorites_count: this.props.favorites ? this.props.favorites.length : 0,
        pre_favorite: this.props.favorites ? this.props.favorites.find((element, index, array) => {return element.user_id == this.props.current_user_id}) : null
      }
}



  componentDidMount(e) {
      this.setState({
        token: document.querySelector('meta[name="csrf-token"]').content
      })
  }

  handleClick = () => {
let requestOption = {method: ''}
if(this.state.pre_favorite) {
  requestOption.method = 'DELETE';
  this.setState({
    favorites_count:  this.state.favorites_count-1
  });
}
  else {requestOption.method = 'POST';
  this.setState({
    favorites_count: this.state.favorites_count+1
  });
}

let requestUrl = "/posts/"+this.props.post.id+"/favorites";
if(this.state.pre_favorite) requestUrl+="/"+this.state.pre_favorite.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);


  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
    this.setState({
      pre_favorite: result})
  });
}

addPic = () => this.state.pre_favorite ? imageSave.fav : imageSave.unfav

  render () {
    return (
      <div className="other_actions">
       
          <img 
          onClick={
            () => {
              this.handleClick();
            }
            }
            src={this.addPic()}/>
       
        <p className="fav-count">{this.state.favorites_count}</p>
      </div>
    );

  }
}
export default A_Favorites
