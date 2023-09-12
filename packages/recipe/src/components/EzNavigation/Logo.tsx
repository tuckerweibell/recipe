import React, {FC, ReactNode} from 'react';
import {Stack} from '@mui/material';
import theme from '../theme.config';
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

export type LogoType = {
  component?: ReactNode;
  src?: string;
  width?: number | string;
};

interface LogoProps {
  link: LabelledLink & LinkType;
  logo: LogoType;
}

const Logo: FC<LogoProps> = ({link: {label, ...link}, logo}) => (
  <div className={logoWrapper()}>
    <Stack component={Link} {...link} aria-label={label}>
      {logo ? (
        logo.component || (
          <img className={logoImage()} src={logo.src} width={logo.width} alt="logo" />
        )
      ) : (
        <h1 className={logoText()}>{label}</h1>
      )}
    </Stack>
  </div>
);

export default Logo;
