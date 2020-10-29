/** @jsx jsx */
import React from 'react';
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
  EzButton,
  EzCard,
  EzCardSection,
  EzProvider,
} from '@ezcater/recipe';
import { theme as marketplaceTheme } from '@recipe/theme-marketplace';
import './layout.css';
import logo from '../recipe-logo.svg';

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
                >
                  <div title={`Switch to ${isMarketPlace ? 'fulfillment' : 'marketplace'}`}
                    css={{
                      position: 'absolute',
                      right: 16,
                      top: 100,
                      [`@media (min-width: 768px)`]: {
                        right: 32,
                      },
                      [`@media (min-width: 1061px)`]: {
                        top: 16,
                      },
                    }}>
                    <EzButton
                      use="secondary"
                      aria-label={`Switch to ${isMarketPlace ? 'fulfillment' : 'marketplace'}`}
                      onClick={() => setTheme(theme => !theme)}
                    >
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        style={{ margin: '0 -8px -2px' }}>
                        <path
                          d={
                            isMarketPlace
                              ? "M13.51 8.89h44.473c7.899 0 10.885 1.074 15.247 5.368l.248.247c.66.66 3.306 3.951 7.695 9.522l3.762 4.788 5.704 7.296 2.15 2.762.256.319c.204.262.46.607.753 1.03a31.732 31.732 0 012.103 3.49c1.848 3.56 2.996 7.34 3.092 11.222l.007.53v13.552a2.58 2.58 0 01-5.155.163l-.005-.163V55.464c0-3.143-.94-6.33-2.519-9.374a26.6 26.6 0 00-1.759-2.922l-.245-.346a15.9 15.9 0 00-.397-.528l-6.42-8.22-5.978-7.612c-3.764-4.769-6.268-7.883-6.694-8.31l-.41-.405c-3.014-2.935-4.747-3.616-10.277-3.69l-1.158-.007H13.51c-4.395 0-7.243 2.74-7.358 6.593l-.003.242-.028 48.132a2.58 2.58 0 01-5.155.16l-.005-.163.028-48.13c0-6.733 5.037-11.838 12.19-11.99l.331-.004zm44.284 8.688a2.58 2.58 0 012.575 2.417l.005.163v27.27h25.642a2.58 2.58 0 012.575 2.417l.005.163a2.58 2.58 0 01-2.417 2.575l-.163.005H57.794a2.58 2.58 0 01-2.575-2.416l-.005-.164v-29.85a2.58 2.58 0 012.58-2.58zm18.314 46.749c6.5 0 11.914 4.637 13.116 10.786h7.196a2.58 2.58 0 01.163 5.155l-.163.005h-7.196c-1.202 6.147-6.617 10.784-13.116 10.784-6.498 0-11.914-4.637-13.117-10.784H35.6c-1.203 6.146-6.62 10.784-13.117 10.784-6.499 0-11.915-4.637-13.117-10.784H3.54a2.58 2.58 0 01-.163-5.155l.163-.005h5.825c1.202-6.149 6.618-10.786 13.118-10.786 6.498 0 11.915 4.638 13.117 10.786h27.391c1.202-6.149 6.618-10.786 13.117-10.786zm-53.625 5.16a8.205 8.205 0 100 16.41 8.206 8.206 0 100-16.41zm53.625 0a8.205 8.205 0 10-.001 16.41 8.205 8.205 0 00.001-16.41z"
                              : "M83.53 53.395a2.585 2.585 0 012.58 2.42l.005.164v40.38a2.585 2.585 0 01-2.421 2.58l-.164.005H60.964a2.585 2.585 0 01-2.58-2.42l-.004-.164-.001-32.826H40.425v30.24l11.751.001a2.585 2.585 0 012.58 2.421l.005.164a2.585 2.585 0 01-2.421 2.58l-.164.004H15.274a2.585 2.585 0 01-2.58-2.42l-.004-.164V55.979a2.585 2.585 0 015.164-.163l.005.163-.001 37.796h17.398V60.95a2.585 2.585 0 012.422-2.58l.163-.005h23.123a2.585 2.585 0 012.58 2.421l.005.164-.001 32.825h17.397V55.979a2.585 2.585 0 012.422-2.58l.163-.004zM8.044 14.079l.04-.043a2.601 2.601 0 01.22-.21l.06-.05a1.96 1.96 0 01.069-.053l.036-.026a2.402 2.402 0 01.36-.216 2.025 2.025 0 01.234-.102l.045-.016a2.246 2.246 0 01.323-.093 3.07 3.07 0 01.162-.03l.076-.01a1.88 1.88 0 01.105-.01l.038-.002.03-.002c.03-.002.062-.003.093-.003H88.708c.044 0 .089.001.133.004l-.15-.004a2.62 2.62 0 01.299.017l.06.008a2.145 2.145 0 01.24.045c.04.009.08.02.121.031l.026.008.114.037.042.016a2.58 2.58 0 011.31 1.083l.025.044c.046.078.088.16.125.242l.016.04c.053.12.095.247.128.377l.017.074 5.54 24.852c1.235 5.549-2.491 10.31-8.116 10.457l-.27.003h-3.626c-2.959 0-5.767-1.282-7.823-3.322-1.596 1.972-4.036 3.242-6.888 3.319l-.274.003h-3.625c-2.966 0-5.687-1.294-7.604-3.348a9.71 9.71 0 01-7.104 3.345l-.278.003H47.52a9.714 9.714 0 01-7.382-3.349c-1.856 1.99-4.467 3.267-7.325 3.346l-.279.003h-3.616c-2.97 0-5.516-1.288-7.163-3.322-1.99 1.974-4.685 3.24-7.54 3.318l-.284.004h-3.62c-5.685 0-9.521-4.672-8.445-10.196l.055-.264 5.531-24.851.008-.036.026-.1-.034.136a2.617 2.617 0 01.18-.53l.022-.045c.09-.184.2-.354.326-.507l.01-.01.054-.065zM86.62 18.38H75.904l2.914 21.812.002.02.033.205c.475 2.632 2.997 4.838 5.666 4.955l.223.005h3.627c2.395 0 3.794-1.66 3.38-3.962l-.041-.205-5.089-22.83zm-15.93 0H59.914l.976 21.982.001.025.013.196c.229 2.565 2.439 4.677 5.012 4.79l.216.004h3.625c2.486 0 4.18-1.857 3.961-4.29l-.023-.21-3.006-22.497zm-15.95 0H43.933l-.444 9.941-.546 12.27c-.115 2.575 1.82 4.67 4.364 4.782l.213.004h3.626c2.577 0 4.585-2.026 4.585-4.574l-.005-.192v-.021l-.987-22.21zm-15.98 0H27.984l-1.037 7.756-1.97 14.74c-.328 2.467 1.288 4.392 3.728 4.497l.212.004h3.616c2.667 0 4.997-2.161 5.23-4.802l.014-.215.635-14.224.345-7.756zM6.966 41.21c-.52 2.34.797 4.068 3.135 4.165l.21.004h3.62c2.752 0 5.406-2.26 5.889-4.965l.031-.2.003-.02L22.77 18.38H12.047L6.967 41.21zM83.53 2.63a2.585 2.585 0 01.163 5.164l-.163.005H15.136a2.585 2.585 0 01-.163-5.164l.163-.005H83.53z"
                          }
                          fill="#6e6e6e"
                        />
                      </svg>
                    </EzButton>
                  </div>
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
        </EzProvider>
      );
    }}
  />
);

export default Layout;
