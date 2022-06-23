import React, {forwardRef, Fragment} from 'react';
import theme from '../theme.config';
import EzRadioButton from '../EzRadioButton';
import {EzSuperRadioButtonsProps} from './EzSuperRadioButtons.types';
import EzTextStyle from '../EzTextStyle';
import EzLayout from '../EzLayout';
import {useUniqueId} from '../../utils/hooks';

const getId = (name, {value}) => `${name}-${value}`;

const group = theme.css({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
});

const srOnly = theme.css({srOnly: 'true'});
const fullWidth = theme.css({width: '$full'});

const radio = theme.css({
  position: 'absolute',
  top: '$150',
  right: '$150',
});

const image = theme.css({
  margin: 0,
  maxWidth: '$super-radio-image-size',
  maxHeight: '$super-radio-image-size',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const imageWrapper = theme.css({
  display: 'flex',
  placeItems: 'center',
  width: '$super-radio-image-size',
  height: '$super-radio-image-size',
  marginBottom: '$250',
});

const button = theme.css({
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '$super-radio-button-size',
  minHeight: '$super-radio-button-size',
  fontWeight: '$super-radio',
  color: '$super-radio-text',
  border: '1px solid $super-radio-border',
  borderRadius: '$regular',
  boxShadow: '$sm',
  backgroundColor: '$super-radio-bg',
  padding: '$400 $200 $200',
  alignItems: 'center',

  '&:focus-within': {
    boxShadow: '$focus-ring',
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$super-radio-bg-selected',
        borderColor: '$super-radio-border-selected',
      },
      false: {},
    },
    disabled: {
      true: {cursor: 'default'},
      false: {},
    },
  },

  compoundVariants: [
    {
      disabled: 'true',
      css: {
        backgroundColor: '$super-radio-bg-disabled',
        borderColor: '$super-radio-border',
      },
    },
    {
      disabled: 'false',
      checked: 'false',
      css: {
        '&:hover': {
          backgroundColor: '$super-radio-bg-hover',
          borderColor: '$super-radio-border-hover',
          color: '$super-radio-text-hover',
        },
      },
    },
  ],
});

const EzSuperRadioButtons = forwardRef<HTMLDivElement, EzSuperRadioButtonsProps>(
  ({options, label, value, onChange}, ref) => {
    const id = useUniqueId();
    return (
      <div className={group()} ref={ref} role="radiogroup" aria-labelledby={`radiogroup-${id}`}>
        <span className={srOnly()} id={`radiogroup-${id}`}>
          {label}
        </span>
        <EzLayout layout="cluster" alignY="stretch" {...{className: fullWidth()}}>
          {options.map(option => (
            <Fragment key={option.value}>
              <label
                key={option.value}
                htmlFor={getId(id, option)}
                className={button({
                  checked: option.value === value,
                  disabled: option.disabled,
                })}
              >
                <span className={radio()}>
                  <EzRadioButton
                    width="24"
                    height="24"
                    checked={option.value === value}
                    id={getId(id, option)}
                    name={id}
                    onChange={() => onChange && onChange(option.value)}
                    disabled={option.disabled}
                  />
                </span>
                {option.imageSrc && (
                  <div className={imageWrapper()}>
                    <img
                      className={image({disabled: option.disabled})}
                      src={option.imageSrc}
                      alt=""
                    />
                  </div>
                )}
                <EzTextStyle align="center" use={option.disabled ? 'subdued' : undefined}>
                  {option.label}
                </EzTextStyle>
              </label>
            </Fragment>
          ))}
        </EzLayout>
      </div>
    );
  }
);

EzSuperRadioButtons.displayName = 'EzSuperRadioButtons';

export default EzSuperRadioButtons;
