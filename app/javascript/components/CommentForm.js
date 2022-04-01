import React from "react"
import PropTypes from "prop-types"



class CommentForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        content: ''
}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);
    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

    componentDidMount(e) {
        this.setState({
          token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

  render () {
    return (
      <form
      id={'child-comment-'+this.props.parent_id}
      action={'/posts/'+this.props.post_id+'/coments' + "?authenticity_token="+encodeURIComponent(this.state.token)}
      method='post'
      >
        <div className="comment-form">
          
          <A_Input
            type="text"
            name="comment[body]"
            placeholder="Напишите комментарий"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <A_Btn
            type ='submit'
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Отправить"}
          </A_Btn>
        </div>
      </form>
    );
  }
}
export default CommentForm
