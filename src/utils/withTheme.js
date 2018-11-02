import {createElement} from 'react';
import {ThemeProvider} from 'emotion-theming';
import {standard} from '../themes';

const themeOrStandard = props => ancestorTheme => props.theme || ancestorTheme || standard;

export default Component => props =>
  createElement(ThemeProvider, {theme: themeOrStandard(props)}, createElement(Component, props));
