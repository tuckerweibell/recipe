import React, {HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzLayout.theme.config';
import {domProps, responsiveProps} from '../../utils';

const descendants = '& > *';

const generateColumns = (length: number): any => {
  return Array.from({length}).reduce((columns: any, _next, i) => {
    const numOfCols = i + 1;
    const colWidth = numOfCols === 1 ? 100 : (100 / numOfCols).toFixed(3);
    return {
      ...columns,
      [numOfCols]: {
        [descendants]: {
          flexBasis: `calc(${colWidth}% - $layout-gap)`,
        },
      },
    };
  }, {});
};

// making the parent wrapper element flex avoids margin collapse
const box = theme.css({display: 'flex'});

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
        alignItems: 'normal',
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
    columns: generateColumns(32) as Record<number, Record<string, unknown>>,
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
  ],
});

type Props = Pick<Parameters<typeof styles>[0], 'layout' | 'alignX' | 'alignY' | 'columns'> &
  Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>;

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
