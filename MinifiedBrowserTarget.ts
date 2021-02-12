import CleanCSS from 'clean-css';

const customPropertyRegExp = /(--[A-z][\w-]*):/g;

const rewriteCssCustomVars = ({css, body, name}) => {
  // rewrite css vars to shrink them as a work around for
  // Sosia's query param max length limitation (see ezcater/sosia/issues/3)
  const map = {};
  let i = 0;

  []
    // remap declared custom variables with shorter names
    .concat(css.match(customPropertyRegExp))
    // remap custom variables injected into the page (via media iframe)
    .concat(body.match(customPropertyRegExp))
    .forEach(v => {
      const match = v?.slice(0, -1);
      if (!(match in map)) map[match] = `--_${i++}`;
    });

  const replaceKeyForValue = (prev, [key, value]) =>
    prev.replace(new RegExp(key, 'g'), value as string);

  const sortedKeys = Object.entries(map).sort(([a], [b]) => b.length - a.length);

  return {
    css: sortedKeys.reduce(replaceKeyForValue, css),
    body: sortedKeys.reduce(replaceKeyForValue, body),
    name,
  };
};

const minifyCss = ({css, body, name}) => {
  const cleanCss: any = new CleanCSS();
  const {styles: minified} = cleanCss.minify(css);
  return {
    css: minified,
    body,
    name,
  };
};

// Any visual regression tests that test media queries use the Media component
// to embed the content within an iframe that is sized to the breakpoint being tested.
// The Media component duplicates the css from the page into the iframe so that it's
// component renders with the necessary style, however this leads to duplicate css
// (once in the page head, and once in the iframe).
//
// This code bails out of sending the page head css if it detects an iframe within
// the page body (in order to keep the payload size down).
const skipCssWithIframeBody = ({css, body, name}) => {
  return {
    css: body.match(/iframe/) ? '' : css,
    body,
    name,
  };
};

const warnLargeSnapshot = page => {
  /* eslint-disable no-console */
  if (page.css.length + page.body.length > 24600) {
    console.warn(`The snapshot for "${page.name}" is too large.`);
    console.log({
      name: page.name,
      size: {body: page.body.length, css: page.css.length},
    });
  }
  return page;
};

export const decorate = target => ({
  execute(pages: any) {
    return target.execute(
      pages
        .map(rewriteCssCustomVars)
        .map(minifyCss)
        .map(skipCssWithIframeBody)
        .map(warnLargeSnapshot)
    );
  },
});
