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
  const nonRecipeDependenciesUpdated = dependenciesUpdated.filter(({name}) => name !== '@ezcater/recipe');
  if (nonRecipeDependenciesUpdated.length === 0) return '';

  const commits = changesets.map(({commit}) => commit).filter(Boolean);
  const changesetLink = `- Updated dependencies [${commits.join('] [')}]`;
  const updatedDepenenciesList = nonRecipeDependenciesUpdated.map(
    dependency => `  - ${dependency.name}@${dependency.newVersion}`
  );

  return [changesetLink, ...updatedDepenenciesList].join('\n');
};

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
