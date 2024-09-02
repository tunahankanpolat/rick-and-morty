import { useEffect, useState } from 'react';
import { useSiteMeta } from './useSiteMeta';

const graphqlQuery = (page) => ({
  query: `
    query episodes($page: Int!) {
      episodes(page: $page) {
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
  variables: { page },
});

export const useEpisodes = (page) => {
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

      const newEpisodes = data.episodes.results.map((item) => ({
        ...item,
        url: `${siteUrl}/api/episode/${item.id}`,
      }));

      setData((prev) => [...prev, ...newEpisodes]);
      setHasMore(page < parseInt(data.episodes.info.pages));
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
