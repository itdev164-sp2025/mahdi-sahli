import React from "react"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to {title}!</p>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
