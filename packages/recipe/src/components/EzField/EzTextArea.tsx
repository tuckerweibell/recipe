import React from 'react';
import theme from '../theme.config';
import EzTextInput from './EzTextInput';

const rows = size => {
  switch (size) {
    case 'small':
      return 2;
    case 'large':
      return 10;
    case 'medium':
    default:
      return 5;
  }
};

const textArea = theme.css({
  resize: 'vertical',
  '&&': {
    lineHeight: '1.5rem',
    padding: '$100 $150',
  },
});

const EzTextArea = React.forwardRef<HTMLTextAreaElement, {size}>(({size, ...rest}, ref) => (
  <EzTextInput ref={ref} {...rest} multiLine rows={rows(size)} className={textArea()} />
));

export default EzTextArea;
