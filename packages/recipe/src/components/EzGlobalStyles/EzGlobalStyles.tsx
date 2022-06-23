import {useEffect} from 'react';
import theme from '../theme.config';
import features from './features';

const styles = theme.globalCss({
  html: {
    boxSizing: 'border-box',
    fontSize: '$text',
    fontFamily: '$sans',
  },
  body: {
    margin: 0,
    color: '$black100',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
});

const EzGlobalStyles = () => {
  styles();

  useEffect(() => {
    features.forEach(([feature, detect]) => {
      if (!detect()) document.body.classList.add(`no-${feature}`);
    });
  }, []);

  return null;
};

export default EzGlobalStyles;
