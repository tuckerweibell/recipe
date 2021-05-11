import React from 'react';
import Style from '@ezcater/snitches';
import theme from './EzGlobalStyles.theme.config';

const styles = theme.global({
  html: {
    boxSizing: 'border-box',
    fontSize: '$text',
    fontFamily: '$sans',
  },
  body: {
    margin: 0,
    color: '$text',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
});

const EzGlobalStyles = () => {
  styles();

  return <Style ruleset={theme} />;
};

export default EzGlobalStyles;
