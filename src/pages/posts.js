import React from "react"
import g from "glamorous"
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { rhythm } from "../utils/typography"

import "prismjs/themes/prism.css"

const renderPost = ({node}) => {
return <div key={node.id}>
  <Link to={node.fields.slug} css={{ textDecoration: `none`, color: `inherit` }} >
    <g.H3 marginBottom={rhythm(1 / 4)}>
      <span className="fancy-underline">{node.frontmatter.title}{" "}</span>
      <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
    </g.H3>
    <p>{node.excerpt}</p>
  </Link>
</div>
}

export default ({ data }) => {
  let publishedPosts = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.published)

  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} | I tend to ramble.`} />
      <h1>I tend to ramble.</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {publishedPosts.map(renderPost)}

    </div>
  )
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            published
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
