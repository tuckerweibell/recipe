import React, {SFC, useState} from 'react';
import Logo, {LogoType} from './Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';
import {NotificationCounter} from './Notifications';
import {Wrapper, NavWrapper, Menus, MenuContent, ContentContainer} from './EzNavigation.styles';
import {LabelledLink} from '../EzLink/EzLink.types';

const countNotifications = links =>
  links.reduce((sum, link) => {
    if (!link.notifications) return sum;
    const count = Number.isInteger(link.notifications) ? Number(link.notifications) : 0;
    return sum + count;
  }, 0);

type HomeLink = LabelledLink & {
  logo?: LogoType;
};

type NavLink = LabelledLink & {
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

const EzNavigation: SFC<Props> = ({
  children,
  links,
  utilityLinks,
  userMenu,
  home: {logo, ...homeLink},
}: any) => {
  const [hidden, setHidden] = useState(true);

  const handleSidebarToggle = () => setHidden(s => !s);

  const notificationSummary = countNotifications(links) + countNotifications(utilityLinks || []);

  return (
    <Wrapper>
      <NavWrapper opened={hidden}>
        <Hamburger opened={!hidden} onClick={handleSidebarToggle} />
        {notificationSummary > 0 && (
          <NotificationCounter onClick={handleSidebarToggle} opened={!hidden}>
            {notificationSummary}
          </NotificationCounter>
        )}
        <Logo link={homeLink} logo={logo} />
        <MenuContent opened={!hidden}>
          <Menus primary>
            {links.map((link, i) => (
              <Menu key={i} link={link} sidebarToggle={handleSidebarToggle} />
            ))}
          </Menus>
          <Menus>
            {utilityLinks &&
              utilityLinks.map((link, i) => (
                <Menu key={i} link={link} sidebarToggle={handleSidebarToggle} />
              ))}
          </Menus>
          <Menus>
            {userMenu && (
              <UserMenu
                name={userMenu.name}
                links={userMenu.links}
                sidebarToggle={handleSidebarToggle}
              />
            )}
          </Menus>
        </MenuContent>
      </NavWrapper>
      <ContentContainer opened={hidden}>{children}</ContentContainer>
    </Wrapper>
  );
};

export default EzNavigation;
