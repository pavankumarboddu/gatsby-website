import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const Dynamic = () => (
  <Layout>
  
    <h1>DYNAMIC</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default Dynamic
