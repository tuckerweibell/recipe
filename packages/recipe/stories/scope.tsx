import React, {useState} from 'react';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import {fireEvent} from '@storybook/testing-library';
import * as Components from '../src';
import Open from '../src/components/EzField/Open';
import ezCaterLogoPath from '../../../docs/src/ezcater-logo.svg';
import {Global, css} from '../src/styles';
import {
  MOCK_ICON_FA_COFFEE,
  MOCK_ICON_FA_EMPTY_STAR,
  MOCK_ICON_FA_FULL_STAR,
  MOCK_ICON_FA_HALF_STAR,
  MOCK_ICON_COFFEE,
  MOCK_ICON_FRIES,
  MOCK_ICON_PIZZA,
  MOCK_ICON_RAMEN,
  MOCK_ICON_WATER_GLASS,
  MOCK_ICON_WINE_GLASS,
} from '../src/components/EzIcon/EzIconMocks';
import Placeholder from '../src/components/utils/Placeholder';

// our markdown examples use images from the doc-site, so tell webpack how to find those images:
const docSiteImages = require.context('../../../docs/static', true);
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
  useState,
  Open,
  fireEvent,
  css,
  Global,
  require() {
    return {
      Link,
      NavLink,
      BrowserRouter: typeof window === 'undefined' ? StaticRouterWithProps : BrowserRouter,
      Route,
      emptyStar: MOCK_ICON_FA_EMPTY_STAR,
      faCoffee: MOCK_ICON_FA_COFFEE,
      fullStar: MOCK_ICON_FA_FULL_STAR,
      halfStar: MOCK_ICON_FA_HALF_STAR,
      Coffee: MOCK_ICON_COFFEE,
      Fries: MOCK_ICON_FRIES,
      Pizza: MOCK_ICON_PIZZA,
      Ramen: MOCK_ICON_RAMEN,
      WaterGlass: MOCK_ICON_WATER_GLASS,
      WineGlass: MOCK_ICON_WINE_GLASS,
    };
  },
  ezCaterLogoPath,
  withPrefix(filePath) {
    return allImages[`.${filePath}`];
  },
  Placeholder,
};

export default scope;
