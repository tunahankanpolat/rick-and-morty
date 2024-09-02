import { useEffect, useState } from "react"
import { useSiteMeta } from "./useSiteMeta"

const graphqlQuery = (page, name) => ({
  query: `
    query {
      characters(filter: { name: "${name}" }, page: ${page}) {
        info {
          pages
          count
        }
        results {
          id
          name
          status
          species
          image
          location {
            id
            name
          }
          episode {
            id
            name
          }
        }
      }
      locations(filter: { name: "${name}" }, page: ${page}) {
        info {
          count
          pages
        }
        results {
          id
          name
          type
          dimension
        }
      }
      episodes(filter: { name: "${name}" }, page: ${page}) {
        info {
          count
          pages
        }
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `,
  variables: { page, name },
})

export const useFilter = (page, name) => {
  const { siteUrl } = useSiteMeta()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  
  useEffect(() => {
    setData([]) 
    setLoading(true)
    setHasMore(true)
  }, [name])

  const fetchFromAPI = async () => {
    const res = await fetch(`${siteUrl}/graphql`, {
      method: "POST",
      body: JSON.stringify(graphqlQuery(page, name)),
      headers: {
        "content-type": "application/json",
      },
    }).catch(() => {
      setLoading(false)
    })
    if (res && res.ok) {
      const { data } = await res.json()

      const newCharacters = data.characters.results.map(item => ({
        ...item,
        dataType: "characters",
        url: `${siteUrl}/api/character/${item.id}`,
        episode: {
          name: item.episode[0].name,
          url: `${siteUrl}/api/episode/${item.episode[0].id}`,
        },
        location: {
          name: item.location.name,
          url: `${siteUrl}/api/location/${item.location.id}`,
        },
      }))

      const newLocations = data.locations.results.map(item => ({
        ...item,
        url: `${siteUrl}/api/location/${item.id}`,
        dataType: "locations",
      }))

      const newEpisodes = data.episodes.results.map(item => ({
        ...item,
        url: `${siteUrl}/api/episode/${item.id}`,
        dataType: "episodes",
      }))

      setData(prev => [
        ...prev,
        ...newCharacters,
        ...newLocations,
        ...newEpisodes,
      ])
      setHasMore(
        page < parseInt(data.characters.info.pages) ||
          page < parseInt(data.locations.info.pages) ||
          page < parseInt(data.episodes.info.pages)
      )
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchFromAPI()
  }, [page, name])

  return {
    loading,
    data,
    hasMore,
  }
}
