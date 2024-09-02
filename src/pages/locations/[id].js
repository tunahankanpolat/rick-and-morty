
import React from 'react'
import Layout from '../../components/layout'
import Location from '../../components/location'

export default function handler(req, res) {
  const locationId = req.params.id
  console.log("locationId",locationId)
  return(
    <Layout>
      <Location locationId={locationId}/>
    </Layout>)
}

