import {ezTheme} from '../../../src/themes';

const isActiveLiStyles = {
  '&::before': {
    bgcolor: ezTheme.palette.secondary.main,
    content: '""',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '3px',
  },
};

const tocLinkStyles = {
  color: ezTheme.palette.secondary.main,
  fontFamily: 'Montserrat',
  fontSize: '0.8rem',
};

const tocListItemStyles = {
  background: 'linear-gradient(to right, #f0faf7, #f0faf7) no-repeat right',
  backgroundSize: '0% auto',
  fontWeight: 600,
  p: '0 10px',
  position: 'relative',
  transition: 'background-size 0.3s, background-position 0s',
  '&:hover, &.is-active-li': {
    backgroundPosition: 'left',
    backgroundSize: '100% auto',
  },
};

const tocListStyles = {
  listStyle: 'none',
};

const tocStyles = {
  bgcolor: '#ffffff90',
  m: 2,
  padding: 1,
  position: 'fixed',
  right: 20,
  transition: 'all 0.3s ease-in',
  width: '260px',
  zIndex: 2,
  '.toc-list': tocListStyles,
  '.toc-list-item': tocListItemStyles,
  '.toc-link': tocLinkStyles,
  '.is-active-li': isActiveLiStyles,
};

export default tocStyles;
