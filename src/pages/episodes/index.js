import React, { useEffect, useState } from "react"
import Showcase from "../../components/shared/showcase"
import Hero from "../../components/shared/hero"
import Layout from "../../components/layout"
import Card from "../../components/episode/episodeCard"
import { useEpisodes } from "../../utils/hooks"
import Spinner from "../../components/shared/spinner"

const Index = () => {
  const [page, setPage] = useState(1)
  const { loading, data, hasMore } = useEpisodes(page)
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      hasMore
    ) {
      setPage(prevPage => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasMore])

  return (
    <Layout>
      <Hero />
      {loading ? (
        <section className="bg-[#272b33] h-[calc(100vh-60px)]">
          <Spinner />
        </section>
      ) : (
        <Showcase>
          {data.map(item => (
            <Card key={parseInt(item.id)} {...item} id={parseInt(item.id)}/>
          ))}
        </Showcase>
      )}
    </Layout>
  )
}

export default Index
