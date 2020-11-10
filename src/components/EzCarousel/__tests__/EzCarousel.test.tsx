import {visualSnapshots} from 'sosia';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';
import {EzCard, EzLayout, EzHeading, EzPage} from '../../index';

const scope = {
  EzCarousel,
  Placeholder,
  EzLayout,
  EzHeading,
  EzCard,
  EzPage,
  withPrefix() {
    // swap the provided images for placeholder values
    return 'https://via.placeholder.com/800+x+400/00b373/FFFFFF?text=800+x+400';
  },
};

describe('EzCarousel', () => {
  visualSnapshots({markdown, scope});
});
