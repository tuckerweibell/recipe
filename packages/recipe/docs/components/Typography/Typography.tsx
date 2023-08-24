import React, {FC} from 'react';
import {Stack, useTheme} from '@mui/material';
import {Source, Typeset} from '@storybook/blocks';
import {TypographyProps} from './Typography.types';

const Typography: FC<TypographyProps> = ({fontType}) => {
  const theme = useTheme();
  const fontFamily = theme.typography[fontType];

  return (
    <Stack>
      <Source language="jsx" code={`fontFamily: ${fontFamily};`} />

      <Typeset
        fontSizes={[16 as unknown as string, 24 as unknown as string, 32 as unknown as string]}
        fontWeight={400}
        sampleText="Recipe: Delicious UI components from ezCater."
        fontFamily={fontFamily}
      />
    </Stack>
  );
};

export default Typography;
