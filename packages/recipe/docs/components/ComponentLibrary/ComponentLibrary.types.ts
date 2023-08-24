import {ReactNode} from 'react';

export interface LibrarySectionProps {
  category: string;
  components: string[];
  sectionName: string;
}

export interface LibraryItemProps {
  link: string;
  name: string;
  snapshot: ReactNode;
}
