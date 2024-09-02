import React from "react"
import { Link } from 'gatsby'
import CardItem from "../shared/cardItem"
import PropTypes from "prop-types"

const LocationSection = ({ name, type, dimension, residents }) => {
  const headingMaxLength = 23
  const isSmallHeading = name.length > headingMaxLength
  const h2Classes = isSmallHeading
    ? `m-0 p-0 text-4xl font-bold phone:text-xl mobile:text-2xl`
    : `m-0 p-0 text-8xl font-bold phone:text-2xl mobile:text-4xl`

  const image = "https://images5.alphacoders.com/633/633151.jpg"
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
            {dimension.name !== "unknown" && (
              <CardItem>
                <span className="m-0 p-0 text-[16px] font-medium text-gray">
                  Dimension:
                </span>
                <p className="text-whitesmoke">{dimension}</p>
              </CardItem>
            )}
            <CardItem>
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
                Type:
              </span>
              <p className="text-whitesmoke">{type}</p>
            </CardItem>

            <div className="flex flex-col overflow-hidden mt-5">
              <span className="m-0 p-0 text-[16px] font-medium text-gray">
                Residents:
              </span>
              <div className="overflow-y-auto max-h-40">
                {residents.map(resident => (
                  <Link
                    key={resident.url.split("/").pop()}
                    className={
                      "text-whitesmoke hover:text-primary hover:no-underline cursor-pointer"
                    }
                    to={"/characters/" + resident.url.split("/").pop()}
                  >
                    <p>{resident.name}</p>
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

LocationSection.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residents: PropTypes.array.isRequired,
}

export default LocationSection
