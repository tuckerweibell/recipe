import {createElement} from 'react';
import {ThemeProvider} from 'emotion-theming';
import {standard} from '../themes';

const themeOrStandard = props => ancestorTheme => props.theme || ancestorTheme || standard;

export default Component => {
  const Wrapped = props =>
    createElement(ThemeProvider, {theme: themeOrStandard(props)}, createElement(Component, props));

  Wrapped.displayName = Component.displayName;

  return Wrapped;
};
