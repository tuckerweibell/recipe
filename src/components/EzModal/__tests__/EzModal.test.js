import React from 'react';
import EzModal from '../EzModal';
import ReactModal from 'react-modal';
import {standard} from '../../../themes';
import EzButton from '../../EzButton';

// We need to mock out the portal functionality as react test renderer does not
// support portals currently :( . our mock forces portal s to just behave like any
// other node
jest.mock('react-dom', () => ({
  createPortal: node => node,
}));

describe('EzModal', () => {
  beforeAll(() => {
    // We need to create an arbitrary element for the modal to target as the app element
    // React modal does not see the element if you mount it via enzyme with the modal component
    // so we set up the element directly on the document
    const appElement = document.createElement('div');
    ReactModal.setAppElement(appElement);
  });

  afterAll(() => {
    document.removeChild(appElement);
  });

  it('should render with default styles', () => {
    const actual = create(
      <EzModal
        isOpen={true}
        submitLabel="Submit"
        dismissLabel="Dismiss"
        headerText="Header"
        theme={standard}
        appElement={null}
      >
        children
      </EzModal>
    );
    expect(actual).toMatchSnapshot();
  });

  it('does not render the children if not open', () => {
    const component = mount(
      <EzModal isOpen={false} appElement={null} dismissLabel="dismiss" headerText="header">
        <div data-test-id="test">foo</div>
      </EzModal>
    );
    expect(component.find('[data-test-id="test"]')).toHaveLength(0);
  });

  it('calls react modals set app element on mount', () => {
    const spy = jest.spyOn(ReactModal, 'setAppElement').mockImplementation(() => {});
    const appElement = 'myElement';
    mount(
      <EzModal
        isOpen
        appElement={appElement}
        submitLabel="Submit"
        dismissLabel="Dismiss"
        headerText="Header"
      >
        children
      </EzModal>
    );
    expect(spy).toHaveBeenCalledWith(appElement);
  });

  it('calls submit handler when submit button is clicked', () => {
    const clickSpy = jest.fn();
    const submitLabel = 'submit';
    const component = mount(
      <EzModal
        isOpen={true}
        submitLabel={submitLabel}
        onSubmit={clickSpy}
        appElement={null}
        dismissLabel="dismiss"
        headerText="header"
      >
        Test>
      </EzModal>
    );

    // Find and click the first node with text corresponding to the submit label
    component
      .findWhere(node => {
        return node.type() && node.text() === submitLabel;
      })
      .at(0)
      .simulate('click');
    expect(clickSpy).toHaveBeenCalled();
  });

  it('calls dismiss handler when dismiss button is clicked', () => {
    const clickSpy = jest.fn();
    const dismissLabel = 'dismiss';
    const component = mount(
      <EzModal
        isOpen={true}
        dismissLabel={dismissLabel}
        submitLabel="submit"
        onDismiss={clickSpy}
        appElement={null}
        headerText="header"
      >
        Test>
      </EzModal>
    );

    // Find and click the first node with text corresponding to the dismiss label
    component
      .findWhere(node => {
        return node.type() && node.text() === dismissLabel;
      })
      .at(0)
      .simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });

  it('passes through the destructive prop to the submit button ', () => {
    const submitLabel = 'submit';
    const component = mount(
      <EzModal
        isOpen={true}
        submitLabel={submitLabel}
        destructive
        appElement={null}
        dismissLabel="dismiss"
        headerText="header"
      >
        test
      </EzModal>
    );

    // Find the button with text submit
    const submitButton = component.findWhere(node => {
      return node.type() && node.is(EzButton) && node.text() === submitLabel;
    });
    expect(submitButton.prop('destructive')).toBe(true);
  });

  it('sets the loading prop on submit button when isSubmitting is true', () => {
    const submitLabel = 'submit';
    const component = mount(
      <EzModal
        isOpen
        isSubmitting
        submitLabel={submitLabel}
        appElement={null}
        dismissLabel="dismiss"
        headerText="header"
      >
        test
      </EzModal>
    );
    const submitButton = component.findWhere(node => {
      return node.type() && node.is(EzButton) && node.text() === submitLabel;
    });
    expect(submitButton.prop('loading')).toBe(true);
  });

  it('sets the disabled prop on dismiss button when isSubmitting is true', () => {
    const dismissLabel = 'submit';
    const component = mount(
      <EzModal
        isOpen
        isSubmitting
        dismissLabel={dismissLabel}
        appElement={null}
        headerText="header"
      >
        test
      </EzModal>
    );
    const dismissButton = component.findWhere(node => {
      return node.type() && node.is(EzButton) && node.text() === dismissLabel;
    });
    expect(dismissButton.prop('disabled')).toBe(true);
  });

  /**
   * Accessibility tests.
   */
  describe('Accessibility tests', () => {
    it('should meet accessibility guidelines when required labels / text are given', async () => {
      const wrapper = mount(
        <EzModal isOpen={true} dismissLabel="dismiss" headerText="header" appElement={null}>
          test
        </EzModal>
      );
      const actual = await axe(wrapper.html());
      expect(actual).toHaveNoViolations();
    });

    it('should meet accessibility guidelines when all labels / text are given', async () => {
      const wrapper = mount(
        <EzModal
          isOpen={true}
          headerText="Header"
          submitLabel="submit"
          dismissLabel="dismiss"
          appElement={null}
        >
          test
        </EzModal>
      );
      const actual = await axe(wrapper.html());
      expect(actual).toHaveNoViolations();
    });
  });
});
