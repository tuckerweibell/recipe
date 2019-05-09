import React, {useRef, useState} from 'react';
import {Container, Track} from './EzToggle.styles';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  onClick?: React.ChangeEventHandler;
  disabled?: boolean;
  id?: string;
};

const EzToggle: React.FC<Props> = props => {
  const [checked, setChecked] = useState(props.checked);
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
      <input {...props} ref={inputRef} type="checkbox" />
      <Track />
    </Container>
  );
};

export default EzToggle;
