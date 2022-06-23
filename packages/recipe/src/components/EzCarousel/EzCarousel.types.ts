import {ReactElement, ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzCarouselProps {
  children: ReactNode;
  title: string;
  description: string;
  link?: ReactElement;
  onPageChange?: (previous: number, current: number) => void;
}
