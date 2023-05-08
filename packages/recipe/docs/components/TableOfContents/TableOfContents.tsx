import React, {useEffect} from 'react';
import {Stack} from '@mui/material';
import tocbot from 'tocbot';
import {ezTheme} from '../../../src/themes';

const tocListStyles = {
  listStyle: 'none',
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

const tocLinkStyles = {
  color: ezTheme.palette.primary.main,
  fontFamily: 'Montserrat',
  fontSize: '0.9em',
};

const isActiveLiStyles = {
  '&:before': {
    bgcolor: ezTheme.palette.primary.main,
    content: '" "',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '3px',
  },
};

const tocStyles = {
  bgcolor: '#ffffff90',
  m: 2,
  padding: 1,
  position: 'fixed',
  right: 20,
  transition: 'all 0.3s ease-in',
  zIndex: 2,
  '.toc-list': tocListStyles,
  '.toc-list-item': tocListItemStyles,
  '.toc-link': tocLinkStyles,
  '.is-active-li': isActiveLiStyles,
};

const TableOfContents = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.sbdocs-content',
      headingSelector: 'h2',
      onClick: event => event.preventDefault(),
    });
  }, []);

  return <Stack className="js-toc" sx={tocStyles} />;
};

export default TableOfContents;
