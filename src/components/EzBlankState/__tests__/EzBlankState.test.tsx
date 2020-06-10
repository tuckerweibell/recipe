import {visualSnapshots} from 'sosia';
import EzBlankState from '../EzBlankState';
import markdown from './EzBlankState.test.md';
import {EzButton, EzCard, EzPage} from '../../index';
import Media from '../../EzField/Media';

const scope = {EzBlankState, EzButton, EzCard, EzPage, Media};

describe('EzBlankState', () => {
  visualSnapshots({markdown, scope});
});
