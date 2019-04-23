import React, {forwardRef} from 'react';
import {AnchorProps, LinkProps} from '../EzLink/EzLink.types';
import {EzButton, EzLink} from '..';
import {StyledUl, StyledLi} from './Tabs.styles';

type Clickable = {
  onClick: React.MouseEventHandler;
};
type Link = (AnchorProps | LinkProps) & Partial<Clickable>;

function isLink(props: Link | Clickable): props is Link {
  return (props as any).href !== undefined || (props as any).to !== undefined;
}

type TabProps = (Link | Clickable) & {
  active: boolean;
  'aria-label'?: string;
  children?: React.ReactNode;
  tabIndex: number;
};

type TabListProps = React.HtmlHTMLAttributes<HTMLUListElement>;

export const Tab = forwardRef<HTMLElement, TabProps>((props, ref) => {
  const {active, children, ...rest} = props;
  const tabProps = {...rest, ref, role: 'tab'} as any;
  const buttonProps = {use: 'tertiary', type: 'button'};

  return (
    <StyledLi role="presentation" active={active}>
      {isLink(props) ? (
        <EzLink {...tabProps}>{children}</EzLink>
      ) : (
        <EzButton {...buttonProps} {...tabProps}>
          {children}
        </EzButton>
      )}
    </StyledLi>
  );
});

export const TabList: React.FC<TabListProps> = ({onKeyDown, children}) => (
  <StyledUl role="tablist" onKeyDown={onKeyDown}>
    {children}
  </StyledUl>
);
