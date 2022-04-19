/* eslint-disable filenames/match-regex */
import {configureAxe} from 'jest-axe';

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: {enabled: false},
  },
});

export {axe};
