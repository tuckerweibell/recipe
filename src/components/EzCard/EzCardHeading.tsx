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

type OptionalTitle = PropsWithTitle | PropsWithoutTitle;
type Props = React.HTMLAttributes<HTMLDivElement> & OptionalTitle;

const EzCardHeading: React.FC<Props> = ({title, subtitle, actions}) => {
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
