import React, {cloneElement, forwardRef, useEffect} from 'react';
import warning from 'tiny-warning';
import {EzButtonLegacyProps, Ref} from '../EzButton.types';
import theme from '../../theme.config';
import EzTooltip from '../../EzTooltip';
import {domProps} from '../../../utils';

const spin = theme.keyframes({
  '0%': {transform: 'rotate(0)'},
  '100%': {transform: 'rotate(360deg)'},
});

const button = theme.css({
  cursor: 'pointer',
  display: 'inline-block',
  outline: 0,
  fontSize: '$button-text',
  fontWeight: '$button-bold',
  fontFamily: '$defaultFont',
  lineHeight: '$button-leading',
  minHeight: '1rem',
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '-webkit-tap-highlight-color': 'transparent',

  variants: {
    disabled: {
      true: {
        cursor: 'default',
        opacity: '$shadows$opacity45',
        pointerEvents: 'none',
      },
    },
    use: {
      primary: {
        color: '$button-text-primary',
        backgroundColor: '$button-bg-primary',
        borderColor: '$button-border-primary',
        borderRadius: '$button-primary',
        borderWidth: '$button-primary',
        borderStyle: '$button-primary',
        boxShadow: '$button-primary',
        padding: '$button-py $button-px',
        '&:focus': {
          boxShadow: '$button-primary-focus-ring',
          backgroundColor: '$button-bg-primary-focus',
          borderColor: '$button-bg-primary-focus',
        },
        '&:hover': {
          color: '$button-text-primary-hover',
          backgroundColor: '$button-bg-primary-hover',
          borderColor: '$button-border-primary-hover',
        },
        '&:active': {
          color: '$button-text-primary-down',
          backgroundColor: '$button-bg-primary-down',
          borderColor: '$button-border-primary-down',
        },
      },
      secondary: {
        color: '$button-text-secondary',
        backgroundColor: '$button-bg-secondary',
        borderColor: '$button-border-secondary',
        borderRadius: '$button-secondary',
        borderWidth: '$button-secondary',
        borderStyle: '$button-secondary',
        boxShadow: '$button-secondary',
        padding: '$button-py $button-px',
        '&:focus': {
          boxShadow: '$button-secondary-focus-ring',
          backgroundColor: '$button-bg-secondary-focus',
          borderColor: '$button-border-secondary-focus',
          borderWidth: '$button-secondary',
        },
        '&:hover': {
          color: '$button-text-secondary-hover',
          backgroundColor: '$button-bg-secondary-hover',
          borderColor: '$button-border-secondary-hover',
        },
        '&:active': {
          color: '$button-text-secondary-down',
          backgroundColor: '$button-bg-secondary-down',
          borderColor: '$button-border-secondary-down',
        },
        '&:hover&:focus': {
          borderColor: '$button-border-secondary-focus',
          borderWidth: '$button-secondary-focus',
        },
      },
      tertiary: {
        color: '$button-text-tertiary',
        backgroundColor: '$button-bg-tertiary',
        borderColor: '$button-border-tertiary',
        borderRadius: '$button-tertiary',
        borderWidth: '$button-tertiary',
        borderStyle: '$button-tertiary',
        boxShadow: '$button-tertiary',
        lineHeight: '1rem',
        padding: 0,
        '&:focus': {
          outline: 'auto',
          backgroundColor: '$button-bg-tertiary-focus',
          borderColor: '$button-border-tertiary-focus',
        },
        '&:hover': {
          textDecoration: 'underline',
          color: '$button-text-tertiary-hover',
          backgroundColor: '$button-bg-tertiary-hover',
          borderColor: '$button-border-tertiary-hover',
        },
        '&:active': {
          color: '$button-text-tertiary-down',
          backgroundColor: '$button-bg-tertiary-down',
          borderColor: '$button-border-tertiary-down',
        },
      },
    },
    destructive: {
      true: {},
    },
    loading: {
      true: {
        position: 'relative',

        /* spinner */
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          borderRadius: '$round',
          height: '$button-spinner',
          width: '$button-spinner',
          margin: '-$button-spinner 0 0 -$button-spinner',
          borderStyle: 'solid',
          borderWidth: '$button-spinner',
        },

        '&::before': {
          borderColor: '$button-spinner-bg',
        },

        '&::after': {
          borderColor: '#fff transparent transparent',
          boxShadow: '$button-spinner',
          animation: `${spin} 0.6s linear infinite`,
        },
      },
    },
  },

  compoundVariants: [
    {
      use: 'primary',
      destructive: 'true',
      css: {
        color: '$button-text-primary-destructive',
        backgroundColor: '$button-bg-primary-destructive',
        borderColor: '$button-border-primary-destructive',
        '&:focus': {
          backgroundColor: '$button-bg-primary-destructive-focus',
          borderColor: '$button-bg-primary-destructive-focus',
        },
        '&:hover': {
          color: '$button-text-primary-destructive-hover',
          backgroundColor: '$button-bg-primary-destructive-hover',
          borderColor: '$button-border-primary-destructive-hover',
        },
        '&:active': {
          color: '$button-text-primary-destructive-down',
          backgroundColor: '$button-bg-primary-destructive-down',
          borderColor: '$button-border-primary-destructive-down',
        },
      },
    },
    {
      use: 'secondary',
      destructive: 'true',
      css: {
        color: '$button-text-secondary-destructive',
        backgroundColor: '$button-bg-secondary-destructive',
        borderColor: '$button-border-secondary-destructive',
        '&:focus': {
          backgroundColor: '$button-bg-secondary-destructive-focus',
          borderColor: '$button-bg-secondary-destructive-focus',
        },
        '&:hover': {
          color: '$button-text-secondary-destructive-hover',
          backgroundColor: '$button-bg-secondary-destructive-hover',
          borderColor: '$button-border-secondary-destructive-hover',
        },
        '&:active': {
          color: '$button-text-secondary-destructive-down',
          backgroundColor: '$button-bg-secondary-destructive-down',
          borderColor: '$button-border-secondary-destructive-down',
        },
      },
    },
    {
      use: 'tertiary',
      destructive: 'true',
      css: {
        color: '$button-text-tertiary-destructive',
        backgroundColor: '$button-bg-tertiary-destructive',
        borderColor: '$button-border-tertiary-destructive',
        '&:focus': {
          backgroundColor: '$button-bg-tertiary-destructive-focus',
          borderColor: '$button-bg-tertiary-destructive-focus',
        },
        '&:hover': {
          color: '$button-text-tertiary-destructive-hover',
          backgroundColor: '$button-bg-tertiary-destructive-hover',
          borderColor: '$button-border-tertiary-destructive-hover',
        },
        '&:active': {
          color: '$button-text-tertiary-destructive-down',
          backgroundColor: '$button-bg-tertiary-destructive-down',
          borderColor: '$button-border-tertiary-destructive-down',
        },
      },
    },
    {
      use: 'primary',
      loading: 'true',
      css: {color: 'transparent'},
    },
  ],
});
const icon = theme.css({
  display: 'flex',
  padding: 2,
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '1em',
    height: '1em',
    marginLeft: 2,
    fontSize: '16px',
  },
  '> * + *': {
    marginLeft: 8,
  },
});
const disabledButtonWrapper = theme.css({display: 'inline-block'});

