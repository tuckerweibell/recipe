import React from 'react';
import {Avatar, Box, Link, Stack} from '@mui/material';
import {ezTheme} from '../../../src/themes';

interface RecipeContributorProps {
  href: string;
  imgSrc: string;
  name: string;
  role: string;
}

const RecipeContributor = ({href, imgSrc, name, role}: RecipeContributorProps) => (
  <Stack
    component={Link}
    href={href}
    alignItems="center"
    direction="row"
    minWidth="200px"
    rel="noreferrer"
    gap={1}
    target="_blank"
    underline="none"
    sx={{
      transition: 'all .2s ease-in-out',
      '&:hover': {transform: 'scale(1.1)'},
    }}
  >
    <Avatar
      alt={name}
      src={imgSrc}
      sx={{
        border: `2px solid ${ezTheme.palette.common.white}`,
        height: 48,
        width: 48,
      }}
    />

    <Stack>
      <Box color={ezTheme.palette.common.white} fontWeight="600">
        {name}
      </Box>

      <Box color={ezTheme.palette.common.grey140} fontSize="0.875rem" fontWeight="300">
        {role}
      </Box>
    </Stack>
  </Stack>
);

export default RecipeContributor;
