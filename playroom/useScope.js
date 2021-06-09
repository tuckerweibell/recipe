import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import Placeholder from '../doc-site/src/components/Placeholder';

const ezCaterLogoPath = `data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8'?%3e%3Csvg xmlns='http://www.w3.org/2000/svg' width='486' height='113'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23FFF' d='M458 22v17h1c2-6 5-10 10-13s10-5 17-5v9c-4 0-8 0-11 2a24 24 0 0 0-16 24v38h-9V22h8m-30 22l-5-9c-1-2-4-4-7-5-2-2-6-2-9-2a21 21 0 0 0-17 7l-4 9a40 40 0 0 0-3 9h47l-2-9zm-43 26c1 4 2 7 4 9l7 7c3 2 7 3 11 3 6 0 11-2 15-5 4-4 6-8 7-14h9c-2 9-5 15-10 19-5 5-12 7-21 7-6 0-11-1-15-3l-10-8-6-12a55 55 0 0 1 0-29l6-12a29 29 0 0 1 25-12c6 0 11 1 15 4 4 2 7 5 10 9l5 13a57 57 0 0 1 1 15h-55l2 9zm-19-48v8h-15v48l1 7 6 2h8v7l-4 1h-4c-6 0-10-1-12-4-3-2-4-6-4-12V30h-12v-8h12V1h9v21h15m-55 33l-4 2-4 1a259 259 0 0 1-11 2l-11 2-8 4c-2 2-3 5-3 9l1 5a14 14 0 0 0 4 5l5 3a19 19 0 0 0 6 1l9-2 8-4a22 22 0 0 0 8-17V55zm-44-22c1-3 3-5 6-7 2-2 5-3 9-4l11-2 10 1 8 4c3 1 5 4 6 7 2 3 3 7 3 11v38c0 4 1 6 5 6l3-1v7a42 42 0 0 1-3 1h-3l-6-1-3-2-1-4v-5h-1l-5 6a24 24 0 0 1-5 4l-7 3a37 37 0 0 1-18 0l-8-4-5-7-2-9c0-5 1-9 3-12l9-6a1045 1045 0 0 1 35-7l2-3 1-5-2-7-4-4c-1-2-3-2-6-3h-7c-5 0-10 1-13 4-4 2-6 6-6 12h-9c0-4 1-7 3-11zm-30-1c-3-3-8-4-14-4a22 22 0 0 0-19 9l-4 10a40 40 0 0 0-2 11l2 11 4 10 8 7a22 22 0 0 0 19 1 21 21 0 0 0 6-4 23 23 0 0 0 7-15h9c-1 9-5 16-10 21s-12 7-20 7c-5 0-10-1-14-3l-11-8-6-12a47 47 0 0 1 0-29c1-5 3-9 6-12a32 32 0 0 1 25-12c8 0 14 2 20 6 5 4 8 11 9 19h-8c-2-6-4-10-7-13'/%3E%3Cpath fill='%237FB341' d='M171 97a15 15 0 0 1-16 15H16c-9 0-15-7-15-15V19C1 11 7 4 16 4h140c8 0 15 7 15 15v78z'/%3E%3Cpath fill='%23FFFFFE' d='M150 87v7H90v-7l47-57H94v-8h54v7l-47 58h49M74 44l-4-9-7-5c-3-2-6-2-10-2a21 21 0 0 0-16 7l-5 9a40 40 0 0 0-2 9h46l-2-9zM31 70c1 4 2 7 4 9l8 7c3 2 6 3 10 3 7 0 12-2 15-5 4-4 6-8 8-14h9c-2 9-6 15-11 19-5 5-12 7-21 7-5 0-10-1-14-3s-8-5-10-8l-6-12a55 55 0 0 1 0-29l6-12a29 29 0 0 1 24-12c6 0 11 1 15 4 4 2 7 5 10 9l5 13a57 57 0 0 1 2 15H30l1 9z'/%3E%3C/g%3E%3C/svg%3E`;

export default () => ({
  withPrefix: path => `https://ezcater.github.io/recipe${path}`,
  Placeholder,
  ezCaterLogoPath,
  require: moduleName => {
    if (moduleName !== 'react-router-dom')
      throw new Error('Cannot use require from a browser context.');

    // fake out calls to `require('react-router-dom')` within our .md examples.
    return {BrowserRouter, StaticRouter, NavLink, Link, Route};
  },
});
