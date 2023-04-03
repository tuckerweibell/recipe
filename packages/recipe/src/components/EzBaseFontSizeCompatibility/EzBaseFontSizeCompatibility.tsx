import {useEffect} from 'react';
import warning from 'tiny-warning';
import theme from '../theme.config';

const styles = theme.globalCss({':root': {'--recipe-base-font-size': '14px'}});

const EzBaseFontSizeCompatibility = () => {
  useEffect(() => {
    warning(
      false,
      '*Recipe Deprecation*. EzBaseFontSizeCompatibility is deprecated and should be removed. Recipe now only supports a default base font size of 16px, which is supported by all major browsers.'
    );
  }, []);

  styles();
  return null;
};

export default EzBaseFontSizeCompatibility;
