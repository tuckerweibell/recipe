import React, {forwardRef, useRef} from 'react';
import theme from '../theme.config';
import EzLabel from '../EzLabel';
import EzInlineFeedback from '../EzInlineFeedback';
import EzLayout from '../EzLayout';
import {useUniqueId} from '../../utils/hooks';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  onClick?: React.ChangeEventHandler;
  disabled?: boolean;
  id?: string;
  label?: string;
  status?: 'error' | 'progress' | 'success';
};

const toggle = theme.css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
        transition: 'opacity 0.25s',
      },
    },
  },
});

const visuallyHidden = theme.css({srOnly: 'true'});

const track = theme.css({
  position: 'relative',
  display: 'inline-block',
  width: '42px',
  height: '22px',
  border: '1px solid $toggle-track-border',
  borderRadius: '16px',
  backgroundColor: '$toggle-bg',
  boxShadow: '$sm',
  transitionProperty: 'background-color, border-color',
  transitionDuration: '0.2s',

  'input:focus + &': {
    '&::after': {boxShadow: '$focus-ring'},
  },

  '&::after': {
    content: "' '",
    display: 'inline-block',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '16px',
    height: '16px',
    border: '1px solid $toggle-track-border',
    borderRadius: '50%',
    backgroundColor: 'white',
    transitionProperty: 'border-color, left',
    transitionDuration: '0.2s',
    boxSizing: 'border-box',
  },

  '&::before': {
    content: "' '",
    display: 'inline-block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundPosition: '80% center',
    backgroundRepeat: 'no-repeat',
    backgroundImage:
      'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDIuNTk4TDYuNDUuMTQ4YS41LjUgMCAwIDEgLjcwNyAwbC42OTUuNjk1YS41LjUgMCAwIDEgMCAuNzA3TDUuNDAyIDRsMi40NSAyLjQ1YS41LjUgMCAwIDEgMCAuNzA3bC0uNjk1LjY5NWEuNS41IDAgMCAxLS43MDcgMEw0IDUuNDAybC0yLjQ1IDIuNDVhLjUuNSAwIDAgMS0uNzA3IDBsLS42OTUtLjY5NWEuNS41IDAgMCAxIDAtLjcwN0wyLjU5OCA0IC4xNDggMS41NWEuNS41IDAgMCAxIDAtLjcwN0wuODQzLjE0OGEuNS41IDAgMCAxIC43MDcgMEw0IDIuNTk4eiIgZmlsbD0iIzhCOTlBNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)',
  },

  'input:checked + &': {
    borderColor: '$toggle-border-selected',
    backgroundColor: '$toggle-bg-selected',

    '&::after': {
      borderColor: '$toggle-border-selected',
      left: '50%',
    },
    '&::before': {
      backgroundPosition: '20% center',
      backgroundImage:
        'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41MjUgNy41NzZMLjE0MiA0LjIxNEEuNDk0LjQ5NCAwIDAgMSAwIDMuODQ5YzAtLjE0OS4wNDctLjI3LjE0Mi0uMzY1bC43NS0uNzI5YS40NTIuNDUyIDAgMCAxIC4zNTQtLjE2MmMuMTQyIDAgLjI2Ny4wNTQuMzc1LjE2MmwyLjI2OCAyLjI2OUw4Ljc1MS4xNjJBLjUxNS41MTUgMCAwIDEgOS4xMjYgMGMuMTQyIDAgLjI2LjA1NC4zNTQuMTYybC43NS43M2EuNDk0LjQ5NCAwIDAgMSAuMTQyLjM2NGMwIC4xNDktLjA0OC4yNy0uMTQyLjM2NUw0LjI1NCA3LjU3NmEuNDYyLjQ2MiAwIDAgMS0uMzY1LjE2Mi40NjIuNDYyIDAgMCAxLS4zNjQtLjE2MnoiIGZpbGw9IiMzQTgxQkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)',
    },
  },
});

const EzToggle = forwardRef<HTMLInputElement, Props>(({id, label, status, ...props}, ref) => {
  const uniqueId = useUniqueId();
  const idOrDefault = id || uniqueId;

  const inputRef = useRef(null);

  const handleClick = event => {
    const checkbox = inputRef.current;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
    }
  };
  const inputProps = visuallyHidden(props as any).props;

  return (
    <EzLayout layout="basic">
      <div
        role="presentation"
        onClick={handleClick}
        className={toggle({disabled: props.disabled})}
        ref={ref}
      >
        <input {...inputProps} id={idOrDefault} ref={inputRef} type="checkbox" />
        <div className={track()} />
      </div>
      {label && (
        <EzLabel className={toggle({disabled: props.disabled})} htmlFor={idOrDefault} use="primary">
          {label}
        </EzLabel>
      )}
      {status && <EzInlineFeedback use={status} />}
    </EzLayout>
  );
});

export default EzToggle;
