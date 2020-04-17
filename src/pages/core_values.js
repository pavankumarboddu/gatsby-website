import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const core_values = () => (
  <Layout>
  
    <h1>core values</h1>
    <p>Welcome to CORE VALUES</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default core_values