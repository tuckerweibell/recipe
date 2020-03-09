import React, {useState} from 'react';
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
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './layout.css';
import logo from '../recipe-logo.svg';

const themeAsObjectNotModule = Object.assign({}, themes.standard);

const List = styled.dl`
  flex: 1;
  overflow-y: auto;
  display: ${p => (p.opened ? 'block' : 'none')};
  margin: 0;
  && {
    text-decoration: none;
  }
`;

const iconRotate = p => (p.opened ? '-180deg' : '0deg');

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${iconRotate});
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  & svg {
    stroke: '#b8bdc2';
  }
`;

const menuStyles = ({theme}) => css`
  color: #b8bdc2;
  font-weight: normal;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.xl4} ${theme.spacing.xs} ${theme.spacing.xl3};
  width: 100%;
  position: relative;
  text-decoration: none;

  :hover:enabled {
    color: white;
    text-decoration: none;
  }

  :active:enabled,
  :not([aria-disabled='true'])[aria-expanded='true'] {
    box-shadow: inset 0px 0px 10px #000000;
  }
`;

const MenuLink = styled(Link)(menuStyles);

const Menu = ({children, links, location, ...props}) => {
  const [opened, setOpened] = useState(location.pathname.includes(props.to));
  const toggle = () => setOpened(s => !s);
  const hasChildren = Boolean(links.length);

  const handleToggle = ev => {
    ev.preventDefault();
    toggle();
  };
  return (
    <>
      <Link {...props} partiallyActive={!hasChildren} {...(hasChildren && {onClick: handleToggle})}>
        {children}
        {hasChildren && (
          <Icon opened={opened}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Icon>
        )}
      </Link>
      {hasChildren && (
        <List opened={opened}>
          {links.map(({label, to}) => (
            <dt key={label}>
              <MenuLink to={to} activeStyle={{backgroundColor: '#1b2023'}} partiallyActive={true}>
                {label}
              </MenuLink>
            </dt>
          ))}
        </List>
      )}
    </>
  );
};

const Layout = ({name, title, children, sections, location, layout}) => (
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
              p.frontmatter.path !== page.frontmatter.path
          )
          .map(page => ({
            to: page.frontmatter.path,
            label: page.frontmatter.title,
          }))
          .sort((a, b) => naturalSort()(a.label, b.label)),
        location,
        as: Menu,
      }));

      const activeLink = links.find(link => location.pathname.includes(link.to));
      const relatedPages = activeLink && activeLink.links.map(l => ({...l, as: Link}));
      const tabs = relatedPages && relatedPages.length < 5 ? relatedPages : undefined;

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
          <ThemeProvider theme={themeAsObjectNotModule}>
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
