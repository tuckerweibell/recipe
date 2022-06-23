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

type TableCardSectionProps = {
  className?: string;
};

const TableCardSection: FC<TableCardSectionProps> = ({children, className}) => (
  <EzCardSection className={clsx(fullBleed(), className)}>{children}</EzCardSection>
);

// EzCard checks for a card section (by displayName), and will wrap if it can't find one
TableCardSection.displayName = EzCardSection.displayName;

export default TableCardSection;
