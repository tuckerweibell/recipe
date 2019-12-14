import React from 'react';
import styled, {css} from 'react-emotion';
import {graphql} from 'gatsby';
import Component from 'react-component-component';
import * as Components from '@ezcater/recipe';
import {withPrefix} from 'gatsby-link';
import loadable from '@loadable/component';
import {ColorDefinition, Example} from './ColorVariables';
import SpacingVariables from './SpacingVariables';
import FontCombinations from './FontCombinations';
import FontLineHeights from './FontLineHeights';
import FontSizes from './FontSizes';
import FontWeights from './FontWeights';
import Layout from './Layout';
import TimelineStatus from './TimelineStatus';
import logo from '../ezcater-logo.svg';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

const cleanProps = p =>
  Object.keys(p).reduce((previous, current) => {
    const key = current.startsWith('aria')
      ? current.toLowerCase().replace('aria', 'aria-')
      : current;
    return {...previous, [key]: p[current]};
  }, {});

const HtmlAst = ({htmlAst, scope}) => {
  const Code = props => {
    const {className} = props;

    if (className && className.includes('language-jsx')) {
      const Playground = loadable(() => import(`./Docz`));
      const Preview = loadable(() => import(`./Preview`));
      const Codez = isIE11 ? Preview : Playground;

      return <Codez code={props.children[0]} scope={scope} />;
    }

    if (!className) return <code {...props} />;

    return (
      <pre>
        <code {...props} />
      </pre>
    );
  };

  const heading = (size, as) => props =>
    React.createElement(Components.EzHeading, {size, as, ...props});

  const componentMap = {
    code: Code,
    a: props => React.createElement(props.className ? 'a' : Components.EzLink, props),
    p: props => {
      const {children} = props;
      const type = children[0].type;
      const hasNestedComponent = children.length === 1 && type && type !== Code;
      return hasNestedComponent ? children : React.createElement('p', props, children);
    },
    pre: ({children}) => children,
    colordefinition: ColorDefinition,
    baseexample: Example.Base,
    checkedexample: Example.Checked,
    hoverexample: Example.Hover,
    spacingvariables: SpacingVariables,
    fontcombinations: FontCombinations,
    fontlineheights: FontLineHeights,
    fontsizes: FontSizes,
    fontweights: FontWeights,
    ezalert: Components.EzAlert,
    timelinestatus: TimelineStatus,
    h1: heading(1),
    h2: heading(3, 'h2'),
    h3: heading(5, 'h3'),
    h4: heading(5, 'h4'),
  };

  const renderTag = (node, i) => {
    if (node.type === 'element') {
      const {tagName, properties, children} = node;
      properties.key = i;
      return React.createElement(
        componentMap[tagName] || tagName,
        cleanProps(properties),
        (children.length && children.map(renderTag)) || undefined
      );
    } else {
      return node.value;
    }
  };

  return htmlAst.children.map(renderTag);
};

const require = () => ({
  Link,
  NavLink,
  BrowserRouter:
    typeof window === 'undefined'
      ? ({children}) => React.createElement(StaticRouter, {context: {}, location: '/', children})
      : BrowserRouter,
  Route,
});

const ezCaterLogoPath = logo;
const scope = {...Components, styled, css, Component, require, ezCaterLogoPath, withPrefix};

const splitOnTagName = (list, tagName) => {
  const i = list.findIndex(el => el.tagName === tagName);

  if (i === -1) return [list];

  return [list.slice(0, i), ...splitOnTagName(list.slice(i + 1), tagName)];
};

export default ({data: {markdownRemark: page}, location}) => (
  <Layout
    title={page.frontmatter.title}
    location={location}
    name={page.frontmatter.name}
    sections={splitOnTagName(page.htmlAst.children, 'hr').map(section => (
      <HtmlAst htmlAst={{children: section}} scope={scope} />
    ))}
  />
);

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      htmlAst
      frontmatter {
        path
        title
        name
      }
    }
  }
`;
