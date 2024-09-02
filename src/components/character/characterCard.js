import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CardWrapper, CardItem } from "../shared"
const statusColors = {
  alive: "bg-green",
  dead: "bg-red",
  unknown: "bg-gray",
}

const Card = ({ image, name, url, status, species, location, episode }) => {
  const headingMaxLength = 23
  const isSmallHeading = name.length > headingMaxLength
  const h2Classes = isSmallHeading
    ? `m-0 p-0 text-xl font-bold`
    : `m-0 p-0 text-2xl font-bold`

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
            to={"/characters/" + url.split("/").pop()}
          >
            <h2 className={h2Classes}>{name}</h2>
          </Link>
          <span className="m-0 p-0 text-[16px] flex items-center capitalize font-medium">
            <span
              className={`w-2 h-2 mr-1.5 rounded-full ${
                statusColors[status.toLowerCase()]
              }`}
            />{" "}
            {status} - {species}
          </span>
        </CardItem>

        <CardItem className="flex-1">
          <span className="m-0 p-0 text-[16px] font-medium text-gray">
            Last known location:
          </span>
          <Link
            className={
              "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
            }
            to={"/locations/" + location.url.split("/").pop()}
          >
            <p>{location.name}</p>
          </Link>
        </CardItem>

        <CardItem className="flex-1">
          <span className="m-0 p-0 text-[16px] font-medium text-gray">
            First seen in:
          </span>
          <Link
            className={
              "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
            }
            to={"/episodes/" + episode.url.split("/").pop()}
          >
            <p>{episode.name}</p>
          </Link>
        </CardItem>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  episode: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default Card
