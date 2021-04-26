import React, {FC} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzNavigation.theme.config';
import {Link} from '../EzLink/EzLink';
import {LabelledLink, Link as LinkType} from '../EzLink/EzLink.types';

const logoWrapper = theme.css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '$300',
  height: '70px',
  flexBasis: 'calc(100% - 70px)',
  order: '-1',

  'a, a:hover, a:visited': {
    textDecoration: 'none',
  },
});

const logoImage = theme.css({
  padding: 0,
  margin: 0,
});

const logoText = theme.css({
  fontSize: '24px',
  fontWeight: 600,
  color: '$nav-text',
  margin: 0,
});

interface LogoProps {
  link: LabelledLink & LinkType;
  logo: {src: string; width: number | string};
}

const Logo: FC<LogoProps> = ({link: {label, ...link}, logo}) => (
  <Style ruleset={theme}>
    <div className={logoWrapper()}>
      <Link {...link} aria-label={label}>
        {logo ? (
          <img className={logoImage()} src={logo.src} width={logo.width} alt="" />
        ) : (
          <h1 className={logoText()}>{label}</h1>
        )}
      </Link>
    </div>
  </Style>
);

export type LogoType = {
  src: string;
  width?: number;
};

export default Logo;
