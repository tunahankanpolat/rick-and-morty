import React, { useEffect, useState } from "react"
import Showcase from "../shared/showcase"
import Hero from "../shared/hero"
import { useCharacters } from "../../utils/hooks"
import Card from "../character/characterCard"
import Spinner from "../shared/spinner"

const Home = () => {
  const [page, setPage] = useState(1)
  const { loading, data, hasMore } = useCharacters(page)
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
    <>
      <Hero />
      {loading ? (
        <section className="bg-[#272b33] h-[calc(100vh-60px)]">
          <Spinner />
        </section>
      ) : (
        <Showcase>
          {data.map(item => (
            <Card key={item.id} {...item} id={parseInt(item.id)}/>
          ))}
        </Showcase>
      )}
    </>
  )
}

export default Home
