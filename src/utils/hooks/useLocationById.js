import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = locationId => ({
  query: `
      query location($id: ID!) {
        location(id: $id) {
          id
          name
          type
          dimension
          residents {
            name
            id
          }
        }
      }
    `,
  variables: { id: locationId },
})

export const useLocationById = locationId => {
  const { siteUrl } = useSiteMeta()
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchFromAPI = async () => {
    const res = await fetch(`${siteUrl}/graphql`, {
      method: "POST",
      body: JSON.stringify(graphqlQuery(locationId)),
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
      if (!data.location) {
        window.location.href = '/404' // Redirect to 404 page
        return
      }
      const locationData = {
        ...data.location,
        url: `${siteUrl}/api/location/${data.location.id}`,
        residents: data.location.residents.map(resident => ({
          name: resident.name,
          url: `${siteUrl}/api/character/${resident.id}`,
        })),
      }

      setLocation(locationData)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (locationId) {
      fetchFromAPI()
    }
  }, [locationId])

  return {
    loading,
    location,
  }
}
