import React, {FC, type PropsWithChildren} from 'react';
import theme from '../theme.config';
import {clsx} from '../../utils';

type OpenProps = {
  opened: boolean;
};

type HamburgerProps = PropsWithChildren<
  OpenProps & {
    onClick: (ev: React.SyntheticEvent<any>) => void;
    className: string;
  }
>;

const hamburgerBox = theme.css({
  position: 'relative',
  display: 'inline-block',
  width: '40px',
  height: '24px',
});

const activeHamburger = theme.css({
  '&, &:after, &:before': {
    backgroundColor: '$white',
  },

  transform: 'translate3d(0, 10px, 0) rotate(135deg)',
  transitionDelay: '0.075s',

  '&::before': {
    transitionDelay: '0s',
    opacity: '0',
  },

  '&::after': {
    transform: 'translate3d(0, -20px, 0) rotate(-270deg)',
    transitionDelay: '0.075s',
  },
});

const hamburgerInner = theme.css({
  display: 'block',
  top: '2px',
  marginTop: '-2px',

  '&, &::before, &::after': {
    width: '40px',
    height: '4px',
    backgroundColor: '$white',
    borderRadius: '4px',
    position: 'absolute',
    transitionProperty: 'transform',
  },

  '&::before, &::after': {
    content: "''",
    display: 'block',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'ease',
  },

  transitionDuration: '0.275s',
  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  '&::before': {
    top: '10px',
    transition: 'opacity 0.125s 0.275s ease',
  },

  '&::after': {
    top: '20px',
    bottom: '-10px',
    transition: 'transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
});

const toggleButton = theme.css({
  padding: '15px',
  cursor: 'pointer',
  height: '70px',

  transitionProperty: 'opacity, filter',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'linear',

  font: 'inherit',
  color: 'inherit',
  textTransform: 'none',
  backgroundColor: 'transparent',
  border: 0,
  margin: 0,
  overflow: 'visible',

  '&:hover': {
    opacity: 0.7,
  },
});

const Hamburger: FC<HamburgerProps> = ({opened, onClick, className, children}) => (
  <button
    type="button"
    className={clsx(toggleButton(), className)}
    onClick={onClick}
    aria-label="Menu"
  >
    <span className={hamburgerBox()}>
      <span className={clsx(hamburgerInner(), opened && activeHamburger())} />
    </span>
    {children}
  </button>
);

export default Hamburger;
