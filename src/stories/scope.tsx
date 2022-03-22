import React from 'react';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import * as Components from '..';
import Placeholder from '../../doc-site/src/components/Placeholder';
import ezCaterLogoPath from '../../doc-site/src/ezcater-logo.svg';
import {Global, css} from '../styles';
import {
  MOCK_ICON_FA_COFFEE,
  MOCK_ICON_FA_FULL_STAR,
  MOCK_ICON_FA_HALF_STAR,
  MOCK_ICON_FA_EMPTY_STAR,
  MOCK_ICON_PIZZA,
  MOCK_ICON_FRIES,
  MOCK_ICON_RAMEN,
} from '../components/EzIcon/EzIconMocks';

// our markdown examples use images from the doc-site, so tell webpack how to find those images:
const docSiteImages = require.context('../../doc-site/static', true);
const allImages: Record<string, any> = {};

docSiteImages.keys().forEach(filename => {
  allImages[filename] = docSiteImages(filename);
});

const StaticRouterWithProps = ({children}) => (
  <StaticRouter context={{}} location="/">
    {children}
  </StaticRouter>
);

// this is copied almost verbatim from our doc-site
// we can likely remove this/replace this with inline module imports
// if and when migrate our docs to MDX format instead of standard markdown
const scope: any = {
  ...Components,
  css,
  Global,
  require() {
    return {
      Link,
      NavLink,
      BrowserRouter: typeof window === 'undefined' ? StaticRouterWithProps : BrowserRouter,
      Route,
      faCoffee: MOCK_ICON_FA_COFFEE,
      fullStar: MOCK_ICON_FA_FULL_STAR,
      halfStar: MOCK_ICON_FA_HALF_STAR,
      emptyStar: MOCK_ICON_FA_EMPTY_STAR,
      Pizza: MOCK_ICON_PIZZA,
      Fries: MOCK_ICON_FRIES,
      Ramen: MOCK_ICON_RAMEN,
    };
  },
  ezCaterLogoPath,
  withPrefix(filePath) {
    return allImages[`.${filePath}`];
  },
  Placeholder,
};

export default scope;
