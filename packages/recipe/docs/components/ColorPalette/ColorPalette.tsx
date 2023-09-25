import React, {FC} from 'react';
import {ColorItem, ColorPalette as ColorPaletteSB} from '@storybook/blocks';
import {CommonColors, useTheme} from '@mui/material';
import {ColorPaletteProps} from './ColorPalette.types';

type Colors =
  | string[]
  | {
      [key: string]: string;
    };

const themeProperties = [
  {
    title: 'Primary',
    property: 'primary',
    subtitle: 'Used for most frequently displayed primary interface elements.',
  },
  {
    title: 'Secondary',
    property: 'secondary',
    subtitle: 'Used for secondary interface elements.',
  },
  {
    title: 'Error',
    property: 'error',
    subtitle: 'Used for interface elements that the user should be made aware of.',
  },
  {
    title: 'Warning',
    property: 'warning',
    subtitle: 'Used for potentially dangerous actions or important messages.',
  },
  {
    title: 'Alert',
    property: 'alert',
    subtitle: 'Used to present information to the user that may be important.',
  },
  {
    title: 'Info',
    property: 'info',
    subtitle: 'Used to present information to the user that is not necessarily important.',
  },
  {
    title: 'Success',
    property: 'success',
    subtitle: 'Used to indicate the successful completion of an action that the user triggered.',
  },
  {
    title: 'Neutral',
    property: 'neutral',
    subtitle: 'Used to present information to the user.',
  },
];

const extractColors = (colors: CommonColors, key: string) =>
  Object.entries(colors).reduce((extractedColors, [colorKey, color]) => {
    if (colorKey.startsWith(key)) extractedColors[colorKey] = color;
    return extractedColors;
  }, {});

const ColorPalette: FC<ColorPaletteProps> = ({showThemeProperties = false}) => {
  const theme = useTheme();

  return (
    <ColorPaletteSB>
      {showThemeProperties ? (
        themeProperties.map(({title, subtitle, property}) => (
          <ColorItem
            key={title}
            title={title}
            subtitle={subtitle}
            colors={theme.palette[property] as unknown as Colors}
          />
        ))
      ) : (
        <>
          <ColorItem
            title="Black"
            subtitle=""
            colors={extractColors(theme.palette.common, 'black')}
          />
          <ColorItem
            title="Blue"
            subtitle=""
            colors={extractColors(theme.palette.common, 'blue')}
          />
          <ColorItem
            title="Green"
            subtitle=""
            colors={extractColors(theme.palette.common, 'green')}
          />
          <ColorItem
            title="Grey"
            subtitle=""
            colors={extractColors(theme.palette.common, 'grey')}
          />
          <ColorItem
            title="Orange"
            subtitle=""
            colors={extractColors(theme.palette.common, 'orange')}
          />
          <ColorItem
            title="Purple"
            subtitle=""
            colors={extractColors(theme.palette.common, 'purple')}
          />
          <ColorItem title="Red" subtitle="" colors={extractColors(theme.palette.common, 'red')} />
          <ColorItem
            title="Yellow"
            subtitle=""
            colors={extractColors(theme.palette.common, 'yellow')}
          />
          <ColorItem
            title="White"
            subtitle=""
            colors={extractColors(theme.palette.common, 'white')}
          />
        </>
      )}
    </ColorPaletteSB>
  );
};

export default ColorPalette;
