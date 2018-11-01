import React from 'react';
import Link from 'gatsby-link';

export default function Index({data}) {
  const {edges: pages} = data.allMarkdownRemark || {edges: []};
  if (!pages.length) return <div>No Components Found</div>;
  return (
    <div>
      {pages.map(({node: component}) => {
        return (
          <div key={component.id}>
            <h2>
              <Link to={component.frontmatter.path}>{component.frontmatter.title}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___path] },
      filter: {fileAbsolutePath: {regex: "/components/.*/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
