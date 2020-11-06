import {visualSnapshots} from 'sosia';
import markdown from '../EzCarousel.md';
import EzCarousel from '../EzCarousel';
import Placeholder from '../../../../doc-site/src/components/Placeholder';

const scope = {EzCarousel, Placeholder};

describe('EzCarousel', () => {
  visualSnapshots({markdown, scope});
});
