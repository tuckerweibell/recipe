/** @jsx jsx */
import {jsx} from '@emotion/core';
import {createRef, useRef} from 'react';
import LinkButton from './LinkButton';
import {Link, LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {EzHeading, EzLayout} from '..';
import {Tab, TabList} from './Tabs';
import {Surface} from './EzPageHeader.styles';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import {wrapEvent} from '../../utils';
import {useTheme, mq} from '../../themes/styled';

type TabType = Labelled | (Labelled & Link);

type Changeable = {onChange: (tab: TabType) => void};

type SubNavProps<T> = (T extends Link ? Partial<Changeable> : Changeable) & {
  tabs: T[];
  selected?: T;
};

type SubNav = SubNavProps<TabType>;

type HeaderProps = {
  actions?: React.ReactNode;
  breadcrumb?: LabelledLink;
  status?: React.ReactNode;
  title: string;
  subnav?: SubNav;
  subheader?: React.ReactNode;
};

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
const EzPageHeader: React.FC<HeaderProps> = ({
  actions,
  breadcrumb,
  status,
  title,
  subnav,
  subheader,
}) => {
  const theme = useTheme();
  const refs = useRef(subnav && subnav.tabs.map(() => createRef<HTMLElement>())).current;
  const selected = subnav && subnav.selected;
  return (
    <div css={{backgroundColor: theme.colors.content.background}}>
      <Surface css={subnav ? {paddingBottom: 0} : {}}>
        <MaxWidth>
          <EzLayout layout="stack">
            <EzLayout
              layout={{
                base: 'stack',
                medium: 'split',
              }}
            >
              <div>
                {breadcrumb && (
                  <LinkButton {...breadcrumb}>
                    <svg
                      aria-hidden="true"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -80 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z"
                      />
                    </svg>{' '}
                    {breadcrumb.label}
                  </LinkButton>
                )}
                <EzLayout
                  layout={{
                    base: 'stack',
                    medium: 'cluster',
                  }}
                >
                  <EzHeading size="1">{title}</EzHeading>
                  <div>{status}</div>
                </EzLayout>
              </div>
              {actions && <EzLayout layout={{base: 'stack', medium: 'basic'}}>{actions}</EzLayout>}
            </EzLayout>
            {subnav && (
              <TabList onKeyDown={handleKeyDown(refs, subnav)}>
                {subnav.tabs.map((tab, i) => (
                  <Tab
                    ref={refs[i]}
                    key={tab.label}
                    tabIndex={(!selected && i === 0) || selected === tab ? 0 : -1}
                    active={selected === tab}
                    {...tab}
                    onClick={wrapEvent(tab.onClick, () => subnav.onChange && subnav.onChange(tab))}
                  />
                ))}
              </TabList>
            )}
          </EzLayout>
        </MaxWidth>
      </Surface>
      {subheader && (
        <Surface css={mq(theme.breakpoints.medium, {'--recipe-surface-py': theme.spacing.lg})}>
          <MaxWidth>{subheader}</MaxWidth>
        </Surface>
      )}
    </div>
  );
};

/**
 * @component
 */
export default EzPageHeader;
