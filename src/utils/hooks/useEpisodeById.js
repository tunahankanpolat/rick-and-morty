import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = episodeId => ({
  query: `
      query episode($id: ID!) {
        episode(id: $id) {
          id
          name
          air_date
          episode
          characters {
            name
            id
          }
        }
      }
    `,
  variables: { id: episodeId },
})

export const useEpisodeById = episodeId => {
  const { siteUrl } = useSiteMeta()
  const [episode, setEpisode] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchFromAPI = async () => {
    const res = await fetch(`${siteUrl}/graphql`, {
      method: "POST",
      body: JSON.stringify(graphqlQuery(episodeId)),
      headers: {
        "content-type": "application/json",
      },
    }).catch((err) => {
        console.log(err)
      setLoading(false)
    })
    console.log(res)
    if (res && res.ok) {
      const { data } = await res.json()
      if (!data.episode) {
        window.location.href = '/404' // Redirect to 404 page
        return
      }
      const episodeData = {
        ...data.episode,
        url: `${siteUrl}/api/episode/${data.episode.id}`,
        characters: data.episode.characters.map(character => ({
          name: character.name,
          url: `${siteUrl}/api/character/${character.id}`,
        })),
      }

      setEpisode(episodeData)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (episodeId) {
      fetchFromAPI()
    }
  }, [episodeId])

  return {
    loading,
    episode,
  }
}
