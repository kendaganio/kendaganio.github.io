import React from "react";

export default ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>This is really cool.</p>
  </div>
)

export const query = graphql `
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
