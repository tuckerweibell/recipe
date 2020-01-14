import cssVars from 'css-vars-ponyfill';

function onClientEntry() {
  cssVars({watch: true});
}

export {onClientEntry};
