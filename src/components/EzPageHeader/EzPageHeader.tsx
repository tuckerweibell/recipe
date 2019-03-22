import React from 'react';
import EzHeading from '../EzHeading';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import {base, actions} from './EzPageHeader.styles';
import styled from '../../themes/styled';

type Breadcrumb = {
  label: string;
  onClick: React.MouseEventHandler;
};

type HeaderProps = {
  actions?: React.ReactNode;
  breadcrumb?: Breadcrumb;
  status?: React.ReactNode;
  title: string;
};

const StyledHeading = styled.div(base as any);
const StyledActions = styled.div(actions as any);

/**
 * EzPageHeader is used to build the outer structure of a page including the page title and associated actions.
 */
const EzPageHeader: React.FC<HeaderProps> = ({actions, breadcrumb, status, title}) => (
  <StyledHeading>
    <EzLayout
      layout={{
        base: 'stack',
        medium: 'equal',
      }}
    >
      <div>
        {breadcrumb && (
          <EzButton use="tertiary" onClick={breadcrumb.onClick}>
            ← {breadcrumb.label}
          </EzButton>
        )}
        <EzLayout
          layout={{
            base: 'stack',
            medium: 'basic',
          }}
        >
          <EzHeading size="1">{title}</EzHeading>
          <div>{status}</div>
        </EzLayout>
      </div>
      {actions && <StyledActions>{actions}</StyledActions>}
    </EzLayout>
  </StyledHeading>
);

/**
 * @component
 */
export default EzPageHeader;
