/** @jsx jsx */
import React, {useEffect, useState} from 'react';
import {jsx} from '@emotion/react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, withPrefix} from 'gatsby';
import Link from 'gatsby-link';
import naturalSort from 'natural-sort';
import {
  EzAppLayout,
  EzCard,
  EzCardSection,
  EzContent,
  EzHeader,
  EzHeading,
  EzLayout,
  EzNavigation,
  EzPage,
  EzPageHeader,
  EzPageSection,
  EzProvider,
  EzSearchInput,
  EzSegmentedControl,
  EzThemeProvider,
  themes,
  stitchesMarketplaceTheme,
} from '@ezcater/recipe';
import './layout.css';
import logo from '../recipe-logo.svg';
import ComponentGrid from './ComponentGrid';
import {SearchProvider} from '../providers/SearchProvider';
import TableOfContents from './TableOfContents';
import Sprites from './Sprites';
import EditDocsButton from './EditDocsButton';

const Layout = ({
  name,
  title,
  path,
  children,
  sections,
  location,
  layout,
  headings,
  tableOfContents,
}) => (
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

      const absolutePath = pages.find(
        page => page.frontmatter.path === path || page.frontmatter.path === `${path}/`
      );

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

      links.splice(4, 0, {href: withPrefix('/playroom'), label: 'Playroom'});
      links.splice(7, 0, {href: withPrefix('/changelog'), label: 'Releases'});

      const activeLink = links.find(link => location.pathname.includes(link.to));
      const relatedPages = activeLink ? activeLink.links.map(l => ({...l, as: Link})) : [];
      const tabs = relatedPages.length && relatedPages.length < 5 ? relatedPages : undefined;

      const [searchTerms, setSearchTerms] = useState('');

      useEffect(() => {
        setSearchTerms('');
      }, [location.pathname]);

      const hasHeadings = headings.length;
      const isComponentGrid = path === '/components' || path === '/components/';
      const hasSearchTerms = searchTerms.length;
      const showTableOfContents = hasHeadings && !isComponentGrid && !hasSearchTerms;

      const [activeTheme, setActiveTheme] = useState('marketplace');
      const handleThemeChange = value => {
        localStorage.setItem('recipeTheme', value);
        setActiveTheme(value);
      };

      const isMarketPlace = activeTheme === 'marketplace';

      useEffect(() => {
        const localStorageTheme = localStorage?.getItem('recipeTheme');
        if (localStorageTheme) setActiveTheme(localStorageTheme);
      }, []);

      return (
        <EzProvider theme={isMarketPlace ? stitchesMarketplaceTheme : undefined}>
          <EzThemeProvider
            theme={isMarketPlace ? themes.ezMarketplaceTheme : themes.ezFulfillmentTheme}
          >
            <Helmet
              title={`Recipe - ${title}`}
              meta={[
                {name: 'description', content: 'Recipe Design System'},
                {name: 'keywords', content: 'Recipe Design System EzCater'},
              ]}
            >
              <html lang="en" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <div>
              <div className={name}>
                <Sprites />
                <EzAppLayout layout={layout}>
                  <EzNavigation
                    home={{
                      to: '/',
                      as: Link,
                      label: 'Recipe',
                      logo: {src: logo, width: 120},
                    }}
                    links={links}
                    utilityLinks={[
                      {
                        label: `Use ${isMarketPlace ? 'fulfillment' : 'marketplace'} theme`,
                        onClick: () =>
                          handleThemeChange(isMarketPlace ? 'fulfillment' : 'marketplace'),
                      },
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
                        tabs && {tabs, selected: tabs.find(tab => tab.to === location.pathname)}
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
                            value={searchTerms}
                            onChange={e => setSearchTerms(e.target.value.toLowerCase())}
                          />
                        </EzLayout>
                      }
                    />
                    <EzPage>
                      <SearchProvider value={searchTerms}>
                        <EzPageSection use={showTableOfContents ? 'main' : undefined}>
                          <EzCard>
                            {searchTerms ? (
                              <ComponentGrid />
                            ) : (
                              children ||
                              sections.map((section, i) => {
                                const actions = {
                                  title: 'Overview',
                                  actions: <EditDocsButton path={absolutePath} />,
                                };
                                return (
                                  <EzCardSection key={i} {...(i === 0 ? actions : {})}>
                                    {section}
                                  </EzCardSection>
                                );
                              })
                            )}
                          </EzCard>
                        </EzPageSection>
                        {showTableOfContents && (
                          <EzPageSection
                            use="aside"
                            css={{
                              position: 'sticky',
                              top: '10px',
                              '@media (max-width: 768px)': {
                                display: 'none',
                              },
                            }}
                          >
                            <EzCard>
                              <EzHeading id="themeControl" size="3">
                                Current theme
                              </EzHeading>
                              <EzSegmentedControl
                                name="theme"
                                label="Theme"
                                labelPosition="hidden"
                                options={[
                                  {label: 'Marketplace', value: 'marketplace'},
                                  {label: 'Fulfillment', value: 'fulfillment'},
                                ]}
                                active={activeTheme}
                                onChange={handleThemeChange}
                              />
                            </EzCard>
                            <EzCard style={{maxHeight: '70vh', overflow: 'auto'}}>
                              <EzHeader>
                                <EzHeading id="tableOfContents" size="3">
                                  Contents
                                </EzHeading>
                              </EzHeader>
                              <EzContent>
                                <TableOfContents>{tableOfContents}</TableOfContents>
                              </EzContent>
                            </EzCard>
                          </EzPageSection>
                        )}
                      </SearchProvider>
                    </EzPage>
                  </EzNavigation>
                </EzAppLayout>
              </div>
            </div>
          </EzThemeProvider>
        </EzProvider>
      );
    }}
  />
);

export default Layout;
