import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const Commerce = () => (
  <Layout>
  
    <h1>Commerce</h1>
    <p>Welcome to ABOUT.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default Commerce