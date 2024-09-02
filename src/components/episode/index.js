import React from "react"
import EpisodeSection from "./episodeSection"
import Spinner from "../shared/spinner"
import { useEpisodeById } from "../../utils/hooks"
import PropTypes from "prop-types"

const Episode = ({ episodeId }) => {
  const { loading, episode } = useEpisodeById(episodeId)
  console.log("episode", episode)
  return (
    loading ? (
      <section className="bg-[#272b33] h-[calc(100vh-60px)]">
        <Spinner />
      </section>
    ) : (
        <EpisodeSection {...episode}/>
    )
  );
}

Episode.propTypes = {
  episodeId: PropTypes.number.isRequired,
}

export default Episode
