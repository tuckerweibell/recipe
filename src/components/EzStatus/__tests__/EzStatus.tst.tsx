import {visualSnapshots} from 'sosia';
import markdown from '../EzStatus.md';
import {EzStatus} from '../../index';

const scope = {EzStatus};

describe('EzStatus', () => {
  visualSnapshots({markdown, scope});
});
