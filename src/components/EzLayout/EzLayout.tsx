import React, {HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzLayout.theme.config';
import {domProps, clsx} from '../../utils';

const descendants = '& > *';
const self = '&&';

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

const reset: any = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  width: 'auto',
  [descendants]: {
    flexBasis: 'auto',
    flexGrow: 0,
  },
};

// making the parent wrapper element flex avoids margin collapse
const box = theme.css({display: 'flex'});

const styles = theme.css({
  display: 'flex',
  gap: '$layout-gap',
  flexGrow: 1,

  variants: {
    layout: {
      basic: {
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      right: {
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      equal: {
        alignItems: 'center',
        justifyContent: 'normal',
        [descendants]: {
          flexBasis: 0,
          flexGrow: 1,
        },
      },
      split: {
        alignItems: 'center',
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
        justifyContent: 'normal',
        flexBasis: 0,
        [descendants]: {
          flexGrow: 0,
        },
      },
      cluster: {
        alignItems: 'center',
        flexWrap: 'wrap',
      },
    },
    alignY: {
      top: {[self]: {alignItems: 'flex-start'}},
      center: {[self]: {alignItems: 'center'}},
      bottom: {[self]: {alignItems: 'flex-end'}},
      stretch: {[self]: {alignItems: 'stretch'}},
    },
    alignX: {left: {}, center: {}, right: {}, stretch: {}},
    columns: generateColumns(32) as Record<number, Record<string, unknown>>,
  },

  compoundVariants: [
    {layout: 'basic', css: {[self]: {justifyContent: 'flex-start'}}},
    {layout: 'right', css: {[self]: {justifyContent: 'flex-end'}}},
    {layout: 'equal', css: {[self]: {justifyContent: 'normal'}}},
    {layout: 'split', css: {[self]: {justifyContent: 'space-between'}}},
    {layout: 'tile', css: {[self]: {justifyContent: 'normal'}}},

    {layout: 'stack', alignX: 'left', css: {[self]: {alignItems: 'flex-start'}}},
    {layout: 'stack', alignX: 'center', css: {[self]: {alignItems: 'center'}}},
    {layout: 'stack', alignX: 'right', css: {[self]: {alignItems: 'flex-end'}}},
    {layout: 'stack', alignX: 'stretch', css: {[self]: {alignItems: 'stretch'}}},

    {layout: 'cluster', alignX: 'left', css: {[self]: {justifyContent: 'flex-start'}}},
    {layout: 'cluster', alignX: 'center', css: {[self]: {justifyContent: 'center'}}},
    {layout: 'cluster', alignX: 'right', css: {[self]: {justifyContent: 'flex-end'}}},
  ],
});

const responsiveResets = theme.css({
  variants: {
    layout: {
      basic: reset,
      right: reset,
      equal: {...reset, [descendants]: {flexGrow: 1, flexBasis: 0}},
      split: reset,
      stack: {...reset, flexDirection: 'column'},
      tile: {...reset, flexWrap: 'wrap', [descendants]: {flexGrow: 0}},
      cluster: {...reset, flexWrap: 'wrap'},
    },
  },
});

type Props = Pick<Parameters<typeof styles>[0], 'layout' | 'alignX' | 'alignY' | 'columns'> &
  Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'>;

/**
 * Layout provide common ways to arrange content in a single horizontal row.
 */
const EzLayout: React.FC<Props> = ({children, className, ...initialProps}: any) => {
  const props = domProps({...initialProps, className}, box()) as any;

  // for responsive layouts, we need to "reset" the layout between breakpoints to remove unwanted styles from the prior layout
  const conditionalReset =
    typeof initialProps.layout !== 'string' ? responsiveResets(initialProps) : undefined;

  // Note: The layout component needs to the respect white space that might be applied by a parent layout component.
  // A wrapper element is included here to insulate content from the applied negative margin.
  const el = (
    <div {...props}>
      <div className={clsx(conditionalReset, styles(initialProps))}>{children}</div>
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
