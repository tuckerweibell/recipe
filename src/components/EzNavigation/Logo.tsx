import React, {SFC} from 'react';
import styled from '../../themes/styled';
import {Link} from '../EzLink/EzLink';
import {LabelledLink, Link as LinkType} from '../EzLink/EzLink.types';

const sidebarText = '#B8BDC2';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }
  padding: ${({theme}) => theme.spacing.xl};
`;

const LogoImg = styled('img')`
  padding: 0;
  margin: 0;
`;

const LogoText = styled('h1')`
  font-size: 24px;
  font-weight: 600;
  color: ${sidebarText};
  margin: 0;
`;

interface LogoProps {
  link: LabelledLink & LinkType;
  logo: {src: string; width: number | string};
}

const Logo: SFC<LogoProps> = ({link: {label, ...link}, logo}) => (
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
