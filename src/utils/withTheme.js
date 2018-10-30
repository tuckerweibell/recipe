import {createElement} from 'react';
import {standard} from '../themes';
import {ThemeProvider} from 'emotion-theming';

const themeOrStandard = props => ancestorTheme => {
  return props.theme || ancestorTheme || standard;
};

export default Component => props =>
  createElement(ThemeProvider, {theme: themeOrStandard(props)}, createElement(Component, props));
