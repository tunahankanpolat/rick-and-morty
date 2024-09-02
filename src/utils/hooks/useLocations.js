import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = (page) => ({
  query: `
    query locations($page: Int!) {
      locations(page: $page) {
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
    }
  `,
  variables: { page },
});

export const useLocations = (page) => {
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

      const newLocations = data.locations.results.map((item) => ({
        ...item,
        url: `${siteUrl}/api/location/${item.id}`,
      }));

      setData((prev) => [...prev, ...newLocations]);
      setHasMore(page < parseInt(data.locations.info.pages));
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
