import CleanCSS from 'clean-css';
import lzString from 'lz-string';

const customPropertyRegExp = /(--[A-z][\w-]*):/g;
const vendorPrefixedRulesRegEx = /-(moz|o|webkit|ms|khtml)-(?!font-smoothing|osx|print|scrollbar|[A-z]*;).+?;/g;

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

// remove extra bloat caused by vendor prefixing (since tests currently run in chromium only)
const removeVendorPrefix = ({css, body, name}) => {
  return {
    css: css.replace(vendorPrefixedRulesRegEx, ''),
    body: body.replace(vendorPrefixedRulesRegEx, ''),
    name,
  };
};

const groupRootStyles = ({css, body, name}) => {
  const pattern = /\s*:root {([^}]+)}\s*:root {\s*([^}]+)}/g;
  const replacement = '\n:root {$1$2}';

  let output = css;
  let next;

  // eslint-disable-next-line no-cond-assign
  while ((next = output.replace(pattern, replacement)) !== output) output = next;

  return {
    css: output,
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

const compress = ({css, body, name}) => {
  const page = `<style>${css}</style><body>${body}</body>`;
  const encoded = lzString.compressToEncodedURIComponent(page);
  return {
    css: '',
    // including the font here is a bit of a hack... but let's face it, this whole file is 🤷‍♂️
    body: `
      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap" rel="stylesheet">
      <script type="module">
        import lzString from 'https://cdn.skypack.dev/lz-string';
        const decompressed = lzString.decompressFromEncodedURIComponent(\`${encoded}\`);
        const doc = new DOMParser().parseFromString(decompressed, 'text/html');
        document.replaceChild(doc.documentElement, document.documentElement);
        for (let script of Array.from(document.scripts)) {
          var clone = document.createElement('script');
          clone.appendChild(document.createTextNode(script.textContent));
          script.replaceWith(clone);
        }
      </script>
    `,
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
        .map(removeVendorPrefix)
        .map(groupRootStyles)
        .map(minifyCss)
        .map(skipCssWithIframeBody)
        .map(compress)
        .map(warnLargeSnapshot)
    );
  },
});
