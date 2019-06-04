import React, {useRef, useState} from 'react';
import {Container, Track} from './EzToggle.styles';
import EzLabel from '../EzLabel';
import {useUniqueId} from '../../utils/hooks';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  onClick?: React.ChangeEventHandler;
  disabled?: boolean;
  id?: string;
  label?: string;
};

const EzToggle: React.FC<Props> = ({id, label, ...props}) => {
  const [checked, setChecked] = useState(props.checked);

  const uniqueId = useUniqueId();
  const idOrDefault = id || uniqueId;

  const inputRef = useRef(null);

  const handleClick = event => {
    const checkbox = inputRef.current;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    setChecked('checked' in props ? props.checked : checkbox.checked);
  };

  return (
    <Container disabled={props.disabled} checked={checked} onClick={handleClick}>
      <input {...props} id={idOrDefault} ref={inputRef} type="checkbox" />
      <Track />
      {label && (
        <EzLabel htmlFor={idOrDefault} position="right" as="label">
          {label}
        </EzLabel>
      )}
    </Container>
  );
};

export default EzToggle;
