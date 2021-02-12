import React from 'react';
import {CardHeadingContainer} from './EzCard.styles';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';

type PropsWithoutTitle = {
  subtitle?: never;
  actions?: never;
  title?: never;
};

type PropsWithTitle = {
  subtitle?: string;
  actions?: React.ReactNode;
  title: string;
};

type Props = PropsWithTitle | PropsWithoutTitle;
type DOMProps = React.HTMLAttributes<HTMLElement>;

export type HeadingProps = DOMProps & Props;

const EzCardHeading: React.FC<HeadingProps> = ({title, subtitle, actions}) => {
  const heading = title && (
    <EzHeading size="3" subheading={subtitle}>
      {title}
    </EzHeading>
  );

  const layout = actions && (
    <EzLayout layout="cluster" css={{justifyContent: 'space-between', alignItems: 'baseline'}}>
      <div>{heading}</div>
      <div>{actions}</div>
    </EzLayout>
  );

  return <CardHeadingContainer>{actions ? layout : heading}</CardHeadingContainer>;
};

EzCardHeading.displayName = 'EzCard';

export default EzCardHeading;
