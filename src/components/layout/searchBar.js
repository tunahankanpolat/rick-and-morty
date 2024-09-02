import React, { useState } from "react"
import { Link, navigate } from "gatsby"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const handleSearch = e => {
    e.preventDefault()
    navigate("/search/" + query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center phone:flex-col">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <Link
        to={"/search/" + query}
        type="submit"
        className="ml-2 px-4 py-2 bg-primary text-white rounded-lg"
      >
        Search
      </Link>
    </form>
  )
}

export default SearchBar
