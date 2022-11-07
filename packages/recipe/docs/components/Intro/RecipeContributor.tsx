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
    target="_blank"
    rel="noreferrer"
    alignItems="center"
    direction="row"
    spacing={1}
    underline="none"
  >
    <Avatar
      alt={name}
      src={imgSrc}
      sx={{width: 48, height: 48, border: `2px solid ${ezTheme.palette.common.white}`}}
    />

    <Stack>
      <Box color={ezTheme.palette.common.white} fontWeight="600">
        {name}
      </Box>

      <Box color={ezTheme.palette.common.neutral140} fontSize="0.875rem" fontWeight="300">
        {role}
      </Box>
    </Stack>
  </Stack>
);

export default RecipeContributor;
