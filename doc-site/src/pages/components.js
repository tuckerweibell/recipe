import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

export default function Index({data}) {
  const {edges: pages} = data.allMarkdownRemark || {edges: []};
  if (!pages.length) return <div>No Components Found</div>;
  return (
    <Layout>
      {pages.map(({node: component}) => {
        return (
          <div key={component.id}>
            <h2>
              <Link to={component.frontmatter.path}>{component.frontmatter.title}</Link>
            </h2>
          </div>
        );
      })}
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___path]}
      filter: {fileAbsolutePath: {regex: "/components/.*/.*.md$/"}}
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
