import React, {forwardRef} from 'react';
import theme from '../theme.config';
import EzTextInput from '../EzField/EzTextInput';

const searchInput = theme.css({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '12px center, calc(100% - 10px) center',
  backgroundImage: '$search-input-background-image',
  '&&': {
    paddingLeft: '$search-input-padding-left',
  },
});

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const EzSearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <EzTextInput ref={ref} {...props} className={searchInput()} />
));

export default EzSearchInput;
