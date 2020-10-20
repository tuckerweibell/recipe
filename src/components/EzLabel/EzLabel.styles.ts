import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {hideVisually} from '../../styles';
import './vars.css';

const base = () => css`
  display: block;
  line-height: var(--recipe-label-leading);
  font-weight: var(--recipe-label-font-weight);
  padding: 0; /* remove user agent styles (in particular when element is fieldset legend) */
`;

const size = variant('size', {
  small: {
    color: 'var(--recipe-label-small-color)',
    fontSize: 'var(--recipe-label-small-font-size)',
  },
  normal: {
    color: 'var(--recipe-label-color)',
    fontSize: 'var(--recipe-label-font-size)',
  },
});

const top = () => ({marginBottom: 'var(--recipe-global-static-size-50)'});
const bottom = () => ({marginTop: 'var(--recipe-global-static-size-50)'});

const left = () => css`
  display: inline-block;
  margin-right: var(--recipe-global-static-size-150);
`;

const right = () => css`
  display: inline-block;
  margin-left: var(--recipe-global-static-size-150);
`;

const error = ({error: hasError}) =>
  hasError &&
  css`
    color: var(--recipe-semantic-negative-color-default);
  `;

const position = variant('position', {
  top,
  bottom,
  left,
  right,
  hidden: hideVisually,
});

export default styled.div<any>(base, position, size, error);
