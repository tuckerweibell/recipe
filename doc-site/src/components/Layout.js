import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import Link from 'gatsby-link';
import {ThemeProvider} from 'emotion-theming';
import naturalSort from 'natural-sort';
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
import logo from '../recipe-logo.svg';

const Layout = ({name, title, path, children, sections, location, layout}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___path]}) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                path
                order
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {edges: files} = data.allMarkdownRemark || {edges: []};
      const pages = files.map(({node}) => node);

      const topLevel = pages
        .filter(p => Boolean(p.frontmatter.order))
        .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

      const links = topLevel.map(page => ({
        to: page.frontmatter.path,
        label: page.frontmatter.title,
        links: pages
          .filter(
            p =>
              p.frontmatter &&
              p.frontmatter.path &&
              p.frontmatter.path.includes(page.frontmatter.path) &&
              p.frontmatter.path !== page.frontmatter.path &&
              !p.frontmatter.path.includes('components') &&
              !p.frontmatter.path.includes('cookbook')
          )
          .map(page => ({
            to: page.frontmatter.path,
            label: page.frontmatter.title,
            as: Link,
          }))
          .sort((a, b) => naturalSort()(a.label, b.label)),
        partiallyActive: true,
        as: Link,
      }));

      const activeLink = links.find(link => location.pathname.includes(link.to));
      const relatedPages = activeLink ? activeLink.links.map(l => ({...l, as: Link})) : [];
      const tabs = relatedPages.length && relatedPages.length < 5 ? relatedPages : undefined;

      return (
        <>
          <Helmet
            title={`Recipe - ${title}`}
            meta={[
              {name: 'description', content: 'Recipe Design System'},
              {name: 'keywords', content: 'Recipe Design System EzCater'},
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
              rel="stylesheet"
            />
          </Helmet>
          <ThemeProvider
            theme={{
              ...themes.standard,
              breakpoints: {medium: '768px', large: '1061px', xlarge: '1280px'},
            }}
          >
            <div className={name}>
              <EzAppLayout layout={layout}>
                <EzNavigation
                  home={{
                    to: '/',
                    as: Link,
                    label: 'Recipe',
                    logo: {src: logo, width: 120},
                  }}
                  links={links}
                >
                  <EzPageHeader
                    title={title}
                    breadcrumb={
                      path.includes('/components/')
                        ? {
                            as: Link,
                            to: '/components',
                            label: 'Back to Components',
                          }
                        : undefined
                    }
                    subnav={
                      tabs && {tabs, selected: tabs.find(tab => tab.to === location.pathname)}
                    }
                  />
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
