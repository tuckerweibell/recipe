import {visualSnapshots} from 'sosia';
import markdown from './EzProvider.test.md';
import {EzProvider} from '../EzProvider';

const scope = {EzProvider};

describe('EzProvider', () => {
  visualSnapshots({markdown, scope});
});
