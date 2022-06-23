import React from 'react';
import theme from '../theme.config';
import {Counter} from './Notifications';
import {clsx} from '../../utils';

const menuLink = theme.css({
  color: '$nav-text',
  fontWeight: '$regular',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '$200',
  paddingRight: '$600',
  paddingBottom: '$200',
  paddingLeft: '$300',
  width: '$full',
  position: 'relative',
  textDecoration: 'none',

  border: 'none',
  background: 'none',
  fontSize: '1em',
  textAlign: 'left',
  fontFamily: '$sans',

  '&:hover': {
    color: '$nav-text-hover',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 2px #3e90d6',
  },
});

const activeMenuLink = theme.css({
  color: '$nav-text-selected',
  backgroundColor: '$nav-bg-selected',
});

const iconPosition = theme.css({
  position: 'absolute',
  right: '$300',
});

const Link = React.forwardRef<HTMLElement, any>(
  ({href, as: component = href ? 'a' : 'button', ...props}, ref) => {
    return React.createElement(component, {...props, href, ref});
  }
);

const Notification = ({value}) => {
  return <Counter use={value === '★' ? 'marketing' : 'default'}>{value}</Counter>;
};

const Menu = ({link: {active, label, notifications, ...link}}: any) => (
  <Link
    {...link}
    className={clsx(menuLink(), active && activeMenuLink())}
    {...(link.to ? {activeClassName: 'active'} : {})}
  >
    <span>{label}</span>
    <span className={iconPosition()}>
      {Boolean(notifications) && <Notification value={notifications} />}
    </span>
  </Link>
);

export default Menu;
