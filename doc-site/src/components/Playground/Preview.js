/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import * as buble from 'buble/dist/buble-browser-deps.umd.js';
import Code from '../Code';

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

export default ({code, scope, language}) => {
  const [showCode, setShowCode] = React.useState(false);
  const border = '1px solid #ced4d9';

  return (
    <div css={{border, marginBottom: 30, maxWidth: 950}}>
      <ErrorBoundary>
        <div css={{margin: 20}}>
          <Eval code={code} scope={scope} />
        </div>
      </ErrorBoundary>

      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 5px',
          background: '#f6f7f9',
          borderTop: border,
        }}
      >
        <button
          title="Show editor"
          css={{
            padding: '3px 10px',
            borderLeft: border,
            outline: 'none',
            borderTop: 'none',
            borderBottom: 'none',
            borderRight: 'none',
            display: 'flex',
            color: '#2d374766',
            background: 'transparent',
            fontSize: 12,
          }}
          onClick={() => setShowCode(!showCode)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </button>
      </div>
      {showCode && (
        <div css={{margin: 0, borderTop: border, '& > pre[class*="language-"]': {margin: '0'}}}>
          <Code code={code} language={language} />
        </div>
      )}
    </div>
  );
};
