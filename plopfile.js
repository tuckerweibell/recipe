/* eslint-disable */
const path = require('path');

module.exports = function(plop) {
  const pascalCase = plop.getHelper('pascalCase');
  const ERRORS = {
    INVALID_COMPONENT_TYPE: (type, supportedTypes) => [
      `We don't support "${type}" components, sorry.`,
      `You may try one of: ${pascalCase(supportedTypes.join(', '))}, instead.`,
    ],
    INVALID_FILE_TYPE: file => `We don't have templates for "${file}" files, 😞.`,
    INVALID_DESTINATION: path$$1 =>
      `We couldn't find the destination folder ${path$$1} in your project, 🤷.`,
  };
  const COMPONENT_TYPES = {
    STYLED: 'styled',
    FUNCTIONAL: 'functional',
    STATEFUL: 'stateful',
  };
  const COMPONENT_FILES = {
    COMPONENT: 'component',
    COMPONENT_TEST: 'component-test',
    COMPONENT_STYLES: 'component-styles',
    COMPONENT_MARKDOWN: 'component-markdown',
  };

  const raiseErrorAndExit = message => {
    console.error([message, 'Please try again. 👋'].join(' '));
    process.exit(1);
  };

  const getComponentTemplateName = type => {
    switch (type) {
      case COMPONENT_TYPES.STYLED:
        return 'styled-component.hbs';

      case COMPONENT_TYPES.FUNCTIONAL:
        return 'functional-component.hbs';

      case COMPONENT_TYPES.STATEFUL:
        return 'stateful-component.hbs';

      default:
        return raiseErrorAndExit(ERRORS.INVALID_COMPONENT_TYPE);
    }
  };

  const getFileName = (file, name) => {
    const fileNameMap = {
      [COMPONENT_FILES.COMPONENT]: `${name}.js`,
      [COMPONENT_FILES.COMPONENT_TEST]: `/__tests__/${name}.test.js`,
      [COMPONENT_FILES.COMPONENT_STYLES]: `${name}.styles.js`,
      [COMPONENT_FILES.COMPONENT_MARKDOWN]: `${name}.md`,
    };
    return fileNameMap[file];
  };

  plop.setGenerator('component', {
    description: 'React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of your component?",
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component do you need?',
        choices: [
          {
            name: 'Styled',
            value: COMPONENT_TYPES.STYLED,
          },
          {
            name: 'Functional',
            value: COMPONENT_TYPES.FUNCTIONAL,
          },
          {
            name: 'Stateful',
            value: COMPONENT_TYPES.STATEFUL,
          },
        ],
        default: 'functional',
      },
      {
        type: 'input',
        name: 'destinationPath',
        message: 'Where would you like to put your component?',
        default: path.relative(process.cwd(), `${plop.getPlopfilePath()}/src/components`),
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'Which files does your component need?',
        choices: [
          {
            name: 'Component',
            value: COMPONENT_FILES.COMPONENT,
            checked: true,
          },
          {
            name: 'Component test',
            value: COMPONENT_FILES.COMPONENT_TEST,
            checked: true,
          },
          {
            name: 'Component styles',
            value: COMPONENT_FILES.COMPONENT_STYLES,
            checked: true,
          },
          {
            name: 'Component documentation',
            value: COMPONENT_FILES.COMPONENT_MARKDOWN,
            checked: true,
          },
        ],
      },
    ],
    actions: ({name, type, files, destinationPath}) => {
      const absDestinationPath = `${plop.getPlopfilePath()}/${destinationPath}`;
      const capitalizedName = pascalCase(name);
      const actions = files.reduce(
        (acc, file) => {
          if (!Object.values(COMPONENT_FILES).includes(file)) {
            raiseErrorAndExit(ERRORS.INVALID_FILE);
          }

          const templateFileName =
            file === COMPONENT_FILES.COMPONENT ? getComponentTemplateName(type) : `${file}.hbs`;
          return acc.concat({
            type: 'add',
            path: path.join(absDestinationPath, capitalizedName, getFileName(file, name)),
            templateFile: path.join(`${__dirname}/templates/component`, templateFileName),
          });
        },
        [
          {
            type: 'add',
            path: path.join(absDestinationPath, capitalizedName, 'index.js'),
            templateFile: `${__dirname}/templates/component/index.hbs`,
          },
        ]
      );
      return actions;
    },
  });
};
/* eslint-enable */
