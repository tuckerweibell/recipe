import React, {forwardRef, useRef, useState} from 'react';
import {Container, Track} from './EzToggle.styles';
import EzLabel from '../EzLabel';
import EzInlineFeedback from '../EzInlineFeedback';
import {useUniqueId} from '../../utils/hooks';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  onClick?: React.ChangeEventHandler;
  disabled?: boolean;
  id?: string;
  label?: string;
  status?: 'error' | 'progress' | 'success';
};

const EzToggle = forwardRef<HTMLElement, Props>(({id, label, status, ...props}, ref) => {
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
    <Container disabled={props.disabled} checked={checked} onClick={handleClick} innerRef={ref}>
      <input {...props} id={idOrDefault} ref={inputRef} type="checkbox" />
      <Track />
      {label && (
        <EzLabel htmlFor={idOrDefault} position="right" as="label">
          {label}
        </EzLabel>
      )}
      {status && <EzInlineFeedback use={status} />}
    </Container>
  );
});

export default EzToggle;
