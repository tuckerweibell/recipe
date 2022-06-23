import React, {forwardRef} from 'react';
import theme from '../theme.config';
import EzLabel from '../EzLabel';
import {useUniqueId} from '../../utils/hooks';
import {domProps} from '../../utils';

const focusRing = theme.css({
  ':focus + &': {
    boxShadow: '$focus-ring',
    borderRadius: '$checkbox',
  },
});
const checkbox = theme.css({
  fill: '$checkbox-bg',
  stroke: '$checkbox-border',
  ':hover:not(:checked):not(:disabled) + svg &': {
    fill: '$checkbox-bg-hover',
    stroke: '$checkbox-border-hover',
  },
  ':active + svg &': {
    fill: '$checkbox-bg-down',
  },
  ':disabled + svg &': {
    fill: '$checkbox-bg-disabled',
  },
});
const checkmark = theme.css({
  fill: '$checkbox-checkmark',
  ':not(:checked) + svg &': {
    fill: 'transparent',
  },
  ':checked:disabled + svg &': {
    fill: '$checkbox-checkmark-disabled',
  },
});
const checkboxSurface = theme.css({
  display: 'flex',
  alignItems: 'center',
  // match height to line height to align checkbox with text
  height: '1.1875em',
  position: 'relative',
});
const checkboxInput = theme.css({
  opacity: 0,
  position: 'absolute',
  inset: 0,
  // offset to center line height to align checkbox with text
  margin: '0.1em 0',
  height: '$checkbox',
  width: '$checkbox',
});
const acknowledgementWrapper = theme.css({
  display: 'flex',
  '> *': {
    marginRight: '$100',
  },
});
const acknowledgementText = theme.css({
  margin: 0,
  fontFamily: '$checkbox-acknowledgement',
  fontSize: '$checkbox-acknowledgement',
  fontWeight: '$checkbox-acknowledgement',
});

type AcknowledgmentProps = {
  acknowledgement: true;
  terms?: React.ReactNode;
};

type CheckboxProps = {
  acknowledgement?: false;
  terms?: never;
};

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
} & (AcknowledgmentProps | CheckboxProps);

const Checkbox = forwardRef<any, any>(({label, className = '', ...additionalProps}, ref) => {
  const props = domProps({'aria-label': label, ...additionalProps}, checkboxInput());
  return (
    <span className={checkboxSurface({className})} ref={ref}>
      <input type="checkbox" {...props} />
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className={focusRing()}>
        <g fill="none" fillRule="evenodd">
          <path
            className={checkbox()}
            d="M3.846.5C2.702.5 2.244.588 1.77.842a2.226 2.226 0 0 0-.93.929C.589 2.244.5 2.702.5 3.846v8.308c0 1.144.088 1.602.342 2.075.214.402.527.715.929.93.473.253.931.341 2.075.341h8.308c1.144 0 1.602-.088 2.075-.342.402-.214.715-.527.93-.929.253-.473.341-.931.341-2.075V3.846c0-1.144-.088-1.602-.342-2.075a2.226 2.226 0 0 0-.929-.93C13.756.589 13.298.5 12.154.5H3.846z"
          />
          <path
            className={checkmark()}
            d="M6.525 11.576L3.142 8.214A.494.494 0 0 1 3 7.849c0-.149.047-.27.142-.365l.75-.729a.452.452 0 0 1 .354-.162c.142 0 .267.054.375.162l2.268 2.269 4.862-4.862A.515.515 0 0 1 12.126 4c.142 0 .26.054.354.162l.75.73a.494.494 0 0 1 .142.364c0 .149-.048.27-.142.365l-5.976 5.955a.462.462 0 0 1-.365.162.462.462 0 0 1-.364-.162z"
          />
        </g>
      </svg>
    </span>
  );
});

const EzCheckbox = forwardRef<HTMLDivElement, Props>(
  ({label, acknowledgement, terms, ...props}, ref) => {
    const uniqueId = useUniqueId();

    if (!acknowledgement) return <Checkbox label={label} {...props} ref={ref} />;

    const id = props.id || uniqueId;

    return (
      <div className={acknowledgementWrapper()} ref={ref}>
        <Checkbox {...props} id={id} />
        <div>
          <EzLabel htmlFor={id} use="primary">
            {label}
          </EzLabel>
          <p className={acknowledgementText()}>{terms}</p>
        </div>
      </div>
    );
  }
);

export default EzCheckbox;
