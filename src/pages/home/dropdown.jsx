import React from "react"
import PropTypes from "prop-types"

const Dropdown = ({ currentValue, setCurrentValue, options, name }) => {
  return (
    <span>
      <label htmlFor={name}>
        {name}
        :&nbsp;
        <select
          id={name}
          value={currentValue}
          onChange={event => {
            setCurrentValue(event.target.value)
          }}
        >
          {options.map(item => {
            return (
              <option value={item} key={`${name}/${item}`}>
                {item}
              </option>
            )
          })}
        </select>
      </label>
    </span>
  )
}

Dropdown.propTypes = {
  currentValue: PropTypes.string.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
}

export default Dropdown
