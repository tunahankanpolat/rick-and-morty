import React from 'react'
import { useSiteMeta } from '../../utils/hooks'
import BackgroundSVG from '../../assets/svg/icon-flat.svg'

const Hero = () => {
  const { title } = useSiteMeta()

  return (
    <section className="flex-center flex-col h-[calc(50vh-60px)] text-center relative phone:px-0 phone:py-0 phone:h-[300px]">
      <h1 className="m-0 text-backBlack font-black z-10 text-[5.625rem] mobile:text-[60px] phone:text-[50px]">
        {title}
      </h1>
      <div className="absolute w-full h-full">
        <BackgroundSVG className="w-full h-full fill-whitesmoke" />
      </div>
    </section>
  )
}

export default Hero
