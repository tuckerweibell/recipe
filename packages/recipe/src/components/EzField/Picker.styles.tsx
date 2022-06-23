import React from 'react';
import theme from '../theme.config';

const picker = theme.css({
  stroke: '$blue600',

  input: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    ':focus': {outlineStyle: 'auto'},
  },
  '&& input': {paddingRight: '2em'},
  svg: {transition: 'transform 0.3s'},

  variants: {
    disabled: {
      true: {stroke: '$textDisabled'},
    },
  },
});

export const TextInputWrapper = props => <div {...picker(props).props} />;
