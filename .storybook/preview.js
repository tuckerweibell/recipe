
import React from 'react';
import { addDecorator } from '@storybook/react';
import EzGlobalStyles from '../src/components/EzGlobalStyles';

addDecorator(story => (
  <>
    <EzGlobalStyles />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}