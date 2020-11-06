// NOTE: using commonjs syntax here (and avoiding JSX) to allow placeholder code
// to be easily shared with recipe specs
const {jsx} = require('@emotion/core');

const Placeholder = ({width = 'auto', height = 120, minWidth, minHeight, style}) =>
  jsx(
    'div',
    {
      css: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'hsla(0, 0%, 20%, 0.08)',
        border: `2px solid hsla(0, 0%, 20%, 0.3)`,
        width,
        height,
        minWidth,
        minHeight,
      },
      style
    },
    jsx(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        css: {width: '100%', height: '100%', position: 'absolute'},
      },
      jsx('line', {
        css: {strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.1)'},
        x1: 0,
        y1: 0,
        x2: '100%',
        y2: '100%',
      }),
      jsx('line', {
        css: {strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.1)'},
        x1: '100%',
        y1: 0,
        x2: 0,
        y2: '100%',
      })
    )
  );

module.exports = Placeholder;
