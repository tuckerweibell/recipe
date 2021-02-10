import React from 'react';
import {CardHeadingContainer, CardLayout} from './EzCard.styles';
import EzHeading from '../EzHeading';

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
    <CardLayout>
      <div>{heading}</div>
      <div>{actions}</div>
    </CardLayout>
  );

  return <CardHeadingContainer>{actions ? layout : heading}</CardHeadingContainer>;
};

EzCardHeading.displayName = 'EzCard';

export default EzCardHeading;
