import React from "react"
import PropTypes from "prop-types"

class LoginButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <a href = "/users/sign_out" onClick={this.handleLogoutClick}>Выйти</a>;
      } else {
        button = <a href = "/users/sign_in" onClick={this.handleLoginClick}>Войти</a>;
      }

      return (
        <div>
          <div isLoggedIn={isLoggedIn}></div>
          {button}
        </div>
      );
    }
  }

export default LoginButton