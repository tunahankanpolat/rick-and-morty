import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CardWrapper, CardItem } from "../shared"

const Card = ({ id, name, type, dimension }) => {
  const headingMaxLength = 23
  const isSmallHeading = name.length > headingMaxLength
  const h2Classes = isSmallHeading
    ? `m-0 p-0 text-xl font-bold`
    : `m-0 p-0 text-2xl font-bold`
  const image = "https://images5.alphacoders.com/633/633151.jpg"
  return (
    <CardWrapper>
      <div className="flex-2 w-full">
        <img
          src={image}
          alt={name}
          className={`w-full h-full m-0 object-cover object-center transition-opacity duration-500 phone:h-[300px] opacity-100`}
        />
      </div>
      <div className="flex-3 relative p-3 text-white flex flex-col ">
        <CardItem className="flex-1">
          <Link
            className={
              "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
            }
            to={"/locations/" + id}
          >
            <p className={h2Classes}>{name}</p>
          </Link>
        </CardItem>

        <CardItem className="flex-1">
          <span className="m-0 p-0 text-[16px] font-medium text-gray">
            Type:
          </span>
          <p className="text-whitesmoke">
            {type}
          </p>
        </CardItem>

        <CardItem className="flex-1">
          <span className="m-0 p-0 text-[16px] font-medium text-gray">
            Dimension:
          </span>
          <p className="text-whitesmoke">
            {dimension}
          </p>
        </CardItem>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
}
export default Card
