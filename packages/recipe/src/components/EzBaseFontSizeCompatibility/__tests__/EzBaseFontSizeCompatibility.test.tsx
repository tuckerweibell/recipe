import {visualSnapshots} from 'sosia';
import markdown from '../EzBaseFontSizeCompatibility.md';
import EzBaseFontSizeCompatibility from '../EzBaseFontSizeCompatibility';
import {EzCard, EzPage} from '../../index';

const scope = {EzBaseFontSizeCompatibility, EzCard, EzPage};

describe('EzBaseFontSizeCompatibility', () => {
  visualSnapshots({markdown, scope});
});
