import React from 'react';
import {CardContainer, SectionContainer} from './EzCard.styles';
import EzLink from '../EzLink';
import EzCardFooter from './EzCardFooter';
import EzCardSection from './EzCardSection';
import EzCardHeading from './EzCardHeading';
import EzCardImage from './EzCardImage';
import {filterValidProps} from '../../utils';

function isEzCardSection(element) {
  return element?.type?.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children?.[0] || children)) return children;

  return <EzCardSection>{children}</EzCardSection>;
}

type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

type ExpandableCardFooter = {
  expandLabel: string;
  collapseLabel: string;
  onClick: React.MouseEventHandler;
  isExpanded?: boolean;
};

type Position = 'top' | 'right' | 'left';
type ImageProps =
  | {imageSrc: string; imagePosition?: Position}
  | {imageSrc?: never; imagePosition?: never};

type CardProps = (HeadingProps & ImageProps) & {
  children: React.ReactNode;
  horizontal?: boolean;
  accent?: 'info';
  expandable?: ExpandableCardFooter;
  size?: 'small';
};

const isExpandableCardFooter = (expandable: any): expandable is ExpandableCardFooter =>
  expandable && (expandable as ExpandableCardFooter).expandLabel !== undefined;

/**
 * Cards are the primary means of grouping sections on a page.
 */
const EzCard: React.FC<CardProps> = ({
  title,
  subtitle,
  accent,
  actions,
  expandable,
  horizontal,
  children,
  imageSrc,
  imagePosition = 'top',
  size,
  ...props
}) => (
  <CardContainer
    {...filterValidProps(props)}
    accent={accent}
    imagePosition={imageSrc && imagePosition}
    size={size}
  >
    {imageSrc && <EzCardImage src={imageSrc} position={imagePosition} />}
    <div>
      {title && <EzCardHeading {...{actions, title, subtitle}} />}
      <SectionContainer horizontal={horizontal}>{wrappedChildren(children)}</SectionContainer>
      {isExpandableCardFooter(expandable) && (
        <EzCardFooter>
          <EzLink href="#" onClick={expandable.onClick}>
            {expandable.isExpanded && expandable.collapseLabel
              ? expandable.collapseLabel
              : expandable.expandLabel}
          </EzLink>
        </EzCardFooter>
      )}
    </div>
  </CardContainer>
);

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
