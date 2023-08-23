import React, {FC} from 'react';
import theme from '../theme.config';
import {EzCardSection} from '../EzCard';
import {clsx} from '../../utils';

const fullBleed = theme.css({
  '&&': {
    padding: 0,
  },
  table: {
    width: '100%',
  },
});

const cardWithHeading = theme.css({
  '&&': {
    paddingTop: '$250',
  },
});

type TableCardSectionProps = {
  className?: string;
  showCardWithoutHeading?: boolean;
};

const TableCardSection: FC<TableCardSectionProps> = ({
  children,
  className,
  showCardWithoutHeading,
}) => (
  <EzCardSection
    className={clsx(fullBleed(), className, !showCardWithoutHeading && cardWithHeading())}
  >
    {children}
  </EzCardSection>
);

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
TableCardSection.displayName = 'EzCardSection';

export default TableCardSection;
