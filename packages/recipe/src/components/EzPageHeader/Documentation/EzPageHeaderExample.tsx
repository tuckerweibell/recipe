import React, {useState} from 'react';
import dedent from 'ts-dedent';
import {EzCard} from '../../EzCard';
import {EzPage} from '../../EzPage';
import {Labelled} from '../../EzLink/EzLink.types';
import EzPageHeader, {type EzPageHeaderProps} from '../EzPageHeader';

const EzPageHeaderExample = (args?: EzPageHeaderProps) => {
  const [tabs] = useState([
    {label: 'All', accessibilityLabel: 'All orders'},
    {label: 'Accepted', accessibilityLabel: 'Accepted orders'},
    {label: 'Draft', accessibilityLabel: 'Draft orders'},
  ]);
  const [selected, setSelected] = useState<Labelled>(tabs[0]);
  return (
    <>
      <EzPageHeader subnav={{tabs, selected, onChange: setSelected}} {...args} />
      <EzPage>
        <EzCard>
          <div>{selected && selected.accessibilityLabel}</div>
        </EzCard>
      </EzPage>
    </>
  );
};

const EzPageHeaderExampleJSX = () => dedent`
  const {FileDownload, Printer} = require('@ezcater/icons');
  
  const [tabs] = useState([
    {label: 'All', accessibilityLabel: 'All orders'},
    {label: 'Accepted', accessibilityLabel: 'Accepted orders'},
    {label: 'Draft', accessibilityLabel: 'Draft orders'},
  ]);
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <>
      <EzPageHeader
        actions={<EzButton>Accept Order</EzButton>}
        breadcrumb={{
          label: 'Back to Orders',
          accessibilityLabel: 'Orders list',
          onClick: () => {},
        }}
        status={<EzChip label="Verified" variant="success" />}
        subheader={
          <EzLayout layout="right">
            <EzButton variant="text" startIcon={<EzIcon icon={Printer} />}>
              Print
            </EzButton>
            <EzButton variant="text" startIcon={<EzIcon icon={FileDownload} />}>
              Download
            </EzButton>
          </EzLayout>
        }
        subnav={{tabs, selected, onChange: setSelected}}
        title="Order # XYZ-123"
      />
      <EzPage>
        <EzCard>
          <div>{selected && selected.accessibilityLabel}</div>
        </EzCard>
      </EzPage>
    </>
  );
`;

export {EzPageHeaderExample, EzPageHeaderExampleJSX};
