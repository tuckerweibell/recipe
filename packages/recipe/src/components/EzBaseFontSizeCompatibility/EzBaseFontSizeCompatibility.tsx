import theme from '../theme.config';

const styles = theme.globalCss({':root': {'--recipe-base-font-size': '14px'}});

const EzBaseFontSizeCompatibility = () => {
  styles();
  return null;
};

export default EzBaseFontSizeCompatibility;
