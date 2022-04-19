import React from 'react';
import {Box, Stack} from '@mui/material';
import EzIcon from '../EzIcon';
import {ezColors, EzColor, EzColorsCategories} from '../../themes/ezColors';
import CopyButton from './CopyButton';
import {faCircleCheck} from './ColorTokenIcons';

interface ColorTokensProps {
  category: EzColorsCategories;
}

interface ColorTokenProps {
  colorKey: string;
  colorProps: EzColor;
}

const ColorToken: React.FC<ColorTokenProps> = ({colorKey, colorProps}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    bgcolor="common.white"
    color="common.black"
    p={1}
    mb={1}
  >
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack
        bgcolor={colorProps.color}
        height={48}
        width={48}
        alignItems="center"
        borderRadius="4px"
        justifyContent="space-around"
      >
        <Box color={colorProps.contrastColor}>
          <EzIcon icon={faCircleCheck} />
        </Box>
      </Stack>

      <Box>
        {colorProps.name} {colorProps.alternateName && <>({colorProps.alternateName})</>}
      </Box>
    </Stack>

    <Stack alignItems="flex-end">
      <Stack direction="row" alignItems="center">
        <Box fontWeight={700} mr={1}>
          <code>{colorProps.color}</code>
        </Box>

        <CopyButton textToCopy={colorProps.color} />
      </Stack>

      <Stack direction="row" alignItems="center">
        <Box mr={1}>
          <code>{`common.${colorKey}`}</code>
        </Box>

        <CopyButton textToCopy={`common.${colorKey}`} />
      </Stack>
    </Stack>
  </Stack>
);

const ColorTokens: React.FC<ColorTokensProps> = ({category}) => (
  <>
    {Object.entries(ezColors[category]).map(([colorKey, colorProps]) => (
      <ColorToken key={colorKey} colorKey={colorKey} colorProps={colorProps} />
    ))}
  </>
);

export default ColorTokens;
