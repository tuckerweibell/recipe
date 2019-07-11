import {visualSnapshots} from 'sosia';
import EzBlankState from '../EzBlankState';
import markdown from './EzBlankState.test.md';
import {EzButton, EzCard} from '../../index';

const scope = {EzBlankState, EzButton, EzCard};

describe('EzBlankState', () => {
  visualSnapshots({markdown, scope});
});
