import React from "react"
import { Link } from 'gatsby'
import CardItem from "../shared/cardItem"
import PropTypes from "prop-types"
import EPISODE_IMAGES from "../../data/episodeImages"
const EpisodeSection = ({ id, name, air_date, episode, characters }) => {
  const headingMaxLength = 23
  const isSmallHeading = name.length > headingMaxLength
  const h2Classes = isSmallHeading
    ? `m-0 p-0 text-4xl font-bold phone:text-xl mobile:text-2xl`
    : `m-0 p-0 text-8xl font-bold phone:text-2xl mobile:text-4xl`
    const image = EPISODE_IMAGES[id - 1] // Adjust for 0-based index
  return (
    <section className="flex flex-row items-stretch justify-center phone:px-0 phone:py-0 bg-[#272b33] h-[calc(100vh-60px)] phone:h-auto mobile:h-auto mobile:flex-col phone:flex-col">
      <div className="flex-2 h-full w-full">
        <img
          src={image}
          alt={name}
          className={"w-full h-full m-0 object-cover object-center opacity-100"}
        />
      </div>

      <div className="flex-3 p-3 text-white flex flex-col  h-full w-full">
        <CardItem>
          <h2 className={h2Classes + "text-whitesmoke mb-5"}>{name}</h2>
        </CardItem>

        <div className="flex flex-row h-full items-center justify-between">
          <div className="flex flex-col flex-2">
            
              <CardItem>
                <span className="m-0 p-0 text-[16px] font-medium text-gray">
                Episode:
                </span>
                <p className="text-whitesmoke">{episode}</p>
              </CardItem>
          
            <CardItem>
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
              Air_date:
              </span>
              <p className="text-whitesmoke">{air_date}</p>
            </CardItem>

            <div className="flex flex-col overflow-hidden mt-5">
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
              Characters:
              </span>
              <div className="overflow-y-auto max-h-40">
                {characters.map(character => (
                  <Link
                    key={character.url.split("/").pop()}
                    className={
                      "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                    }
                    to={"/characters/" + character.url.split("/").pop()}
                  >
                    <p>{character.name}</p>
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

EpisodeSection.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  air_date: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired,
}

export default EpisodeSection
