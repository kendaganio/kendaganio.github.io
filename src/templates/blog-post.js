import React from "react";
import g from "glamorous"
import Helmet from 'react-helmet';

import './blog.css';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="blog-post">
      <Helmet title={`${data.site.siteMetadata.title} | ${post.frontmatter.title}`} />

      <g.H1 marginBottom="5px">
        <span className="fancy-underline">
          {post.frontmatter.title}
        </span>
      </g.H1>
      <g.Strong color="#1b1d1e">{post.frontmatter.date} | </g.Strong>
      <g.Em color="#BBB"> { post.frontmatter.tags.join(', ') }</g.Em>

      <br/>
      <br/>
      <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
