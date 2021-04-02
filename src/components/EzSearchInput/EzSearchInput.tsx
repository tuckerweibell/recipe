import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzSearchInput.theme.config';
import EzTextInput from '../EzField/EzTextInput';

const searchInput = theme.css({
  paddingLeft: '$search-input-padding-left',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '12px center, calc(100% - 10px) center',
  backgroundImage: '$search-input-background-image',
});

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const EzSearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Style ruleset={theme}>
    <EzTextInput ref={ref} {...props} className={searchInput()} />
  </Style>
));

export default EzSearchInput;
