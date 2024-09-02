import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"

import { useRickAndMortyStats, useSiteMeta } from "../../utils/hooks"
import Netlify from "../../assets/svg/netlify-light.svg"
import Stellate from "../../assets/svg/stellate-light.svg"

const Stats = () => {
  const stats = useRickAndMortyStats()
  return (
    <ul className="flex justify-center items-center flex-wrap w-full m-0 p-0">
      {Object.keys(stats).map(endpoint => (
        <li key={endpoint} className="m-0 [&+li]:ml-[6]">
          <Link
            className="text-gray border-b-0 "
            to={`/${endpoint.toLowerCase()}`}
            title={endpoint}
          >
            <span
              className={`mx-2 my-1 text-xs text-center font-bold uppercase hover:text-primary`}
            >
              {endpoint}: {stats[endpoint].info.count}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Copyright = () => {
  const { author } = useSiteMeta()

  return (
    <div className="text-xs mt-5">
      <span>
        ❮❯ by{" "}
        <a
          href={author.site}
          className="font-bold transition-colors duration-200 text-whitesmoke border-b border-solid border-primary hover:text-primary hover:border-b-0"
        >
          {author.name}
        </a>
      </span>
      <span> {new Date().getFullYear()}</span>
    </div>
  )
}

const Icons = () => {
  const { github, userLinkedin } = useSiteMeta()

  const footerLinks = [
    { to: github.api, Icon: FaGithub, title: "GitHub" },
    {
      to: `https://tr.linkedin.com/in/${userLinkedin}`,
      Icon: FaLinkedinIn,
      title: "Linkedin",
    },
  ]

  return (
    <ul className="flex justify-center items-center flex-wrap w-full m-0 mt-5 p-0">
      {footerLinks.map(({ to, title, Icon }) => (
        <li key={to} className="m-0 [&+li]:ml-6">
          <Link to={to} title={title} aria-label={title.toLocaleLowerCase()}>
            <Icon className="text-gray border-b-0 hover:text-primary align-middle" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Logos = () => {
  const data = [
    {
      to: "https://www.netlify.com",
      Svg: Netlify,
      props: { className: "mr-8", "aria-label": "Netlify" },
    },
    {
      to: "https://stellate.co/?ref=powered-by",
      Svg: Stellate,
      props: { "aria-label": "Stellate" },
    },
  ]
  return (
    <div className="flex justify-center item-center mt-5">
      {data.map(({ to, Svg, props }) => (
        <Link key={to} to={to} {...props}>
          <Svg />
        </Link>
      ))}
    </div>
  )
}

const Footer = () => (
  <footer className="flex justify-center flex-col flex-wrap items-center bg-backBlack text-gray py-[72px] min-h-nav2x w-full relative">
    <Stats />
    <Logos />
    <Icons />
    <Copyright />
  </footer>
)

export default Footer
