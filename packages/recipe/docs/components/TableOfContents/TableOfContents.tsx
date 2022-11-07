import React, {useState} from 'react';
import {Box, List, ListItem, ListItemButton, Stack} from '@mui/material';

const ListItemStyles = {
  background: 'linear-gradient(to right, #f0faf7, #f0faf7) no-repeat right',
  backgroundSize: '0% auto',
  color: '#00b373',
  fontSize: '0.9em',
  fontWeight: 600,
  margin: '-5px 0',
  textDecoration: 'none',
  transition: 'background-size 0.3s, background-position 0s',
  '&:hover': {
    backgroundSize: '100% auto',
    backgroundPosition: 'left',
  },
};

const activeLinkStyles = {
  bgcolor: '#00b373',
  borderRadius: '2px',
  height: '15px',
  marginLeft: '-3px',
  width: '3px',
};

type TableOfContentsLink = {
  label: string;
  href: string;
};

type TableOfContentsProps = {
  links: TableOfContentsLink[];
};

const TableOfContents = ({links}: TableOfContentsProps) => {
  const [activeLink, setActiveLink] = useState(links[0]);

  return (
    <Stack m={2} padding={1} position="fixed" right={20} zIndex={2} bgcolor="#ffffff90">
      <List dense>
        {links.map(link => (
          <ListItem key={link.href}>
            {activeLink === link && <Box component="div" sx={activeLinkStyles} />}

            <ListItemButton
              onClick={() => setActiveLink(link)}
              component="a"
              href={link.href}
              target="_self"
              sx={ListItemStyles}
            >
              {link.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TableOfContents;
