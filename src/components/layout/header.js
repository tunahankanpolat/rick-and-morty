import React from "react"
import { Link } from "gatsby"
import SearchBar from "./searchBar"
import HomeIcon from "../../assets/svg/icon.svg"
import { useSiteMeta } from "../../utils/hooks"

const PrimaryNav = () => {
  const { nav } = useSiteMeta()

  return (
    <ul className="flex justify-center items-center p-0 m-0 flex-wrap phone:flex-col">
      {nav.map(({ path, title }) => (
        <li key={path} className="m-0 mr-7 last:mr-0">
          <Link
            to={path}
            className="text-black border-none transition-all duration-100 font-bold"
            activeClassName="text-primary"
          >
            {title}
          </Link>
        </li>
      ))}
      <li className="m-0 mr-7 last:mr-0">
        <SearchBar />
      </li>
    </ul>
  )
}

const Header = () => {
  return (
    <header
      className={`flex justify-center items-center h-nav bg-white border-b border-solid phone:border-b-0 border-transparent relative z-20 w-full mobile:h-auto mobile:flex-col phone:h-auto phone:flex-col`}
    >
      <nav className="flex justify-between items-center w-full min-h-nav mx-auto px-6 phone:border-b phone:border-solid phone:border-lightgray">
        <Link
          to="/"
          aria-label="home page"
          className="flex items-center justify-center text-black border-none transition-all duration-100 hover:text-primary"
          activeClassName="text-primary"
        >
          <HomeIcon className="fill-black" />
        </Link>
        <PrimaryNav />
      </nav>
    </header>
  )
}

export default Header
