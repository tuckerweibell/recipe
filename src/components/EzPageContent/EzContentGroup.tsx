import React from 'react';
import styled from '@emotion/styled';
import {horizontal, vertical} from './EzContentGroup.styles';

type ContentGroupProps = {
  children: React.ReactNode;
  horizontal?: boolean;
};
/**
 * Content groups are used to organize sections of content within EzPageContent.
 */
const EzContentGroup = styled.div<ContentGroupProps>(horizontal, vertical);

EzContentGroup.displayName = 'EzContentGroup';

/**
 * @component
 */
export default EzContentGroup;
