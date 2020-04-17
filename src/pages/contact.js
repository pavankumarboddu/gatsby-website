import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const Contact = () => (
  <Layout>
  
    <h1>Contact</h1>
    <p>Welcome to CONTACT</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default Contact