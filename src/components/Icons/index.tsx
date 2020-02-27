import React from 'react';
import {css} from '@emotion/core';
import styled from '../../themes/styled';

const alignBaseline = () => css`
  height: 1em;
  width: 1em;
  position: relative;
  top: 0.125em;
`;

const rotateAnimationStyles = () => css`
  path {
    animation: spin 1s linear infinite;
    transform-style: preserve-3d;
    transform-origin: center center;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Svg = ({children, title, className}: React.SVGProps<SVGSVGElement> & {title: string}) => (
  <svg version="1.1" viewBox="0 0 14 14" className={className}>
    <title>{title}</title>
    {children}
  </svg>
);

const SvgIcon = styled(Svg)(alignBaseline);
const RotatingSvgIcon = styled(SvgIcon)(rotateAnimationStyles);

export const CloseIcon = () => (
  <SvgIcon title="close-button">
    <path
      d="M6.96 5.192L11.38.773l1.767 1.768-4.42 4.42 4.42 4.419-1.767 1.767-4.42-4.42-4.42 4.42L.774 11.38l4.42-4.42-4.42-4.42L2.541.774z"
      id="close x"
      fill="currentColor"
    />
  </SvgIcon>
);

export const DotIcon = () => (
  <SvgIcon title="dot-icon">
    <circle cx="50%" cy="50%" r="30%" fillRule="evenodd" fill="currentColor" />
  </SvgIcon>
);

export const ErrorIcon = () => (
  <SvgIcon title="error-icon">
    <path
      fill="currentColor"
      d="M13.37 10.94c.12.24.16.49.11.74a1.08 1.08 0 01-1.06.89H1.58a1.08 1.08 0 01-1.06-.9c-.05-.24 0-.49.11-.73l5.42-9.4c.14-.23.33-.4.58-.48.25-.08.5-.08.74 0 .25.08.44.25.58.49l5.42 9.4zM7 9a1 1 0 00-.73.3 1 1 0 00-.3.74c0 .29.1.53.3.73.2.2.44.3.73.3a1 1 0 00.73-.3 1 1 0 00.3-.73 1 1 0 00-.3-.73A1 1 0 007 9zM6 5.27l.19 3.08c0 .06.02.11.08.16.05.06.11.08.19.08h1.08c.08 0 .14-.02.2-.08.05-.05.07-.1.07-.16L8 5.27a.29.29 0 00-.08-.21.26.26 0 00-.19-.08H6.28a.26.26 0 00-.2.08.29.29 0 00-.07.21z"
    />
  </SvgIcon>
);

export const InfoIcon = () => (
  <SvgIcon title="info-icon">
    <path
      d="M5.85937295,10.6093533 L5.85937295,7.51561066 L5.42968648,7.51561066 C5.31510352,7.51561066 5.21484324,7.47264201 5.12890594,7.38670471 C5.04296865,7.30076742 5,7.20050713 5,7.08592418 L5,6.05467664 C5,5.94009369 5.04296865,5.8398334 5.12890594,5.75389611 C5.21484324,5.66795881 5.31510352,5.62499017 5.42968648,5.62499017 L7.83593074,5.62499017 C7.95051369,5.62499017 8.05077398,5.66795881 8.13671127,5.75389611 C8.22264857,5.8398334 8.26561721,5.94009369 8.26561721,6.05467664 L8.26561721,10.6093533 L8.69530369,10.6093533 C8.80988664,10.6093533 8.91014693,10.6523219 8.99608422,10.7382592 C9.08202152,10.8241965 9.12499017,10.9244568 9.12499017,11.0390398 L9.12499017,12.0702873 C9.12499017,12.1848702 9.08202152,12.2851305 8.99608422,12.3710678 C8.91014693,12.4570051 8.80988664,12.4999738 8.69530369,12.4999738 L5.42968648,12.4999738 C5.31510352,12.4999738 5.21484324,12.4570051 5.12890594,12.3710678 C5.04296865,12.2851305 5,12.1848702 5,12.0702873 L5,11.0390398 C5,10.9244568 5.04296865,10.8241965 5.12890594,10.7382592 C5.21484324,10.6523219 5.31510352,10.6093533 5.42968648,10.6093533 L5.85937295,10.6093533 Z M7.06249508,1.5 C7.49218156,1.5 7.85741506,1.65039027 8.1581956,1.9511708 C8.45897613,2.25195133 8.60936639,2.61718484 8.60936639,3.04687131 C8.60936639,3.47655779 8.45897613,3.84179129 8.1581956,4.14257182 C7.85741506,4.44335236 7.49218156,4.59374262 7.06249508,4.59374262 C6.63280861,4.59374262 6.2675751,4.44335236 5.96679457,4.14257182 C5.66601404,3.84179129 5.51562377,3.47655779 5.51562377,3.04687131 C5.51562377,2.61718484 5.66601404,2.25195133 5.96679457,1.9511708 C6.2675751,1.65039027 6.63280861,1.5 7.06249508,1.5 Z"
      id="info"
      fill="currentColor"
    />
  </SvgIcon>
);

export const MarketingIcon = () => (
  <SvgIcon title="marketing-icon">
    <path
      d="M6.34960869,1.40369124 C6.43931783,1.22427295 6.57014356,1.10466087 6.7420862,1.04485466 C6.91402885,0.985048447 7.08597115,0.985048447 7.2579138,1.04485466 C7.42985644,1.10466087 7.56068217,1.22427295 7.65039131,1.40369124 L9.10816494,4.36409308 L12.3825488,4.83506609 C12.5769187,4.86496903 12.7301717,4.95467818 12.8423082,5.10419353 C12.9544446,5.25370889 13.0067748,5.41817555 12.9992992,5.59759384 C12.9918235,5.77701213 12.9208037,5.93400314 12.7862399,6.06856686 L10.4089476,8.37857738 L10.9696297,11.6529612 C10.9995327,11.8323795 10.9658917,12.0005842 10.8687069,12.1575752 C10.7715221,12.3145662 10.6332204,12.415489 10.4538021,12.4603435 C10.2743838,12.5051981 10.1024412,12.4827708 9.93797454,12.3930617 L7,10.8680062 L4.06202546,12.3930617 C3.8975588,12.4827708 3.72561616,12.5051981 3.54619786,12.4603435 C3.36677957,12.415489 3.22847786,12.3145662 3.13129306,12.1575752 C3.03410827,12.0005842 3.00046734,11.8323795 3.03037027,11.6529612 L3.59105244,8.37857738 L1.21376006,6.06856686 C1.07919634,5.93400314 1.00817648,5.77701213 1.00070083,5.59759384 C0.993225186,5.41817555 1.04555541,5.25370889 1.15769184,5.10419353 C1.26982827,4.95467818 1.42308128,4.86496903 1.61745122,4.83506609 L4.89183506,4.36409308 L6.34960869,1.40369124 Z"
      id="star"
      fill="currentColor"
    />
  </SvgIcon>
);

export const ProgressIcon = () => (
  <RotatingSvgIcon title="progress-icon">
    <path
      d="M8.125 2.125c0 .312-.11.578-.328.797A1.085 1.085 0 0 1 7 3.25c-.313 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797c0-.313.11-.578.328-.797C6.422 1.11 6.687 1 7 1c.312 0 .578.11.797.328.219.219.328.484.328.797zM7 10.75c.312 0 .578.11.797.328.219.219.328.484.328.797 0 .312-.11.578-.328.797A1.085 1.085 0 0 1 7 13c-.313 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797c0-.313.11-.578.328-.797.219-.219.484-.328.797-.328zm4.875-4.875c.312 0 .578.11.797.328.219.219.328.484.328.797 0 .312-.11.578-.328.797a1.085 1.085 0 0 1-.797.328c-.313 0-.578-.11-.797-.328A1.085 1.085 0 0 1 10.75 7c0-.313.11-.578.328-.797.219-.219.484-.328.797-.328zM3.25 7c0 .312-.11.578-.328.797a1.085 1.085 0 0 1-.797.328c-.313 0-.578-.11-.797-.328A1.085 1.085 0 0 1 1 7c0-.313.11-.578.328-.797.219-.219.484-.328.797-.328.312 0 .578.11.797.328.219.219.328.484.328.797zm.305 2.32c.312 0 .578.11.797.328.218.22.328.485.328.797 0 .313-.11.578-.328.797a1.085 1.085 0 0 1-.797.328c-.313 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797c0-.312.11-.578.328-.797.219-.218.484-.328.797-.328zm6.89 0c.313 0 .578.11.797.328.219.22.328.485.328.797 0 .313-.11.578-.328.797a1.085 1.085 0 0 1-.797.328c-.312 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797c0-.312.11-.578.328-.797.22-.218.485-.328.797-.328zm-6.89-6.89c.312 0 .578.11.797.328.218.219.328.484.328.797 0 .312-.11.578-.328.797a1.085 1.085 0 0 1-.797.328c-.313 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797c0-.313.11-.578.328-.797.219-.219.484-.328.797-.328z"
      fill="currentColor"
    />
  </RotatingSvgIcon>
);

export const SuccessIcon = () => (
  <SvgIcon title="success-icon">
    <path
      d="M5.07811528,11.7656041 L1.16406211,7.87498838 C1.05468725,7.76561352 1,7.62498885 1,7.45311438 C1,7.28123991 1.05468725,7.14061525 1.16406211,7.03124039 L2.03124754,6.1874924 C2.1406224,6.06249282 2.2773407,5.99999285 2.44140281,5.99999285 C2.60546492,5.99999285 2.74999595,6.06249282 2.87499553,6.1874924 L5.49998927,8.81248614 L11.1249759,3.18749955 C11.2499754,3.06249997 11.3945065,3 11.5585686,3 C11.7226307,3 11.859349,3.06249997 11.9687238,3.18749955 L12.8359093,4.03124754 C12.9452841,4.1406224 12.9999714,4.28124706 12.9999714,4.45312154 C12.9999714,4.62499601 12.9452841,4.76562067 12.8359093,4.87499553 L5.92186327,11.7656041 C5.81248841,11.8906037 5.67186374,11.9531037 5.49998927,11.9531037 C5.3281148,11.9531037 5.18749014,11.8906037 5.07811528,11.7656041 Z"
      id="check"
      fill="currentColor"
    />
  </SvgIcon>
);

export const TipIcon = () => (
  <SvgIcon title="tip-icon">
    <path
      d="M8.86998569,11.0312261 L8.86998569,11.6874745 C8.86998569,11.8124741 8.83482953,11.921849 8.7645172,12.0155987 C8.69420486,12.1093485 8.60436145,12.1796608 8.49498659,12.2265357 L8.49498659,12.4374727 C8.49498659,12.5937225 8.44029934,12.7265344 8.33092448,12.8359093 C8.22154962,12.9452841 8.08873768,12.9999714 7.93248793,12.9999714 L6.0574924,12.9999714 C5.90124265,12.9999714 5.76843071,12.9452841 5.65905585,12.8359093 C5.54968099,12.7265344 5.49499374,12.5937225 5.49499374,12.4374727 L5.49499374,12.2265357 C5.38561888,12.1796608 5.29577547,12.1093485 5.22546313,12.0155987 C5.1551508,11.921849 5.11999464,11.8124741 5.11999464,11.6874745 L5.11999464,11.0312261 C5.11999464,10.9531014 5.14733844,10.8866951 5.20202569,10.8320078 C5.25671294,10.7773206 5.32311927,10.7499768 5.40124397,10.7499768 L8.58873637,10.7499768 C8.66686106,10.7499768 8.73326739,10.7773206 8.78795464,10.8320078 C8.84264189,10.8866951 8.86998569,10.9531014 8.86998569,11.0312261 Z M5.51843119,9.99997854 C5.3934316,9.99997854 5.28405674,9.96872874 5.19030697,9.90622877 C5.09655719,9.8437288 5.03405722,9.75779174 5.00280741,9.64841688 C4.83093294,9.2109178 4.62780831,8.81248125 4.39343387,8.45310723 C4.2528092,8.23435787 4.05749729,7.96873327 3.80749776,7.65623413 C3.47937355,7.24998522 3.25281147,6.921861 3.12781189,6.67186148 C2.95593741,6.26561256 2.87,5.74998879 2.87,5.12499017 C2.87,4.37499195 3.05359319,3.68358735 3.42077994,3.05077636 C3.78796668,2.41796537 4.28796537,1.91796668 4.92077636,1.55077994 C5.55358735,1.18359319 6.24499195,1 6.99499017,1 C7.74498838,1 8.43639298,1.18359319 9.06920397,1.55077994 C9.70201496,1.91796668 10.2020136,2.41796537 10.5692004,3.05077636 C10.9363871,3.68358735 11.1199803,4.37499195 11.1199803,5.12499017 C11.1199803,5.74998879 11.0340429,6.26561256 10.8621684,6.67186148 C10.7371689,6.921861 10.5106068,7.24998522 10.1824826,7.65623413 C9.93248304,7.96873327 9.73717113,8.23435787 9.59654646,8.45310723 C9.36217202,8.81248125 9.15904739,9.2109178 8.98717292,9.64841688 C8.95592311,9.75779174 8.89342314,9.8437288 8.79967336,9.90622877 C8.70592359,9.96872874 8.59654873,9.99997854 8.47154914,9.99997854 L5.51843119,9.99997854 Z M5.11999464,5.12499017 C5.11999464,4.60936639 5.30358783,4.16796132 5.67077457,3.80077457 C6.03796132,3.43358783 6.47936639,3.24999464 6.99499017,3.24999464 C7.10436502,3.24999464 7.19420844,3.21483847 7.26452077,3.14452614 C7.3348331,3.0742138 7.36998927,2.98437039 7.36998927,2.87499553 C7.36998927,2.76562067 7.3348331,2.67577725 7.26452077,2.60546492 C7.19420844,2.53515259 7.10436502,2.49999642 6.99499017,2.49999642 C6.52624128,2.49999642 6.08874221,2.61718364 5.68249329,2.85155809 C5.27624438,3.08593253 4.95593253,3.40624438 4.72155809,3.81249329 C4.48718364,4.21874221 4.36999642,4.65624128 4.36999642,5.12499017 C4.36999642,5.23436502 4.40515259,5.32420844 4.47546492,5.39452077 C4.54577725,5.4648331 4.63562067,5.49998927 4.74499553,5.49998927 C4.85437039,5.49998927 4.9442138,5.4648331 5.01452614,5.39452077 C5.08483847,5.32420844 5.11999464,5.23436502 5.11999464,5.12499017 Z"
      id="lightbulb"
      fill="currentColor"
    />
  </SvgIcon>
);

export const WarningIcon = () => (
  <SvgIcon title="warning-icon">
    <path
      d="M13.3686039,10.9424748 C13.4890502,11.1833678 13.5266898,11.4280244 13.4815224,11.6764452 C13.436355,11.9248659 13.3159087,12.135647 13.1201832,12.3087888 C12.9244577,12.4819306 12.6910929,12.5685014 12.4200885,12.5685014 L1.57991154,12.5685014 C1.30890712,12.5685014 1.07554232,12.4819306 0.879816786,12.3087888 C0.684091255,12.135647 0.563644959,11.9248659 0.518477556,11.6764452 C0.473310152,11.4280244 0.51094977,11.1833678 0.631396065,10.9424748 L6.05148452,1.54765486 C6.18698673,1.30676192 6.3789482,1.14491229 6.62736892,1.06210527 C6.87578964,0.979298245 7.12421036,0.979298245 7.37263108,1.06210527 C7.6210518,1.14491229 7.81301327,1.30676192 7.94851548,1.54765486 L13.3686039,10.9424748 Z M7,9.00027648 C6.71393966,9.00027648 6.46928301,9.10190314 6.26602969,9.30515646 C6.06277637,9.50840978 5.96114971,9.75306643 5.96114971,10.0391268 C5.96114971,10.3251871 6.06277637,10.5698438 6.26602969,10.7730971 C6.46928301,10.9763504 6.71393966,11.0779771 7,11.0779771 C7.28606034,11.0779771 7.53071699,10.9763504 7.73397031,10.7730971 C7.93722363,10.5698438 8.03885029,10.3251871 8.03885029,10.0391268 C8.03885029,9.75306643 7.93722363,9.50840978 7.73397031,9.30515646 C7.53071699,9.10190314 7.28606034,9.00027648 7,9.00027648 Z M6.00631712,5.27396567 L6.18698673,8.34534913 C6.18698673,8.40557245 6.2133345,8.4620317 6.26602969,8.51472689 C6.31872488,8.56742208 6.38271226,8.59376985 6.45799115,8.59376985 L7.54200885,8.59376985 C7.61728774,8.59376985 7.68127512,8.56742208 7.73397031,8.51472689 C7.7866655,8.4620317 7.81301327,8.40557245 7.81301327,8.34534913 L7.99368288,5.27396567 C7.99368288,5.18363086 7.96733512,5.11211569 7.91463993,5.0594205 C7.86194474,5.00672531 7.79795735,4.98037755 7.72267846,4.98037755 L6.27732154,4.98037755 C6.20204265,4.98037755 6.13805526,5.00672531 6.08536007,5.0594205 C6.03266488,5.11211569 6.00631712,5.18363086 6.00631712,5.27396567 Z"
      id="exclamation-triangle"
      fill="currentColor"
    />
  </SvgIcon>
);
