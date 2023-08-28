import React, {FC, type HTMLAttributes, type ReactNode} from 'react';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import theme from '../theme.config';

const box = theme.css({position: 'relative'});

type PropsWithoutTitle = {
  actions?: never;
  subtitle?: never;
  title?: never;
  titleIcon?: never;
};

type PropsWithTitle = {
  actions?: ReactNode;
  subtitle?: string;
  title: string;
  titleIcon?: ReactNode;
};

type Props = PropsWithTitle | PropsWithoutTitle;
type DOMProps = HTMLAttributes<HTMLElement>;

export type HeadingProps = DOMProps & Props;

const EzCardHeading: FC<HeadingProps> = ({title, subtitle, actions, titleIcon}) => {
  const heading = title && (
    <EzLayout layout="basic" alignY="top">
      {titleIcon}
      <EzHeading size="3" subheading={subtitle}>
        {title}
      </EzHeading>
    </EzLayout>
  );

  const layout = actions && (
    <EzLayout layout="cluster" css={{justifyContent: 'space-between', alignItems: 'baseline'}}>
      <div>{heading}</div>
      <div>{actions}</div>
    </EzLayout>
  );

  return <div className={box()}>{actions ? layout : heading}</div>;
};

EzCardHeading.displayName = 'EzCardHeading';

export default EzCardHeading;
