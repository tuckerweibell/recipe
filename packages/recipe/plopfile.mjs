export default function plopfile(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a recipe component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: ({name}) => {
      const pascalCase = plop.getHelper('pascalCase');
      const pascalCasedName = pascalCase(name);

      return [
        {
          type: 'addMany',
          destination: `src/components/${pascalCasedName}/`,
          templateFiles: 'templates/*.hbs',
        },
        {
          type: 'addMany',
          destination: `src/components/${pascalCasedName}/`,
          templateFiles: 'templates/Implementations/*.hbs',
        },
        {
          type: 'addMany',
          destination: `src/components/${pascalCasedName}/`,
          templateFiles: 'templates/__tests__/*.hbs',
        },
        {
          type: 'modify',
          path: 'src/components/index.ts',
          transform(template) {
            return `${template.trimEnd()}\nexport {default as ${pascalCasedName}} from './${pascalCasedName}';\n`;
          },
        },
      ];
    },
  });
}
