import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import g from "glamorous"

import './index.css'

const FooterLink = (params) => {
  return <Link to={params.to}>{params.children}</Link>
}

export default ({children, data}) => {
  return <section className="section">
    <Helmet title={data.site.siteMetadata.title}/>

    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        {children()}

        <footer>
          <hr/>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/cv">CV</FooterLink>
          <FooterLink to="/posts">Blog</FooterLink>
        </footer>
      </div>
    </div>


  </section>
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
