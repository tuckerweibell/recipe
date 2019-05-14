import React from 'react';
import Helmet from 'react-helmet';
import styled, {css} from 'react-emotion';
import {graphql} from 'gatsby';
import Component from 'react-component-component';
import Playground from './Playground';
import * as Components from '@ezcater/recipe';
import ColorVariables from './ColorVariables';
import SpacingVariables from './SpacingVariables';
import FontCombinations from './FontCombinations';
import FontSizes from './FontSizes';
import FontWeights from './FontWeights';
import Layout from './Layout';
import TimelineStatus from './TimelineStatus';
import {Link, BrowserRouter, StaticRouter, Route} from 'react-router-dom';

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
      return <Playground code={props.children[0]} scope={scope} />;
    }

    if (!className) return <code {...props} />;

    return (
      <pre>
        <code {...props} />
      </pre>
    );
  };

  const componentMap = {
    code: Code,
    p: props => {
      const {children} = props;
      const type = children[0].type;
      const hasNestedComponent = children.length === 1 && type && type !== Code;
      return hasNestedComponent ? children : React.createElement('p', props, children);
    },
    pre: ({children}) => children,
    colorvariables: ColorVariables,
    spacingvariables: SpacingVariables,
    fontcombinations: FontCombinations,
    fontsizes: FontSizes,
    fontweights: FontWeights,
    ezalert: Components.EzAlert,
    timelinestatus: TimelineStatus,
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
  BrowserRouter:
    typeof window === 'undefined'
      ? ({children}) => React.createElement(StaticRouter, {context: {}, location: '/', children})
      : BrowserRouter,
  Route,
});

export default ({data: {markdownRemark: page}}) => {
  return (
    <Layout>
      <Helmet title={`recipe - ${page.frontmatter.title}`} />
      <div>
        <h1>{page.frontmatter.title}</h1>
        <HtmlAst htmlAst={page.htmlAst} scope={{...Components, styled, css, Component, require}} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      htmlAst
      frontmatter {
        path
        title
      }
    }
  }
`;
