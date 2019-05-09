import React from 'react';
import SvgCheckbox from './EzCheckbox.styles';
import {useUniqueId} from '../../utils/hooks';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const EzCheckbox: React.FC<Props> = ({id, label, checked, ...rest}) => {
  const uniqueId = useUniqueId();
  return (
    <SvgCheckbox htmlFor={id || uniqueId}>
      <span>{label}</span>
      <input checked={checked} type="checkbox" id={id || uniqueId} {...rest} />
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
