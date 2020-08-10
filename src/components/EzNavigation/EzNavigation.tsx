/** @jsx jsx */
import {jsx} from '@emotion/core';
import {SFC, useState} from 'react';
import en from './en';
import Logo, {LogoType} from './Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';
import {NotificationCounter} from './Notifications';
import {Wrapper, NavWrapper, Menus, MenuContent, ContentContainer} from './EzNavigation.styles';
import {LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {useTranslation} from '../../utils/hooks';

const countNotifications = links =>
  links.reduce((sum, link) => {
    if (!link.notifications) return sum;
    const count = Number.isInteger(link.notifications) ? Number(link.notifications) : 0;
    return sum + count;
  }, 0);

type HomeLink = LabelledLink & {
  logo?: LogoType;
};

type LinkGroup = Labelled & {
  links: LabelledLink[];
};

type LinkOrGroup = LabelledLink | LinkGroup;

type NavLink = LinkOrGroup & {
  notifications?: number | '★';
};

type UserMenu = {
  links: LabelledLink[];
  name: string;
};

type Props = {
  links: NavLink[];
  utilityLinks?: NavLink[];
  userMenu?: UserMenu;
  home: HomeLink;
};

const Group = ({links, className, children}) => {
  const active = links.some(link => document.location.pathname.includes(link.href || link.to));
  const [open, setOpen] = useState(active);

  return (
    <div css={{display: 'flex', flexDirection: 'column'}}>
      <div
        onClick={e => {
          e.stopPropagation();
          setOpen(o => !o);
        }}
        css={{
          ':focus': {
            outline: 'none',
            boxShadow: 'inset 0 0 0 2px #3e90d6',
          },
        }}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key !== ' ' && e.key !== 'Enter') return;
          setOpen(o => !o);
        }}
      >
        <div
          className={className}
          style={{paddingRight: 24}}
          css={{display: 'flex', justifyContent: 'space-between'}}
        >
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            css={{
              transform: `rotate(${open ? '180deg' : '0deg'})`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      <div
        css={{
          display: open ? 'block' : 'none',
          '& a': {paddingLeft: 48, paddingTop: 8, paddingBottom: 8},
        }}
      >
        <Links links={links} />
      </div>
    </div>
  );
};

const Links = ({links}) =>
  links.map((link, i) => (
    <Menu key={i} link={{...link, as: link.links?.length ? Group : link.as}} />
  ));

const EzNavigation: SFC<Props> = ({
  children,
  links,
  utilityLinks,
  userMenu,
  home: {logo, ...homeLink},
}: any) => {
  const {t} = useTranslation(en);
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(s => !s);

  const notificationSummary = countNotifications(links) + countNotifications(utilityLinks || []);

  return (
    <Wrapper>
      <NavWrapper opened={hidden}>
        <Hamburger opened={!hidden} onClick={toggle} />
        {notificationSummary > 0 && (
          <NotificationCounter onClick={toggle} opened={!hidden}>
            {notificationSummary}
          </NotificationCounter>
        )}
        <Logo link={homeLink} logo={logo} />
        <MenuContent opened={!hidden}>
          <Menus primary aria-label={t('Primary navigation')} onClick={toggle}>
            <Links links={links} />
          </Menus>
          {utilityLinks && (
            <Menus aria-label={t('Utility navigation')} onClick={toggle}>
              <Links links={utilityLinks} />
            </Menus>
          )}
          {userMenu && (
            <Menus aria-label={t('User menu')}>
              <UserMenu name={userMenu.name} links={userMenu.links} sidebarToggle={toggle} />
            </Menus>
          )}
        </MenuContent>
      </NavWrapper>
      <ContentContainer opened={hidden}>{children}</ContentContainer>
    </Wrapper>
  );
};

export default EzNavigation;
