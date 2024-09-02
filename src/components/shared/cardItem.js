import React from "react"
import PropTypes from "prop-types"

const CardItem = ({ children, className }) => {
  return (
    <div
      className={
        className +
        " flex flex-col justify-center first:justify-start last:justify-end"
      }
    >
      {children}
    </div>
  )
}

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default CardItem
