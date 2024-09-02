import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = characterId => ({
  query: `
      query character($id: ID!) {
        character(id: $id) {
          id
          name
          status
          species
          image
          gender
          episode {
            name
            id
          }
          location {
            name
            id
          }
          origin {
            name
            id
          }
        }
      }
    `,
  variables: { id: characterId },
})

export const useCharacterById = characterId => {
  const { siteUrl } = useSiteMeta()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchFromAPI = async () => {
    const res = await fetch(`${siteUrl}/graphql`, {
      method: "POST",
      body: JSON.stringify(graphqlQuery(characterId)),
      headers: {
        "content-type": "application/json",
      },
    }).catch(() => {
      setLoading(false)
    })

    if (res && res.ok) {
      const { data } = await res.json()
      if (!data.character) {
        window.location.href = '/404' // Redirect to 404 page
        return
      }
      const characterData = {
        ...data.character,
        url: `${siteUrl}/api/character/${data.character.id}`,
        episode: data.character.episode.map(episode => ({
          name: episode.name,
          url: `${siteUrl}/api/episode/${episode.id}`,
        })),
        location: {
          name: data.character.location.name,
          url: `${siteUrl}/api/location/${data.character.location.id}`,
        },
        origin: {
          name: data.character.origin.name,
          url: `${siteUrl}/api/location/${data.character.origin.id}`,
        }
      }

      setCharacter(characterData)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (characterId) {
      fetchFromAPI()
    }
  }, [characterId])

  return {
    loading,
    character,
  }
}
