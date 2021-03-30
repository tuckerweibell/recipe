import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzRadioButton.theme.config';
import {domProps} from '../../utils';

const focusRing = theme.css({
  ':focus + &': {
    boxShadow: '$focus-ring',
    borderRadius: '$round',
  },
});
const box = theme.css({
  fill: '$radiobutton-bg',
  stroke: '$radiobutton-border',
  ':hover + svg &': {
    fill: '$radiobutton-bg-hover',
    stroke: '$radiobutton-border-hover',
  },
  ':active + svg &': {
    fill: '$radiobutton-bg-down',
  },
  ':disabled + svg &': {
    fill: '$radiobutton-bg-disabled',
  },
});
const check = theme.css({
  fill: '$radiobutton-checkmark',
  ':not(:checked) + svg &': {
    fill: 'transparent',
  },
  ':checked:disabled + svg &': {
    fill: '$radiobutton-checkmark-disabled',
  },
});
const radiobuttonSurface = theme.css({
  display: 'flex',
  alignItems: 'center',
  // match height to line height to align checkbox with text
  height: '1.1875em',
  position: 'relative',
});
const radiobuttonInput = theme.css({
  opacity: 0,
  position: 'absolute',
  inset: 0,
  // offset to center line height to align checkbox with text
  margin: '0.1em 0',
  height: '$radiobutton',
  width: '$radiobutton',
});

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
};

const EzRadioButton = forwardRef<HTMLSpanElement, Props>(
  ({label, className = '', width = 16, height = 16, ...additionalProps}, ref) => {
    const props: any = domProps({'aria-label': label, ...additionalProps}, radiobuttonInput());
    return (
      <Style ruleset={theme}>
        <span className={radiobuttonSurface({className})} ref={ref}>
          <input type="radio" {...props} />
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={focusRing()}
          >
            <g fill="none" fillRule="evenodd">
              <path d="M8 .5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" className={box()} />
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 1 1 0-8z" className={check()} />
            </g>
          </svg>
        </span>
      </Style>
    );
  }
);

export default EzRadioButton;
