import React from 'react';
import EzCard, {EzCardProps} from '../EzCard';
import EzButton from '../../EzButton';

const EzCardExample = (args?: EzCardProps) => (
  <EzCard
    actions={<EzButton>Select</EzButton>}
    imageMaxWidth={200}
    imagePosition="left"
    imageSrc="/images/tacos.jpg"
    subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
    title="Amuleto Mexican Table"
    {...args}
  >
    We pride ourselves on serving the most authentic Mexican food outside of Mexico.
  </EzCard>
);

const EzCardSimpleExample = (args?: EzCardProps) => (
  <EzCard subtitle="Upscale Authentic Flavor | 6 mi | $$$$" title="Amuleto Mexican Table" {...args}>
    We pride ourselves on serving the most authentic Mexican food outside of Mexico.
  </EzCard>
);

export {EzCardExample, EzCardSimpleExample};
