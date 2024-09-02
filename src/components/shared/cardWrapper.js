import React from "react"
import PropTypes from "prop-types"

const CardWrapper = ({ children }) => {
  return (
    <article className="w-[600px] h-[220px] flex overflow-hidden bg-[#3c3e44] rounded-lg m-3 shadow-md phone:flex-col phone:h-auto phone:w-full">
      {children}
    </article>
  )
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardWrapper
