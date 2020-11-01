module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'What is your component destiny folder?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/shared/{{folder}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/shared/{{folder}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/shared/{{folder}}/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/shared/{{folder}}/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      }
    ]
  });
};
