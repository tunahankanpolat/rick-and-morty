
import React from 'react'
import Layout from '../../components/layout'
import Episode from '../../components/episode'

export default function handler(req, res) {
  const episodeId = req.params.id
  return(
    <Layout>
      <Episode episodeId={episodeId}/>
    </Layout>)
}

