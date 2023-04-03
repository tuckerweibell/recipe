import React from 'react';
import {Stack} from '@mui/material';
import EzTable from '../../EzTable';

type PropData = {
  name: string;
  types: string[];
  default?: string;
  description: string;
};

type PropsTableProps = {
  propsData: PropData[];
};

const PropsTable = ({propsData}: PropsTableProps) => {
  const MonospaceCell = ({text, color = 'inherit', deprecated = false}) => (
    <Stack
      color={color}
      fontFamily="monospace"
      fontSize="12px"
      sx={{textDecoration: deprecated ? 'line-through' : undefined}}
    >
      {text}
    </Stack>
  );
  const Name = ({item: {description, name}}) => (
    <MonospaceCell
      color="#ff585d"
      text={name}
      deprecated={description.includes('**Deprecated**')}
    />
  );
  const DefaultValue = ({item: {defaultValue}}) => <MonospaceCell text={defaultValue} />;
  const Description = ({item: {description}}) => <>{description}</>;
  const Types = ({item: {types}}) => (
    <MonospaceCell
      text={types.map((type: string, index: number) => (
        <Stack key={index} fontFamily="monospace">
          {`${index > 0 ? '| ' : ''}${type}`}
        </Stack>
      ))}
    />
  );

  return (
    <Stack>
      <EzTable
        columns={[
          {heading: 'Name', key: 'name', component: Name},
          {heading: 'Type', key: 'types', component: Types},
          {heading: 'Default', key: 'defaultValue', component: DefaultValue},
          {heading: 'Description', key: 'description', component: Description},
        ]}
        items={propsData}
      />

      <Stack direction="row">
        <MonospaceCell color="#ff585d" text="*" />
        <MonospaceCell text="&nbsp;required" />
      </Stack>
    </Stack>
  );
};

PropsTable.displayName = 'PropsTable';

export default PropsTable;
