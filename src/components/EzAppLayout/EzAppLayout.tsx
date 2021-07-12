import React, {createContext, useContext} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzAppLayout.theme.config';
import EzGlobalStyles from '../EzGlobalStyles';
import {VariantProps} from '../../utils/responsiveProps';

type Props = VariantProps<typeof style>;
type Layout = Props['layout'];

export const EzAppLayoutContext = createContext<Layout>('full');

const style = theme.css({
  variants: {
    layout: {
      full: {},
      centered: {
        margin: '0 auto',
        maxWidth: '$app-layout-max-width',
      },
    },
  },
});

const frame = theme.css({
  width: '$full',
  minHeight: '100vh',
  display: 'flex',
  position: 'relative',
  flexWrap: 'nowrap',
  flexDirection: 'column',
});

const EzAppLayout: React.FC<Props> = ({children, layout}) => {
  return (
    <div className={frame()}>
      <EzGlobalStyles />
      <EzAppLayoutContext.Provider value={layout}>{children}</EzAppLayoutContext.Provider>
    </div>
  );
};

EzAppLayout.displayName = 'EzAppLayout';

export const MaxWidth = ({children}) => {
  const layout = useContext(EzAppLayoutContext);

  return (
    <Style ruleset={theme}>
      <div className={style({layout})}>{children}</div>
    </Style>
  );
};

export default EzAppLayout;
