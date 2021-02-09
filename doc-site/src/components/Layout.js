/** @jsx jsx */
import React, {useEffect, useState} from 'react';
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import { ThemeProvider } from 'emotion-theming';
import naturalSort from 'natural-sort';
import {
  themes,
  EzAppLayout,
  EzPage,
  EzNavigation,
  EzPageHeader,
  EzCard,
  EzCardSection,
  EzProvider,
  EzLayout,
  EzSearchInput
} from '@ezcater/recipe';
import { theme as marketplaceTheme } from '@recipe-ui/theme-marketplace';
import './layout.css';
import logo from '../recipe-logo.svg';
import ComponentGrid from './ComponentGrid';
import {SearchProvider} from  '../providers/SearchProvider';

const Layout = ({ name, title, path, children, sections, location, layout }) => (
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
      const { edges: files } = data.allMarkdownRemark || { edges: [] };
      const pages = files.map(({ node }) => node);

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
            active: location.pathname === page.frontmatter.path,
          }))
          .sort((a, b) => naturalSort()(a.label, b.label)),
        partiallyActive: true,
        as: Link,
      }));

      const activeLink = links.find(link => location.pathname.includes(link.to));
      const relatedPages = activeLink ? activeLink.links.map(l => ({ ...l, as: Link })) : [];
      const tabs = relatedPages.length && relatedPages.length < 5 ? relatedPages : undefined;

      const [theme, setTheme] = React.useState(false);
      const isMarketPlace = theme === true;

      const [searchTerm, setSearchTerm] = useState('');

      useEffect(() => {
        setSearchTerm('');
      }, [location.pathname]);

      return (
        <EzProvider theme={isMarketPlace ? marketplaceTheme : undefined}>
          <Helmet
            title={`Recipe - ${title}`}
            meta={[
              { name: 'description', content: 'Recipe Design System' },
              { name: 'keywords', content: 'Recipe Design System EzCater' },
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
              rel="stylesheet"
            />
            <script src="https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.closest%2Csmoothscroll%2CArray.prototype.findIndex" type="text/javascript" />
          </Helmet>
          <ThemeProvider
            theme={{
              ...themes.standard,
              breakpoints: { medium: '768px', large: '1061px', xlarge: '1280px' },
            }}
          >
            <div className={name}>
              <EzAppLayout layout={layout}>
                <EzNavigation
                  home={{
                    to: '/',
                    as: Link,
                    label: 'Recipe',
                    logo: { src: logo, width: 120 },
                  }}
                  links={links}
                  utilityLinks={[
                    { label: `Use ${isMarketPlace ? 'fulfillment' : 'marketplace'} theme`, onClick: () => setTheme(theme => !theme) }
                  ]}
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
                      tabs && { tabs, selected: tabs.find(tab => tab.to === location.pathname) }
                    }
                    actions={
                      <EzLayout
                        layout={{
                          base: 'stack',
                          medium: 'basic',
                        }}
                      >
                        <EzSearchInput
                          placeholder="Search components"
                          aria-label="Search components"
                          value={searchTerm}
                          onChange={e => setSearchTerm(e.target.value)}
                        />
                      </EzLayout>
                    }
                  />
                  <EzPage> 
                    <SearchProvider value={searchTerm}>                
                      <EzCard>
                        {searchTerm
                          ?
                            <ComponentGrid />
                          :
                          children || sections.map((section, i) => (
                            <EzCardSection key={i}>{section}</EzCardSection>
                          ))
                        }
                      </EzCard>
                    </SearchProvider>
                  </EzPage>
                </EzNavigation>
              </EzAppLayout>
            </div>
          </ThemeProvider>
        </EzProvider>
      );
    }}
  />
);

export default Layout;
