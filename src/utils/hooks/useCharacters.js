import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = (page) => ({
  query: `
    query characters($page: Int!) {
      characters(page: $page) {
        info {
          count
          pages
        }
        results {
          id
          name
          status
          species
          image
          episode {
            name
            id
          }
          location {
            name
            id
          }
        }
      }
    }
  `,
  variables: { page },
});

export const useCharacters = (page) => {
  const { siteUrl } = useSiteMeta();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchFromAPI = async () => {
    const res = await fetch(`${siteUrl}/graphql`, {
      method: 'POST',
      body: JSON.stringify(graphqlQuery(page)),
      headers: {
        'content-type': 'application/json',
      },
    }).catch(() => {
      setLoading(false);
    });

    if (res && res.ok) {
      const { data } = await res.json();

      const newCharacters = data.characters.results.map((item) => ({
        ...item,
        url: `${siteUrl}/api/character/${item.id}`,
        episode: {
          name: item.episode[0].name,
          url: `${siteUrl}/api/episode/${item.episode[0].id}`,
        },
        location: {
          name: item.location.name,
          url: `${siteUrl}/api/location/${item.location.id}`,
        },
      }));

      setData((prev) => [...prev, ...newCharacters]);
      setHasMore(page < parseInt(data.characters.info.pages));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFromAPI();
  }, [page]);

  return {
    loading,
    data,
    hasMore,
  };
};
