import React from "react"
import PropTypes from "prop-types"


const STYLES = [
  'btn--main',
  'btn--secondary',
  'btn--admin--white',
  'btn--icons',
  'btn--admin--transp'
]

const STATES = [
  'btn--primary',
  'btn--hover',
  'btn--pressed',
  'btn--disabled'
]

const Btn = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonState
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle : STYLES[0]

  const checkButtonState = STATES.includes(buttonState)
  ? buttonState : STATES[0]

  return(
      <button className = {`btn ${checkButtonStyle} ${checkButtonState}`} onClick = {onClick} type = {type}>
        {children}
      </button>
  )
}

export default Btn
