import React, {useState, useRef} from 'react';
import dedent from 'ts-dedent';
import {EzCard} from '../../EzCard';
import EzButton from '../../EzButton';
import EzPopover, {EzPopoverProps} from '../EzPopover';

const EzPopoverExample = (args?: EzPopoverProps) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <EzButton
        ref={ref}
        onClick={() => setVisible(!visible)}
        onKeyDown={(event: {key: string}) => event.key === 'Escape' && setVisible(false)}
      >
        Toggle popover
      </EzButton>

      {visible && (
        <EzPopover {...args} targetRef={ref} onClose={() => setVisible(false)}>
          <EzCard>Hi!</EzCard>
        </EzPopover>
      )}
    </>
  );
};

const EzPopoverExampleJSX = (args?: string) => dedent`
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <EzButton
        ref={ref}
        onClick={() => setVisible(!visible)}
        onKeyDown={event => event.key === 'Escape' && setVisible(false)}
      >
        Toggle popover
      </EzButton>

      {visible && (
        <EzPopover targetRef={ref} onClose={() => setVisible(false)} ${args ? `${args}` : ''}>
          <EzCard>Hi!</EzCard>
        </EzPopover>
      )}
    </>
  );
`;

export {EzPopoverExample, EzPopoverExampleJSX};
