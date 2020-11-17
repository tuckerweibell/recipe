import React, {FC} from 'react';
import styled from '@emotion/styled';
import {Link} from '../EzLink/EzLink';
import {LabelledLink, Link as LinkType} from '../EzLink/EzLink.types';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: var(--recipe-global-static-size-300);
  height: var(--recipe-navigation-top-bar-height);
  flex-basis: calc(100% - var(--recipe-navigation-top-bar-height));
  order: var(--recipe-navigation-logo-position);

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }
`;

const LogoImg = styled('img')`
  padding: 0;
  margin: 0;
`;

const LogoText = styled('h1')`
  font-size: 24px;
  font-weight: 600;
  color: var(--recipe-navigation-text-color);
  margin: 0;
`;

interface LogoProps {
  link: LabelledLink & LinkType;
  logo: {src: string; width: number | string};
}

const Logo: FC<LogoProps> = ({link: {label, ...link}, logo}) => (
  <Wrapper>
    <Link {...link} aria-label={label}>
      {logo ? <LogoImg src={logo.src} width={logo.width} alt="" /> : <LogoText>{label}</LogoText>}
    </Link>
  </Wrapper>
);

export type LogoType = {
  src: string;
  width?: number;
};

export default Logo;
