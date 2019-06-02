import React, {forwardRef, Fragment} from 'react';
import {useUniqueId} from '../../utils/hooks';
import {
  EzSuperRadioButtonsGroup,
  EzSuperRadioButtonsLabel,
  EzSuperRadioButtonsItem,
  EzSuperRadioButtonsImageWrapper,
  EzSuperRadioButtonsImage,
  EzSuperRadioButtonsItemLabel,
  RadioButton,
} from './EzSuperRadioButtons.styles';
import {EzSuperRadioButtonsProps} from './EzSuperRadioButtons.types';

const getId = (name, {value}) => `${name}-${value}`;

const EzSuperRadioButtons = forwardRef<HTMLElement, EzSuperRadioButtonsProps>(
  ({options, label, value, onChange}, ref) => {
    const id = useUniqueId();
    return (
      <EzSuperRadioButtonsGroup ref={ref} role="radiogroup" aria-labelledby={`radiogroup-${id}`}>
        <EzSuperRadioButtonsLabel id={`radiogroup-${id}`}>{label}</EzSuperRadioButtonsLabel>
        {options.map(option => (
          <Fragment key={option.value}>
            <input
              id={getId(id, option)}
              type="radio"
              name={id}
              value={option.value}
              {...(onChange
                ? {checked: option.value === value}
                : {defaultChecked: option.value === value})}
              onChange={e => onChange && onChange(e.target.value)}
              disabled={option.disabled}
            />
            <EzSuperRadioButtonsItem key={option.value} htmlFor={getId(id, option)}>
              <RadioButton width="24" height="24" checked={option.value === value} />
              {option.imageSrc && (
                <EzSuperRadioButtonsImageWrapper>
                  <EzSuperRadioButtonsImage src={option.imageSrc} alt="" />
                </EzSuperRadioButtonsImageWrapper>
              )}
              <EzSuperRadioButtonsItemLabel>{option.label}</EzSuperRadioButtonsItemLabel>
            </EzSuperRadioButtonsItem>
          </Fragment>
        ))}
      </EzSuperRadioButtonsGroup>
    );
  }
);

EzSuperRadioButtons.displayName = 'EzSuperRadioButtons';

export default EzSuperRadioButtons;
