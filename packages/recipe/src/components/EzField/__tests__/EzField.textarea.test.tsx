import {visualSnapshots} from 'sosia';
import ezTextAreaTests from './EzTextArea.test.md';
import EzField from '../EzField';

const scope = {EzField};

describe('EzField', () => {
  visualSnapshots({markdown: ezTextAreaTests, scope});
});
