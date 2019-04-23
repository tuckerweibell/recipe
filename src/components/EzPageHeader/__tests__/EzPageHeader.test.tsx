import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {Link, StaticRouter, Route} from 'react-router-dom';
import {fireEvent, cleanup, act} from 'react-testing-library';
import markdown from '../EzPageHeader.md';
import EzPageHeader from '../EzPageHeader';
import {EzAlert, EzButton, EzCard, EzLayout, EzPage} from '../../index';
import {fullRender, renderToHtml} from '../../../jest-globals';

afterEach(cleanup);

const mockRequire = () => ({
  Link,
  BrowserRouter: ({children}) => (
    <StaticRouter context={{}} location="/components/ez-page-header/">
      {children}
    </StaticRouter>
  ),
  Route,
});

const scope = {EzPageHeader, EzAlert, EzButton, EzCard, EzLayout, EzPage, require: mockRequire};

describe('EzPageHeader', () => {
  visualSnapshots({markdown, scope});

  it('should cycle through the tabs', () => {
    const tabs = [{label: 'All'}, {label: 'Accepted'}, {label: 'Draft'}];
    const onChange = jest.fn();

    const {getByText} = fullRender(
      React.createElement(() => {
        const [selected, setSelected] = React.useState(tabs[1]);
        onChange.mockImplementation(setSelected);
        return <EzPageHeader title="Order # XYZ-123" subnav={{tabs, selected, onChange}} />;
      })
    );

    const allTab = getByText('Accepted');

    // test arrow left selects previous tab
    fireEvent.keyDown(allTab, {key: 'ArrowLeft', code: 27});

    expect(onChange).toHaveBeenLastCalledWith(tabs[0]);

    onChange.mockClear();

    // test arrow left cycles back to last tab in the list
    fireEvent.keyDown(allTab, {key: 'ArrowLeft', code: 27});

    expect(onChange).toHaveBeenLastCalledWith(tabs[2]);

    // test arrow up also selects previous tab
    fireEvent.keyDown(allTab, {key: 'ArrowUp', code: 24});

    expect(onChange).toHaveBeenLastCalledWith(tabs[1]);

    // test arrow right selects next tab
    fireEvent.keyDown(allTab, {key: 'ArrowRight', code: 26});

    expect(onChange).toHaveBeenLastCalledWith(tabs[2]);

    // test arrow right cycles back to first tab in the list
    fireEvent.keyDown(allTab, {key: 'ArrowRight', code: 26});

    expect(onChange).toHaveBeenLastCalledWith(tabs[0]);

    // test arrow down also selects next tab
    fireEvent.keyDown(allTab, {key: 'ArrowDown', code: 25});

    expect(onChange).toHaveBeenLastCalledWith(tabs[1]);

    // test that other key presses don't change the current tab
    onChange.mockClear();

    fireEvent.keyDown(allTab, {key: 'Enter', code: 13});

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should cycle from the focused tab to the next tab if no tab is currently selected', () => {
    const tabs = [{label: 'All'}, {label: 'Accepted'}, {label: 'Draft'}];
    const onChange = jest.fn();

    const {getByText} = fullRender(
      React.createElement(() => {
        const [selected, setSelected] = React.useState(null);
        onChange.mockImplementation(setSelected);
        return <EzPageHeader title="Order # XYZ-123" subnav={{tabs, selected, onChange}} />;
      })
    );

    const allTab = getByText('All');

    allTab.focus();

    fireEvent.keyDown(allTab, {key: 'ArrowRight', code: 26});

    expect(onChange).toHaveBeenLastCalledWith(tabs[1]);
  });

  it('should meet accessibility guidelines', async () => {
    const tabs = [{label: 'All'}, {label: 'Accepted'}, {label: 'Draft'}];
    const wrapper = renderToHtml(
      <EzPageHeader
        title="Order # XYZ-123"
        breadcrumb={{
          label: 'Back to Orders',
          onClick: () => {},
        }}
        status={<EzAlert headline="Verified" use="marketing" />}
        subnav={{tabs, selected: tabs[0], onChange: () => {}}}
        actions={<EzButton use="primary">Accept Order</EzButton>}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
