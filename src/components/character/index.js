import React from "react"
import CharacterSection from "./characterSection"
import { useCharacterById } from "../../utils/hooks"
import Spinner from "../shared/spinner"
import PropTypes from "prop-types"

const Character = ({ characterId }) => {
  const { loading, character } = useCharacterById(characterId)
  console.log("character", character)
  return loading ? (
    <section className="bg-[#272b33] h-[calc(100vh-60px)]">
      <Spinner />
    </section>
  ) : (
    <CharacterSection {...character} />
  )
}

Character.propTypes = {
  characterId: PropTypes.number.isRequired,
}

export default Character
