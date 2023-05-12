import React, {useEffect} from 'react';
import {Stack} from '@mui/material';
import tocbot from 'tocbot';
import tocStyles from './TableOfContents.styles';

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
