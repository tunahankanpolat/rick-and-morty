import React from "react"
import Layout from "../../components/layout"
import Search from "../../components/search"

export default function handler(req, res) {
  const query = req.params.query
  return (
    <Layout>
      <Search query={query}/>
    </Layout>
  )
}
