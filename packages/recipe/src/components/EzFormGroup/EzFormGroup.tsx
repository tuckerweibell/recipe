/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, forwardRef, useMemo} from 'react';
import {EzFormGroupMui} from './Implementations';
import {EzFormGroupTheme, EzFormGroupProps, Ref} from './EzFormGroup.types';

export const FormGroupThemeContext = createContext<EzFormGroupTheme>({
  color: 'primary',
  variant: 'filled',
});

const EzFormGroup = forwardRef<Ref, EzFormGroupProps>(
  ({ariaLabel, children, gap, labelWidth, row, theme}, ref) => {
    const providerValue = useMemo(
      () => ({
        color: theme?.color ?? 'primary',
        variant: theme?.variant ?? 'filled',
      }),
      [theme?.color, theme?.variant]
    );

    return (
      <FormGroupThemeContext.Provider value={providerValue}>
        <EzFormGroupMui ref={ref} ariaLabel={ariaLabel} gap={gap} labelWidth={labelWidth} row={row}>
          {children}
        </EzFormGroupMui>
      </FormGroupThemeContext.Provider>
    );
  }
);

EzFormGroup.displayName = 'EzFormGroup';

EzFormGroup.defaultProps = {
  ariaLabel: 'form-group',
};

export default EzFormGroup;
