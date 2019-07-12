import {visualSnapshots} from 'sosia';
import markdown from './EzSuperRadioButtons.test.md';
import EzSuperRadioButtons from '../EzSuperRadioButtons';

const scope = {EzSuperRadioButtons};

describe('EzSuperRadioButtons', () => {
  visualSnapshots({markdown, scope});
});
