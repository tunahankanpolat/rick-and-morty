import React from "react"
import Layout from "../../components/layout"
import Character from "../../components/character"

export default function handler(req, res) {
  const characterId = req.params.id
  return (
    <Layout>
      <Character characterId={parseInt(characterId)} />
    </Layout>
  )
}
