import React, {createElement} from 'react';
import {Box, Card, CardActionArea, CardContent, Stack, Typography} from '@mui/material';
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

const allSnapshots = require.context('../../../src/components', true, /\Snapshot\.tsx$/);

const getSnapshotComponent = (componentName: string) => {
  const file = allSnapshots
    .keys()
    .find(snapshotComponentName => snapshotComponentName.endsWith(`${componentName}Snapshot.tsx`));
  if (file) return createElement(allSnapshots(file).default, {});

  return <div></div>;
};

const LibrarySection = ({sectionName, components}) => (
  <>
    <Box
      color={ezTheme.palette.common.neutral150}
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
          link={`/?path=/docs/data-display-${componentName.toLowerCase()}`}
          snapshot={getSnapshotComponent(componentName)}
        />
      ))}
    </Stack>
  </>
);

const LibraryItem = ({snapshot, link, name}) => (
  <Card sx={{height: 200, width: 200, mr: 3, mb: 3}}>
    <CardActionArea sx={{height: '100%', justifyContent: 'space-between'}} href={link}>
      <CardContent>
        <Stack alignItems="center">
          <Stack justifyContent="space-around" minHeight={140} sx={{'*': {cursor: 'pointer'}}}>
            {snapshot}
          </Stack>

          <Box mt={1} fontSize="0.8em" fontWeight={600} color={ezTheme.palette.common.green}>
            {name}
          </Box>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
);

const ComponentLibrary = () => {
  return (
    <Stack bgcolor={ezTheme.palette.common.neutral120} p={6}>
      <Typography variant="h5" pb={3}>
        Component Library
      </Typography>

      <LibrarySection sectionName="inputs" components={inputComponents} />
      <LibrarySection sectionName="data display" components={dataDisplayComponents} />
      <LibrarySection sectionName="feedback" components={feedbackComponents} />
      <LibrarySection sectionName="surfaces" components={surfacesComponents} />
      <LibrarySection sectionName="navigation" components={navigationComponents} />
      <LibrarySection sectionName="layout" components={layoutComponents} />
      <LibrarySection sectionName="typography" components={typographyComponents} />
    </Stack>
  );
};

export default ComponentLibrary;
