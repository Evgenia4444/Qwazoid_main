import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'input--main',
  'input--search',
  'input--wide',
  'input--image',
  'input--image-user'
]

const Input = ({
  type,
  value,
  onChange,
  inputStyle,
  placeholder,
  inputSize,
  textChild
}) => {

  const checkInputStyle = STYLES.includes(inputStyle)
  ? inputStyle : STYLES[0]

  return(
    <div className="input-total">
      <label className="input-label">{textChild}</label>
      <input className = {`input ${checkInputStyle}`} type = {type} value={value} onChange={onChange} placeholder={placeholder}>
        {}
      </input>
      

    </div>
  )
}
export default Input
