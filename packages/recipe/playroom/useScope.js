import {useRef, useEffect, useState} from 'react';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import {Box, Stack} from '@mui/material';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';
import {
  MOCK_ICON_FA_CART_SHOPPING,
  MOCK_ICON_FA_CIRCLE,
  MOCK_ICON_FA_CIRCLE_INFO,
  MOCK_ICON_FA_COFFEE,
  MOCK_ICON_FA_EMPTY_STAR,
  MOCK_ICON_FA_FULL_STAR,
  MOCK_ICON_FA_HALF_STAR,
  MOCK_ICON_FA_SQUARE,
  MOCK_ICON_FA_STAR,
  MOCK_ICON_COFFEE,
  MOCK_ICON_FILEDOWNLOAD,
  MOCK_ICON_FRIES,
  MOCK_ICON_PIZZA,
  MOCK_ICON_PRINTER,
  MOCK_ICON_RAMEN,
  MOCK_ICON_THUMBS_DOWN,
  MOCK_ICON_THUMBS_UP,
  MOCK_ICON_WATER_GLASS,
  MOCK_ICON_WINE_GLASS,
} from '../src/components/EzIcon/EzIconMocks';
import Placeholder from '../src/components/utils/Placeholder';

export default () => ({
  withPrefix: path => `https://recipe.ezcater.com/playroom${path}`,
  Placeholder,
  Box,
  Stack,
  useRef,
  useEffect,
  useState,
  require: moduleName => {
    if (moduleName.includes('dayjs')) {
      return {
        dayjs,
        isSameOrBefore,
        isSameOrAfter,
        isBetween,
      };
    }
    // fake out calls to `require('react-router-dom')` and icon libraries within our .md examples.
    if (moduleName === 'react-router-dom')
      return {BrowserRouter, StaticRouter, NavLink, Link, Route};
    if (
      moduleName.includes('@fortawesome/free-solid-svg-icons') ||
      moduleName.includes('@fortawesome/free-regular-svg-icons')
    ) {
      return {
        emptyStar: MOCK_ICON_FA_EMPTY_STAR,
        faCircle: MOCK_ICON_FA_CIRCLE,
        faCircleInfo: MOCK_ICON_FA_CIRCLE_INFO,
        faCoffee: MOCK_ICON_FA_COFFEE,
        faSquare: MOCK_ICON_FA_SQUARE,
        faStar: MOCK_ICON_FA_STAR,
        fullStar: MOCK_ICON_FA_FULL_STAR,
        halfStar: MOCK_ICON_FA_HALF_STAR,
        shoppingCart: MOCK_ICON_FA_CART_SHOPPING,
      };
    }
    if (moduleName === '@ezcater/icons') {
      return {
        Coffee: MOCK_ICON_COFFEE,
        FileDownload: MOCK_ICON_FILEDOWNLOAD,
        Fries: MOCK_ICON_FRIES,
        Pizza: MOCK_ICON_PIZZA,
        Printer: MOCK_ICON_PRINTER,
        Ramen: MOCK_ICON_RAMEN,
        ThumbsDown: MOCK_ICON_THUMBS_DOWN,
        ThumbsUp: MOCK_ICON_THUMBS_UP,
        WaterGlass: MOCK_ICON_WATER_GLASS,
        WineGlass: MOCK_ICON_WINE_GLASS,
      };
    }
    throw new Error('Cannot use require from a browser context.');
  },
});
