import React, {HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzLayout.theme.config';
import {domProps, responsiveProps} from '../../utils';
import {VariantProps} from '../../utils/responsiveProps';

const descendants = '& > *';

const generateColumns = (length: number): any => {
  return Array.from({length}).map((_next, i) => {
    const numOfCols = i + 1;
    return {
      layout: 'tile',
      columns: numOfCols,
      css: {
        [descendants]: {
          flexBasis:
            numOfCols === 1
              ? '100%'
              : `calc(100% / ${numOfCols} - $layout-gap / calc(${numOfCols} / ${i}))`,
        },
      },
    };
  });
};

// making the parent wrapper element flex avoids margin collapse
const box = theme.css({display: 'flex'});

// prettier-ignore
// eslint-disable-next-line
type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;

const styles = theme.css({
  display: 'flex',
  gap: '$layout-gap',
  flexGrow: 1,
  alignItems: 'center',

  variants: {
    layout: {
      basic: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
      equal: {
        [descendants]: {
          flexBasis: 0,
          flexGrow: 1,
        },
      },
      split: {
        justifyContent: 'space-between',
      },
      stack: {
        alignItems: 'stretch',
        flexDirection: 'column',
        width: '$full',
      },
      tile: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexBasis: 0,
        [descendants]: {
          flexGrow: 0,
        },
      },
      cluster: {
        flexWrap: 'wrap',
      },
    },
    alignY: {
      top: {alignItems: 'flex-start'},
      center: {alignItems: 'center'},
      bottom: {alignItems: 'flex-end'},
      stretch: {alignItems: 'stretch'},
    },
    alignX: {left: {}, center: {}, right: {}, stretch: {}},
    columns: {} as Record<Columns, any>,
  },

  compoundVariants: [
    {layout: 'basic', css: {justifyContent: 'flex-start'}},
    {layout: 'right', css: {justifyContent: 'flex-end'}},
    {layout: 'equal', css: {justifyContent: 'normal'}},
    {layout: 'split', css: {justifyContent: 'space-between'}},
    {layout: 'tile', css: {justifyContent: 'normal'}},

    {layout: 'stack', alignX: 'left', css: {alignItems: 'flex-start'}},
    {layout: 'stack', alignX: 'center', css: {alignItems: 'center'}},
    {layout: 'stack', alignX: 'right', css: {alignItems: 'flex-end'}},
    {layout: 'stack', alignX: 'stretch', css: {alignItems: 'stretch'}},

    {layout: 'cluster', alignX: 'left', css: {justifyContent: 'flex-start'}},
    {layout: 'cluster', alignX: 'center', css: {justifyContent: 'center'}},
    {layout: 'cluster', alignX: 'right', css: {justifyContent: 'flex-end'}},

    ...generateColumns(32),
  ],
});

type Props = VariantProps<typeof styles> & Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>;

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const EzLayout: React.FC<Props> = ({children, className, ...initialProps}: any) => {
  const props = responsiveProps(initialProps, 'layout', 'alignX', 'alignY', 'columns');

  // Note: The layout component needs to the respect white space that might be applied by a parent layout component.
  // A wrapper element is included here to insulate content from the applied negative margin.
  const el = (
    <div {...domProps({...props, className}, box())}>
      <div className={styles(props)}>{children}</div>
    </div>
  );

  return <Style ruleset={theme}>{el}</Style>;
};

/**
 * defaultProps
 * @property {string} layout - uses the basic layout by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzLayout.defaultProps = {
  layout: 'basic',
};

export default EzLayout;
