import React from 'react';
import {linkTo} from '@storybook/addon-links';
import {Unstyled} from '@storybook/blocks';
import {Box, Card, CardActionArea, CardContent, Stack, Typography} from '@mui/material';
import FullBleed from '../FullBleed';
import getSnapshot from './getSnapshot';
import {ezTheme} from '../../../src/themes';

const inputComponents = ['EzButton', 'EzCheckbox', 'EzRadio', 'EzField', 'EzLabel'];
const dataDisplayComponents = [
  'EzBadge',
  'EzChip',
  'EzOrderSummary',
  'EzRating',
  'EzSearchInput',
  'EzSegmentedControl',
  'EzTable',
  'EzTimeline',
  'EzToggle',
];
const feedbackComponents = [
  'EzAlert',
  'EzModal',
  'EzFlashMessage',
  'EzPopover',
  'EzProgress',
  'EzTooltip',
];
const surfacesComponents = ['EzCard', 'EzWell'];
const navigationComponents = ['EzCarousel', 'EzLink', 'EzNavigation', 'EzProgressTracker'];
const layoutComponents = [
  'EzAppLayout',
  'EzBanner',
  'EzBlankState',
  'EzFormLayout',
  'EzLayout',
  'EzPage',
  'EzPageHeader',
];
const typographyComponents = ['EzBaseFontSizeCompatibility', 'EzHeading', 'EzIcon', 'EzTextStyle'];

const LibrarySection = ({sectionName, category, components}) => (
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

const LibraryItem = ({snapshot, link, name}) => (
  <Card sx={{height: 200, width: 200, mr: 3, mb: 3}}>
    <CardActionArea sx={{height: '100%', justifyContent: 'space-between'}} onClick={linkTo(link)}>
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

const ComponentLibrary = () => {
  return (
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
        <LibrarySection
          sectionName="feedback"
          category="Feedback"
          components={feedbackComponents}
        />
        <LibrarySection
          sectionName="surfaces"
          category="Surfaces"
          components={surfacesComponents}
        />
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
};

export default ComponentLibrary;
