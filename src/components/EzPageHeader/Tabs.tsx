import React, {forwardRef} from 'react';
import {AnchorProps, LinkProps} from '../EzLink/EzLink.types';
import LinkButton from './LinkButton';
import {StyledUl, StyledLi} from './Tabs.styles';

type Clickable = {
  onClick: React.MouseEventHandler;
};
type Link = (AnchorProps | LinkProps) & Partial<Clickable>;

type TabProps = (Link | Clickable) & {
  active: boolean;
  tabIndex: number;
};

type TabListProps = React.HtmlHTMLAttributes<HTMLUListElement>;

export const Tab = forwardRef<HTMLElement, TabProps>((props, ref) => {
  const {active, ...rest} = props;
  const tabProps = {...rest, ref, role: 'tab'} as any;

  return (
    <StyledLi role="presentation" active={active}>
      <LinkButton {...tabProps} />
    </StyledLi>
  );
});

export const TabList: React.FC<TabListProps> = ({onKeyDown, children}) => (
  <StyledUl role="tablist" onKeyDown={onKeyDown}>
    {children}
  </StyledUl>
);
