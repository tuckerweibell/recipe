import {ReactNode} from 'react';

interface HeroImageProps {
  displaySizeHide?: string;
  displaySizeShow?: string;
  objectPosition?: string;
}

interface RecipeContributorProps {
  href: string;
  imgSrc: string;
  name: string;
  role: string;
}

interface WelcomeSubheaderProps {
  children: ReactNode;
  href?: string;
}

export {HeroImageProps, RecipeContributorProps, WelcomeSubheaderProps};
