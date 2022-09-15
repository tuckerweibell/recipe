import React, {forwardRef} from 'react';
import {EzRadioGroupMui} from './Implementations';
import {EzRadioGroupProps, Ref} from './EzRadioGroup.types';

const EzRadioGroup = forwardRef<Ref, EzRadioGroupProps>(
  ({ariaLabel, children, defaultValue, name, onChange, row, value}, ref) => (
    <EzRadioGroupMui
      ref={ref}
      ariaLabel={ariaLabel}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      row={row}
      value={value}
    >
      {children}
    </EzRadioGroupMui>
  )
);

EzRadioGroup.displayName = 'EzRadioGroup';

EzRadioGroup.defaultProps = {
  ariaLabel: 'radio-button-group',
};

export default EzRadioGroup;
