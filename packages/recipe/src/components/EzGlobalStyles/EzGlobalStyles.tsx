import {useEffect} from 'react';
import theme from '../theme.config';
import features from './features';

const styles = theme.globalCss({
  html: {
    boxSizing: 'border-box',
  },
  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    color: '$black100',
    fontFamily: '$sans',
    fontSize: '$text',
    margin: 0,
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
