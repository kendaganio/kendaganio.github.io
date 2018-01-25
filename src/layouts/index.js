import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import g from "glamorous"

import './index.css'

const FooterLink = (params) => {
  return <Link to={params.to}>{params.children}</Link>
}

export default ({children, data}) => {
  return <g.Div margin="50px auto" maxWidth="650px" padding="0 15px">
    <Helmet title={data.site.siteMetadata.title}/>
      {children()}
    <hr/>

    <footer>
      <FooterLink to="/">Home</FooterLink>
      <FooterLink to="/cv">CV</FooterLink>
      <FooterLink to="/posts">Blog</FooterLink>
    </footer>

  </g.Div>
}

export const query = graphql `
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
