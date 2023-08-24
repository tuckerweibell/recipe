import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown';
import ChangelogMarkdown from '../../../CHANGELOG.md';

const Changelog: FC<unknown> = () => (
  <ReactMarkdown children={ChangelogMarkdown as unknown as string} />
);

export default Changelog;
