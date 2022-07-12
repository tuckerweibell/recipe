import React, {forwardRef, HTMLAttributes} from 'react';
import theme from '../../theme.config';

const button = theme.css({
  cursor: 'pointer',
  appearance: 'none',
  border: 'none',
  borderRadius: '$round',
  lineHeight: 1,
  outline: 'none',
  padding: '$dismiss-padding',
  margin: '-$dismiss-padding',
  backgroundColor: '$dismiss-background',

  '&:hover, &:focus': {
    backgroundColor: '$dismiss-translucent-dark',
  },

  '&:active': {
    backgroundColor: '$dismiss-translucent-darker',
  },
});

const visuallyHidden = theme.css({
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  margin: '0 -1px -1px 0',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap',
});

export interface Props extends HTMLAttributes<HTMLElement> {
  label?: string;
}

/**
 * A cross icon button.
 */
const CloseButton = forwardRef<HTMLButtonElement, Props>(
  ({label, className, children, ...props}, ref) => {
    return (
      <button type="button" {...props} className={button({className})} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 6l5-5 2 2-5 5 5 5-2 2-5-5-5 5-2-2 5-5-5-5 2-2 5 5z"
          />
        </svg>
        <span className={visuallyHidden()}>
          {label}
          {children}
        </span>
      </button>
    );
  }
);

/**
 * @component
 */
export default CloseButton;
