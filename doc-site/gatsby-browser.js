import cssVars from 'css-vars-ponyfill';
import {sheet} from 'emotion';

function onClientEntry() {
  cssVars({watch: true});
}

// disable emotion speedy to allow iframe cloning of styles
// NOTE: This can be removed when we upgrade to emotion 10
sheet.speedy(false);

export {onClientEntry};
