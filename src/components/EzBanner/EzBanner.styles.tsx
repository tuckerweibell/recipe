import React from 'react';
import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import styled from '@emotion/styled';
import {mq} from '../../themes/styled';
import LinkButton from '../EzPageHeader/LinkButton';
import CloseButton from '../CloseButton';
import './vars.css';

const base = () => css`
  align-items: flex-start;
  background-repeat: no-repeat;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  color: var(--recipe-banner-body-text-color);
  border-radius: var(--recipe-banner-border-radius);
  border-width: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: var(--recipe-banner-body-padding-y) var(--recipe-banner-body-padding-x);
  position: relative;

  h3 {
    color: var(--recipe-banner-body-text-color);
  }
  p {
    margin-top: 12px;
    margin-bottom: 16px;
  }

  ${mq('medium', {
    backgroundSize: 499.2,
    backgroundPosition: 'top 30% right 0',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='551' height='318'%3e%3cg fill='white' opacity='0.3' fill-rule='evenodd'%3e%3cpath d='M441 171a13 13 0 1 1-4-25 13 13 0 0 1 4 25m-7-40a29 29 0 1 0 10 56 29 29 0 0 0-10-56M346 211a13 13 0 1 1-5-25 13 13 0 0 1 5 25m-7-40a29 29 0 1 0 10 56 29 29 0 0 0-10-56'/%3e%3cpath d='M507 194c-12-61-45-115-95-153l15-21c56 42 93 102 106 170zm-132 24c-4 0-7 5-6 9l12 67a7 7 0 0 1-14 2l-8-47a8 8 0 0 0-16 3 13 13 0 0 1-25 4l-4-19c0-5-4-8-9-7l-28 5 69-99a29 29 0 1 0 32-46l25-36c46 36 77 86 88 143zm2-105c2 7-3 13-10 15-4 0-9-2-12-5l14-20c4 2 8 5 8 10zM430 2l-6-2-5 4-167 238a8 8 0 0 0 8 12l40-7 2 12a29 29 0 0 0 46 18l4 22a23 23 0 0 0 44-8l-10-59 158-28c4-1 7-6 6-10v-2C536 115 494 48 430 2z'/%3e%3cg%3e%3cpath d='M206 83zm-1-17c-7 4-10 14-6 21s14 9 21 4c7-4 9-13 5-20s-13-9-20-5zM181 105c-7 4-10 13-6 20s14 9 21 5 9-13 5-20-13-9-20-5M124 75c-7 4-9 13-5 20s13 9 21 5c7-4 9-13 5-20s-13-9-21-5M99 124c-7 4-9 13-5 20s13 9 20 5 10-13 5-20-13-9-20-5'/%3e%3cpath d='M70 217c-28-59-7-131 52-166 58-35 131-20 170 32zM64 87l-8 14-1 1a42 42 0 0 0-16 56 42 42 0 0 0-3 47c4 9 12 14 20 17l1 3-29 17C2 189 18 125 64 87zm50-49L94 53c-7 3-15 6-22 11-68 40-91 125-54 192l5 4 6-1 42-25 194-117 42-25c1-1 3-3 3-5 1-2 0-4-1-5-42-65-128-84-195-44z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
    p: {
      maxWidth: '50%',
    },
  })};

  ${mq('large', {
    backgroundSize: 'auto',
    backgroundPosition: 'top 50% right 0',
  })};
`;

const closeButton = () => css`
  position: absolute;
  top: var(--recipe-banner-body-padding-y);
  right: var(--recipe-banner-body-padding-x);
  svg path {
    fill: var(--recipe-banner-body-text-color);
  }
`;

export const StyledCloseButton = styled(CloseButton)(closeButton);

const button = () => css`
  background-color: var(--recipe-banner-button-background-color);
  border-radius: var(--recipe-banner-border-radius);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  color: var(--recipe-banner-button-text-color);
  padding: var(--recipe-banner-button-padding-y) var(--recipe-banner-button-padding-x);

  &:focus {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
    outline: none;
  }
  &:active,
  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
  &:hover,
  a&:hover {
    color: var(--recipe-banner-button-text-color-hover);
  }
  &:active {
    color: var(--recipe-banner-button-text-color-down);
  }
`;

const backgroundColor = variant('use', {
  marketing: {backgroundColor: 'var(--recipe-banner-marketing-background-color)'},
  ezOrdering: {backgroundColor: 'var(--recipe-banner-ezordering-background-color)'},
});

// styled components doesn't like `styled(LinkButton)(button)` due to forwardRef.
export const Link = styled(p => React.createElement(LinkButton, p as any))(button);

export default styled.div<{use: string}>(base, backgroundColor);
