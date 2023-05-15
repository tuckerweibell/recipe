import React, {FC} from 'react';
import {linkTo} from '@storybook/addon-links';
import {Unstyled} from '@storybook/blocks';
import {Box, Card, CardActionArea, CardContent, Stack, Typography} from '@mui/material';
import {LibraryItemProps, LibrarySectionProps} from './ComponentLibrary.types';
import FullBleed from '../FullBleed';
import getSnapshot from './getSnapshot';
import {ezTheme} from '../../../src/themes';
import {
  dataDisplayComponents,
  feedbackComponents,
  inputComponents,
  layoutComponents,
  navigationComponents,
  surfacesComponents,
  typographyComponents,
} from './categories';

const LibrarySection: FC<LibrarySectionProps> = ({sectionName, category, components}) => (
  <>
    <Box
      color={ezTheme.palette.common.grey150}
      fontSize="0.9em"
      fontWeight={600}
      letterSpacing={2}
      mb={3}
      textTransform="uppercase"
    >
      {sectionName}
    </Box>

    <Stack direction="row" flexWrap="wrap" height="100%">
      {components.map(componentName => (
        <LibraryItem
          key={componentName}
          name={componentName}
          link={`${category}/${componentName}`}
          snapshot={getSnapshot(componentName)}
        />
      ))}
    </Stack>
  </>
);

export const LibraryItem: FC<LibraryItemProps> = ({snapshot, link, name}) => (
  <Card sx={{height: 200, width: 200, mr: 3, mb: 3}}>
    <CardActionArea sx={{justifyContent: 'space-between'}} onClick={linkTo(link)}>
      <CardContent>
        <Stack alignItems="center">
          <Stack justifyContent="space-around" minHeight={140} sx={{'*': {cursor: 'pointer'}}}>
            <Unstyled>{snapshot}</Unstyled>
          </Stack>

          <Box mt={1} fontSize="0.8em" fontWeight={600} color={ezTheme.palette.common.green100}>
            {name}
          </Box>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
);

const ComponentLibrary: FC<unknown> = () => (
  <FullBleed>
    <Stack bgcolor={ezTheme.palette.common.grey120} px={12} py={8}>
      <Typography variant="h5" pb={3} textTransform="uppercase">
        Component Library
      </Typography>

      <LibrarySection sectionName="inputs" category="Input" components={inputComponents} />
      <LibrarySection
        sectionName="data display"
        category="Data Display"
        components={dataDisplayComponents}
      />
      <LibrarySection sectionName="feedback" category="Feedback" components={feedbackComponents} />
      <LibrarySection sectionName="surfaces" category="Surfaces" components={surfacesComponents} />
      <LibrarySection
        sectionName="navigation"
        category="Navigation"
        components={navigationComponents}
      />
      <LibrarySection sectionName="layout" category="Layout" components={layoutComponents} />
      <LibrarySection
        sectionName="typography"
        category="Typography"
        components={typographyComponents}
      />
    </Stack>
  </FullBleed>
);

export default ComponentLibrary;
