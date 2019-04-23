import React, {createRef, useRef} from 'react';
import {AnchorProps, LinkProps} from '../EzLink/EzLink.types';
import {EzButton, EzHeading, EzLayout} from '..';
import {Tab, TabList} from './Tabs';
import {base, actions as actionStyles} from './EzPageHeader.styles';
import styled from '../../themes/styled';

type Breadcrumb = {
  label: string;
  onClick: React.MouseEventHandler;
};

type Tab = {
  label: string;
  accessibilityLabel?: string;
};

type Changeable<T> = {onChange: (tab: T) => void};

type TabLink = Tab & (AnchorProps | LinkProps);

type SubNavProps<T> = (T extends TabLink ? Partial<Changeable<T>> : Changeable<T>) & {
  tabs: T[];
  selected?: T;
};

type SubNav = SubNavProps<Tab> | SubNavProps<TabLink>;

type HeaderProps = {
  actions?: React.ReactNode;
  breadcrumb?: Breadcrumb;
  status?: React.ReactNode;
  title: string;
  subnav?: SubNav;
};

const StyledHeading = styled.div<{subnav?: SubNav}>(base as any);
const StyledActions = styled.div(actionStyles as any);

const handleKeyDown = (refs: React.RefObject<HTMLElement>[], {tabs, selected}: SubNav) => event => {
  const selectedIndex = selected ? tabs.findIndex(link => link === selected) : 0;

  const count = tabs.length;
  let nextIndex;

  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowRight': {
      nextIndex = (selectedIndex + 1) % count;
      break;
    }
    case 'ArrowUp':
    case 'ArrowLeft': {
      nextIndex = (selectedIndex - 1 + count) % count;
      break;
    }
    default:
      break;
  }

  if (nextIndex === undefined) return;

  const el = refs[nextIndex];

  el.current.click();
  el.current.focus();
};

/**
 * EzPageHeader is used to build the outer structure of a page including the page title and associated actions.
 */
const EzPageHeader: React.FC<HeaderProps> = ({actions, breadcrumb, status, title, subnav}) => {
  const refs = useRef(subnav && (subnav.tabs as any[]).map(() => createRef<HTMLElement>())).current;
  const selected = subnav && subnav.selected;
  return (
    <StyledHeading subnav={subnav}>
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
      {subnav && (
        <TabList onKeyDown={handleKeyDown(refs, subnav)}>
          {(subnav.tabs as Tab[]).map((tab, i) => (
            <Tab
              ref={refs[i]}
              key={tab.label}
              tabIndex={(!selected && i === 0) || selected === tab ? 0 : -1}
              active={selected === tab}
              aria-label={tab.accessibilityLabel}
              {...tab}
              onClick={subnav.onChange && (() => subnav.onChange(tab as any))}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
      )}
    </StyledHeading>
  );
};

/**
 * @component
 */
export default EzPageHeader;
