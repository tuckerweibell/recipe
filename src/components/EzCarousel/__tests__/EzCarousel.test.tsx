import {visualSnapshots} from 'sosia';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';
import {EzLayout, EzHeading} from '../../index';

const scope = {EzCarousel, Placeholder, EzLayout, EzHeading};

describe('EzCarousel', () => {
  visualSnapshots({markdown, scope});
});