/** @deprecated */
const EzButtonLegacy = forwardRef<Ref, EzButtonLegacyProps>(({loading, ...initProps}: any, ref) => {
  useEffect(() => {
    warning(
      false,
      '*Recipe Deprecation*. A deprecated legacy version of EzButton is being used. Please use the new EzButton.'
    );
  }, []);

  const props = {...initProps, disabled: initProps.disabled || loading};
  const additionalProps = domProps(props);

  let buttonElement = (
    <button type="button" {...additionalProps} className={button({...props, loading})} ref={ref}>
      {props.use === 'tertiary' && props.icon ? (
        <span className={icon()}>
          {cloneElement(props.icon, {
            'aria-hidden': true,
            focusable: false,
          })}
          {props.children && <span>{props.children}</span>}
        </span>
      ) : (
        props.children
      )}
    </button>
  );

  if (props.disabled && props.disabledMessage) {
    buttonElement = (
      <EzTooltip message={props.disabledMessage}>
        <div className={disabledButtonWrapper()}>{buttonElement}</div>
      </EzTooltip>
    );
  }

  return <>{buttonElement}</>;
});

/**
 * defaultProps
 * @property {string} use - Buttons are considered secondary by default.
 */
EzButtonLegacy.defaultProps = {
  use: 'secondary',
};

EzButtonLegacy.displayName = 'EzButtonLegacy';

/**
 * @component
 */
export default EzButtonLegacy;
