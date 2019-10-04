import {visualSnapshots} from 'sosia';
import EzBlankState from '../EzBlankState';
import markdown from './EzBlankState.test.md';
import {EzButton, EzCard, EzPage} from '../../index';

const scope = {EzBlankState, EzButton, EzCard, EzPage};

describe('EzBlankState', () => {
  visualSnapshots({markdown, scope});
});
