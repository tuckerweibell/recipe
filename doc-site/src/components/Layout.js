import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import Link from 'gatsby-link';
import {ThemeProvider} from 'emotion-theming';
import {
  themes,
  EzAppLayout,
  EzPage,
  EzNavigation,
  EzPageHeader,
  EzCard,
  EzCardSection,
} from '@ezcater/recipe';
import './layout.css';

const themeAsObjectNotModule = Object.assign({}, themes.standard);

const Layout = ({name, title, children, sections}) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => {
      const {edges: pages} = data.allMarkdownRemark || {edges: []};

      return (
        <>
          <Helmet title={`Recipe - ${title}`} />
          <ThemeProvider theme={themeAsObjectNotModule}>
            <div className={name}>
              <EzAppLayout>
                <EzNavigation
                  home={{href: '/', label: 'Recipe'}}
                  links={pages.map(({node: component}) => ({
                    to: component.frontmatter.path,
                    label: component.frontmatter.title,
                    as: Link,
                  }))}
                >
                  <EzPageHeader title={title} />
                  <EzPage>
                    <EzCard>
                      {children ||
                        sections.map((section, i) => (
                          <EzCardSection key={i}>{section}</EzCardSection>
                        ))}
                    </EzCard>
                  </EzPage>
                </EzNavigation>
              </EzAppLayout>
            </div>
          </ThemeProvider>
        </>
      );
    }}
  />
);

export default Layout;
