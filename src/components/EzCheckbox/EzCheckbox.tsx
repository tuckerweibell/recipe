import React from 'react';
import SvgCheckbox from './EzCheckbox.styles';
import {useUniqueId} from '../../utils/hooks';

type Props = {
  label: string;
  onChange: React.ChangeEventHandler;
  checked: boolean;
};

const EzCheckbox: React.SFC<Props> = ({label, checked, onChange}) => {
  const id = useUniqueId();
  return (
    <SvgCheckbox htmlFor={id}>
      <span>{label}</span>
      <input checked={checked} onChange={onChange} type="checkbox" id={id} />
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </SvgCheckbox>
  );
};

export default EzCheckbox;
