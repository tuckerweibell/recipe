import fs from 'fs';
import React from 'react';
import * as Components from '@ezcater/recipe';
import styled from '@emotion/styled';
import {Global, css, ThemeProvider} from '@emotion/react';
import {transform} from 'buble';
import MDX from '@mdx-js/runtime';
import repng from './repng';

const globalScope = {...Components, Global, css, ThemeProvider};

const snapshot = ({content, outputFilename}): Promise<void> => {
  const components = {
    code: props => {
      return React.createElement(Preview, {code: props.children, scope: globalScope});
    },
    pre: 'div',
  };

  const Component = () => React.createElement(MDX, {components, scope: globalScope}, content);

  const width = 1024;
  const height = width / 2;

  return repng(Component, {
    width,
    height,
  }).then(
    image =>
      new Promise((resolve, reject) => {
        fs.writeFile(outputFilename, image, err => {
          if (err) {
            console.log('Failed to write image to ', outputFilename);
            console.log(err);
            reject(err);
          } else {
            console.log('Wrote file: ', outputFilename);
            resolve();
          }
        });
      })
  );
};

const opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true,
  },
};

const poly = {
  assign: function assign(target, _varArgs) {
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const to = Object(target);

    for (let index = 1; index < arguments.length; index++) {
      // eslint-disable-next-line prefer-rest-params
      const nextSource = arguments[index];

      if (nextSource !== null && nextSource !== undefined) {
        // eslint-disable-next-line no-restricted-syntax
        for (const nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
};

const evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  // eslint-disable-next-line no-new-func
  const res = new Function('_poly', 'React', ...scopeKeys, code);
  return res(poly, React, ...scopeValues);
};

class ErrorBoundary extends React.Component<{children?: React.ReactNode}, {hasError: boolean}> {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('h1', null, 'Something went wrong.');
    }

    return this.props.children;
  }
}

const Eval = ({code = '', scope = {}}) => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '');
  const transformed = transform(`return (${codeTrimmed})`, opts).code.trim();
  const result = evalCode(transformed, scope);
  return typeof result === 'function' ? React.createElement(result, null) : result;
};

const Container = styled('div')`
  width: 100vw;

  p {
    margin: 0;
  }

  svg,
  svg * {
    color: #8a8a8a !important;
  }

  --color: transparent;
  --shadow: -0.5ch 0px 0px #cacaca, 0 0 0 #cacaca;

  * {
    /* blur all the text (which should be all the BLACK SQUARE unicode) */
    text-shadow: var(--shadow);
    color: var(--color) !important;
  }

  filter: grayscale(100%);
`;

const AspectRatio = styled('div')`
  position: relative;
  width: 100%;

  :after {
    content: '';
    display: block;
    padding-bottom: 50%; /* half as tall as wide */
  }
`;

const Content = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  --zoom: 1;
  --background-color: #f4f7f8;
  background-color: var(--background-color);

  > * {
    zoom: var(--zoom);
  }
`;

const jsx = React.createElement;

const Preview = ({code, scope}) => {
  return jsx(
    Components.EzThemeProvider,
    {theme: Components.themes.ezTheme},
    jsx(
      Container,
      null,
      jsx(AspectRatio, null, jsx(Content, null, jsx(ErrorBoundary, null, jsx(Eval, {code, scope}))))
    )
  );
};

export default snapshot;
