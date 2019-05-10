import React from 'react';
import Container from './EzCheckbox.styles';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const EzCheckbox: React.FC<Props> = ({label, checked, ...rest}) => (
  <Container>
    <input checked={checked} type="checkbox" aria-label={label} {...rest} />
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
  </Container>
);

export default EzCheckbox;
