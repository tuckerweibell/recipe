import React from 'react';
import Container from './EzCheckbox.styles';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const EzCheckbox: React.FC<Props> = ({label, checked, ...rest}) => (
  <Container>
    <input checked={checked} type="checkbox" aria-label={label} {...rest} />
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M3.846.5C2.702.5 2.244.588 1.77.842a2.226 2.226 0 0 0-.93.929C.589 2.244.5 2.702.5 3.846v8.308c0 1.144.088 1.602.342 2.075.214.402.527.715.929.93.473.253.931.341 2.075.341h8.308c1.144 0 1.602-.088 2.075-.342.402-.214.715-.527.93-.929.253-.473.341-.931.341-2.075V3.846c0-1.144-.088-1.602-.342-2.075a2.226 2.226 0 0 0-.929-.93C13.756.589 13.298.5 12.154.5H3.846z"
          stroke="#CED4D9"
          fill="#FFF"
        />
        <path
          d="M6.525 11.576L3.142 8.214A.494.494 0 0 1 3 7.849c0-.149.047-.27.142-.365l.75-.729a.452.452 0 0 1 .354-.162c.142 0 .267.054.375.162l2.268 2.269 4.862-4.862A.515.515 0 0 1 12.126 4c.142 0 .26.054.354.162l.75.73a.494.494 0 0 1 .142.364c0 .149-.048.27-.142.365l-5.976 5.955a.462.462 0 0 1-.365.162.462.462 0 0 1-.364-.162z"
          fill="#3E90D6"
        />
      </g>
    </svg>
  </Container>
);

export default EzCheckbox;
