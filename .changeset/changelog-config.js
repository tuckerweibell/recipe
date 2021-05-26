const getReleaseLine = async (
  changeset,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  options
) => {
  if (!options.repo) {
    throw new Error(
      'Please provide a repo to this changelog generator like this:\n"changelog": ["@changesets/changelog-github", { "repo": "org/repo" }]'
    );
  }

  const [firstLine, ...futureLines] = changeset.summary.split('\n').map(l => l.trimRight());

  let returnVal = `- ${firstLine}`;

  if (futureLines.length > 0) {
    returnVal += `\n${futureLines.map(l => `  ${l}`).join('\n')}`;
  }

  if (changeset.commit)
    returnVal += ` [[sha]](https://github.com/${options.repo}/commit/${changeset.commit})`;

  return returnVal;
};

const getDependencyReleaseLine = async (changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return '';

  const changesetLinks = changesets.map(
    changeset => `- Updated dependencies [${changeset.commit}]`
  );

  const updatedDepenenciesList = dependenciesUpdated.map(
    dependency => `  - ${dependency.name}@${dependency.newVersion}`
  );

  return [...changesetLinks, ...updatedDepenenciesList].join('\n');
};

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
