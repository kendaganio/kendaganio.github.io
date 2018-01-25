import React from "react";
import g from "glamorous"

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post)

  return (
    <div className="blog-post">
      <g.H1 marginBottom="5px" className="fancy-underline">{post.frontmatter.title}</g.H1>
      <g.Strong color="#1b1d1e">{post.frontmatter.date} | </g.Strong>
      <g.Em color="#BBB"> { post.frontmatter.tags.join(', ') }</g.Em>

      <br/>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
  }
`;
