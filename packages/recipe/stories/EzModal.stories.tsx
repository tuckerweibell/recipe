import EzModal from '../src/components/EzModal';

export default {
  component: EzModal,
  title: 'Figma/EzModal',
  parameters: {
    theme: 'fulfillment',
  },
  args: {
    children: 'Body text',
    headerText: 'Title',
    isOpen: true,
    submitLabel: 'Submit',
    dismissLabel: 'Dismiss',
  },
  argTypes: {
    onDismiss: {action: 'dismissed'},
    onSubmit: {action: 'submitted'},
  },
};

export const Primary = {};
