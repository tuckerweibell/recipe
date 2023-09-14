import React, {useCallback, useState} from 'react';
import dedent from 'ts-dedent';
import {EzContent, EzFooter} from '../../EzContent';
import EzButton from '../../EzButton';
import EzLayout from '../../EzLayout';
import EzModal, {EzModalProps} from '../EzModal';

const EzModalExample = (args?: EzModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDismiss = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal {...args} isOpen={isOpen} onDismiss={handleDismiss}>
        <EzContent>Are you ready to submit this order?</EzContent>
        <EzFooter>
          <EzLayout layout="basic">
            <EzButton onClick={handleDismiss}>Confirm</EzButton>
            <EzButton variant="outlined" onClick={handleDismiss}>
              Cancel
            </EzButton>
          </EzLayout>
        </EzFooter>
      </EzModal>
    </>
  );
};

const EzModalExampleJSX = (args?: string) => dedent`
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDismiss = React.useCallback(() => setIsOpen(false), []);

  return (
    <>
      <EzButton onClick={() => setIsOpen(true)}>Open</EzButton>
      <EzModal isOpen={isOpen} onDismiss={handleDismiss} ${args ? `${args}` : ''}>
        <EzContent>Are you ready to submit this order?</EzContent>
        <EzFooter>
          <EzLayout layout="basic">
            <EzButton onClick={handleDismiss}>Confirm</EzButton>
            <EzButton variant="outlined" onClick={handleDismiss}>
              Cancel
            </EzButton>
          </EzLayout>
        </EzFooter>
      </EzModal>
    </>
  );
`;

export {EzModalExample, EzModalExampleJSX};
