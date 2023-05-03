import React, {createRef, useRef} from 'react';
import {Stack} from '@mui/material';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {Link, LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {Tab, TabList} from './Tabs';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import {clsx, wrapEvent} from '../../utils';
import theme from '../theme.config';
import EzHeading from '../EzHeading';
import EzIcon from '../EzIcon';
import EzLayout from '../EzLayout';
import LinkButton from './LinkButton';

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

const pageHeader = theme.css({
  backgroundColor: '$page-header-bg',
  boxShadow: '$page-header-box-shadow',
  padding: '$page-header-py $page-header-px',
  '@medium': {
    padding: '$page-header-md-py $page-header-md-px',
  },

  variants: {
    subNav: {
      true: {'&&': {paddingBottom: 0}},
      false: {},
    },
    subHeader: {
      true: {'@medium': {py: '$page-header-md-subheader-py'}},
      false: {},
    },
  },
});

const handleKeyDown =
  (refs: React.RefObject<HTMLElement>[], {tabs, selected}: SubNav) =>
  event => {
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
  const refs = useRef(subnav && subnav.tabs.map(() => createRef<HTMLElement>())).current;
  const selected = subnav && subnav.selected;
  return (
    <div>
      <div className={clsx(pageHeader({subNav: Boolean(subnav)}))}>
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
                    <Stack direction="row" alignItems="center" gap={1}>
                      <EzIcon icon={faArrowLeftLong} size="small" />
                      {breadcrumb.label}
                    </Stack>
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
      </div>
      {subheader && (
        <div className={clsx(pageHeader({subHeader: true}))}>
          <MaxWidth>{subheader}</MaxWidth>
        </div>
      )}
    </div>
  );
};

/**
 * @component
 */
export default EzPageHeader;
