import React, { useEffect, useState } from "react"
import Showcase from "../../components/shared/showcase"
import Hero from "../../components/shared/hero"
import Spinner from "../shared/spinner"
import { useFilter } from "../../utils/hooks"
import CharacterCard from "../character/characterCard"
import LocationCard from "../location/locationCard"
import EpisodeCard from "../episode/episodeCard"
import PropTypes from "prop-types"

const Search = ({ query }) => {
  const [page, setPage] = useState(1)

  const { loading, data, hasMore } = useFilter(page, query)
  console.log("...search index.js...data", data)

  useEffect(() => {
    setPage(1)
  }, [query])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasMore])

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      hasMore
    ) {
      setPage(prevPage => prevPage + 1)
    }
  }
  console.log("...search index.js...data", data)
  return (
    <>
      <Hero />
      {loading ? (
        <section className="bg-[#272b33] h-[calc(100vh-60px)]">
          <Spinner />
        </section>
      ) : (
        <Showcase>
          {data.map(item => {
            switch (item.dataType) {
              case "characters":
                return (
                  <CharacterCard
                    key={item.id + "-C"}
                    {...item}
                    id={parseInt(item.id)}
                  />
                )
              case "locations":
                return (
                  <LocationCard
                    key={item.id + "-L"}
                    {...item}
                    id={parseInt(item.id)}
                  />
                )
              case "episodes":
                return (
                  <EpisodeCard
                    key={item.id + "-E"}
                    {...item}
                    id={parseInt(item.id)}
                  />
                )
              default:
                return null
            }
          })}
        </Showcase>
      )}
    </>
  )
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
}

export default Search
