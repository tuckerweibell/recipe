const React = require('react');
const Components = require('@ezcater/recipe');
const styled = require('@emotion/styled').default;
const {Global, css} = require('@emotion/core');
const {ThemeProvider} = require('emotion-theming');
const buble = require('buble/dist/buble-browser-deps.umd.js');
const repng = require('./repng');

const path = require('path');
const fs = require('fs');

const scope = {...Components, Global, css, ThemeProvider};

const cleanProps = p =>
  Object.keys(p).reduce((previous, current) => {
    const key = current.startsWith('aria')
      ? current.toLowerCase().replace('aria', 'aria-')
      : current;
    const value = Array.isArray(p[current]) ? p[current].join(' ') : p[current];
    return {...previous, [key]: value};
  }, {});

module.exports = ({htmlAst, fileAbsolutePath}) => {
  const componentMap = {
    code: props => {
      return React.createElement(Preview, {code: props.children[0], scope});
    },
    pre: 'div',
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

  const Component = () => htmlAst.children.map(renderTag);

  const width = 1024;
  const height = width / 2;

  const previewFilename = path.basename(
    fileAbsolutePath.replace(/.preview/, ''),
    path.extname(fileAbsolutePath)
  );
  const outFile = `${previewFilename}.png`;

  const filename = path.join(__dirname, '../static/images/preview/', outFile);

  return repng(Component, {
    width,
    height,
    props: {
      width,
      height,
    },
  }).then(image => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, image, err => {
        if (err) {
          console.log('Failed to write image to ', filename);
          console.log(err);
          reject(err);
        } else {
          console.log('Wrote file: ', filename);
          resolve();
        }
      });
    });
  });
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
    'use strict';
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null && nextSource !== undefined) {
        for (var nextKey in nextSource) {
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
  const res = new Function('_poly', 'React', ...scopeKeys, code);
  return res(poly, React, ...scopeValues);
};

class ErrorBoundary extends React.Component {
  constructor(...args) {
    super(...args);

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
  const transformed = buble.transform(`return (${codeTrimmed})`, opts).code.trim();
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
    Container,
    null,
    jsx(AspectRatio, null, jsx(Content, null, jsx(ErrorBoundary, null, jsx(Eval, {code, scope}))))
  );
};
