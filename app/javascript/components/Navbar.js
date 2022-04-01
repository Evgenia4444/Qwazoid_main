import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Navbar.css'



function Navbar(props) {

  function handleClick() {
    console.log('значение this:', this);
  }

  
    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    return (
      <button onClick={props.onClick} className='navbar_action'>
      Войти
    </button>
  )
  
}


export default Navbar