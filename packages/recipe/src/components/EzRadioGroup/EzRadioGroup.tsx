/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, forwardRef, useMemo} from 'react';
import {EzRadioGroupMui} from './Implementations';
import {EzRadioGroupTheme, EzRadioGroupProps, Ref} from './EzRadioGroup.types';

export const RadioGroupThemeContext = createContext<EzRadioGroupTheme>({
  color: 'primary',
  variant: 'filled',
});

const EzRadioGroup = forwardRef<Ref, EzRadioGroupProps>(
  (
    {ariaLabel, children, defaultValue, gap, labelWidth, name, onChange, row, theme, value},
    ref
  ) => {
    const providerValue = useMemo(
      () => ({
        color: theme?.color ?? 'primary',
        variant: theme?.variant ?? 'filled',
      }),
      [theme?.color, theme?.variant]
    );

    return (
      <RadioGroupThemeContext.Provider value={providerValue}>
        <EzRadioGroupMui
          ref={ref}
          ariaLabel={ariaLabel}
          defaultValue={defaultValue}
          gap={gap}
          labelWidth={labelWidth}
          name={name}
          onChange={onChange}
          row={row}
          value={value}
        >
          {children}
        </EzRadioGroupMui>
      </RadioGroupThemeContext.Provider>
    );
  }
);

EzRadioGroup.displayName = 'EzRadioGroup';

EzRadioGroup.defaultProps = {
  ariaLabel: 'radio-button-group',
};

export default EzRadioGroup;
