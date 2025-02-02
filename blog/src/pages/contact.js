import React from "react"
import { graphql } from "gatsby"

const Contact = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Name: {name}</p>
      <p>Company: {company}</p>
      <p>Address: {address}</p>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`

export default Contact
