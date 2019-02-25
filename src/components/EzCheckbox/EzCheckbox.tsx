import React from 'react';

type Props = {
  'aria-label': string;
  onChange: React.ChangeEventHandler;
  checked: boolean;
};

const EzCheckbox: React.SFC<Props> = props => {
  return <input {...props} type="checkbox" />;
};

export default EzCheckbox;
