import React from "react"
import { Link } from "gatsby"
import CardItem from "../shared/cardItem"
import PropTypes from "prop-types"

const statusColors = {
  alive: "bg-green",
  dead: "bg-red",
  unknown: "bg-gray",
}

const CharacterSection = ( { image, name, status, species, location, episode, gender, origin }) => {
  const headingMaxLength = 23
  const isSmallHeading = name.length > headingMaxLength
  const h2Classes = isSmallHeading
    ? `m-0 p-0 text-4xl font-bold phone:text-xl mobile:text-2xl`
    : `m-0 p-0 text-8xl font-bold phone:text-2xl mobile:text-4xl`

  return (
    <section className="flex flex-row items-stretch justify-center phone:px-0 phone:py-0 bg-[#272b33] h-[calc(100vh-60px)] phone:h-auto mobile:h-auto mobile:flex-col phone:flex-col">
      <div className="flex-2 h-full">
        <img
          src={image}
          alt={name}
          className={`w-full h-full m-0 object-cover object-center opacity-100`}
        />
      </div>

      <div className="flex-3 p-3 text-white flex flex-col">
        <CardItem>
          <h2 className={h2Classes + "text-whitesmoke mb-5"}>{name}</h2>
          <span className="m-0 p-0 text-[16px] flex items-center capitalize font-medium">
            <span
              className={`w-2 h-2 mr-1.5 rounded-full ${
                statusColors[status.toLowerCase()]
              }`}
            />{" "}
            {status} - {species} ({gender})
          </span>
        </CardItem>

        <div className="flex flex-row h-full items-center justify-between">
          <div className="flex flex-col flex-2">
            {origin.name !== "unknown" && (
              <CardItem>
                <span className="m-0 p-0 text-[16px] font-medium text-gray">
                  Origin location:
                </span>
                <Link
                  className={
                    "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                  }
                  to={"/locations/" + origin.url.split("/").pop()}
                >
                  <p>{origin.name}</p>
                </Link>
              </CardItem>
            )}
            <CardItem>
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

            <CardItem>
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
                First seen in:
              </span>
              <Link
                className={
                  "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                }
                to={"/episodes/" + episode[0].url.split("/").pop()}
              >
                <p>{episode[0].name}</p>
              </Link>
            </CardItem>
            <CardItem>
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
                Last seen in:
              </span>
              <Link
                className={
                  "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                }
                to={"/episodes/" + episode[episode.length - 1].url.split("/").pop()}
              >
                <p>{episode[episode.length - 1].name}</p>
              </Link>
            </CardItem>
            <div className="flex flex-col overflow-hidden mt-5">
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
                All episodes:
              </span>
              <div className="overflow-y-auto max-h-40">
                {episode.map(ep => (
                  <Link
                  key={ep.id}
                  className={
                    "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                  }
                  to={"/episodes/" + ep.url.split("/").pop()}
                >
                  <p>{ep.url.split("/").pop()} - {ep.name}</p>
                </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CharacterSection.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  episode: PropTypes.array.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default CharacterSection
