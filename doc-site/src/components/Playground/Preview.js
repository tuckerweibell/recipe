import React from 'react';
import styled from '@emotion/styled';
import * as buble from 'buble/dist/buble-browser-deps.umd.js';

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
  state = {hasError: false};

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export const Eval = ({code = '', scope = {}}) => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '');
  const transformed = buble.transform(`return (${codeTrimmed})`, opts).code.trim();
  const result = evalCode(transformed, scope);
  return typeof result === 'function' ? React.createElement(result, null) : result;
};

const Container = styled.div`
  border: 1px solid #ced4d9;
  padding: 20px;
  max-width: 950px;

  > * + * {
    margin-top: 1em;
    margin-bottom: 0;
  }
`;

export default ({code, scope}) => {
  return (
    <Container>
      <ErrorBoundary>
        <Eval code={code} scope={scope} />
      </ErrorBoundary>

      <pre>
        <code>{code}</code>
      </pre>
    </Container>
  );
};
