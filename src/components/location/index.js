import React from "react"
import LocationSection from "./locationSection"
import Spinner from "../shared/spinner"
import { useLocationById } from "../../utils/hooks"
import PropTypes from "prop-types"

const Location = ({ locationId }) => {
  const { loading, location } = useLocationById(locationId)
  console.log("location", location)
  return (
    loading ? (
      <section className="bg-[#272b33] h-[calc(100vh-60px)]">
        <Spinner />
      </section>
    ) : (
        <LocationSection {...location}/>
    )
  );
}

Location.propTypes = {
  locationId: PropTypes.number.isRequired,
}

export default Location
