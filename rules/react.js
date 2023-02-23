module.exports = {
  // @TODO: check if production .eslintrc is possible, reconsider some rules which need to be stricter e.g. prop types or no use vars
  // This parser is only useful if we use https://flow.org/ or experimental features not support by Eslint
  // We can still keep & use it, because React is using it too (https://github.com/facebook/react/blob/master/.eslintrc.js)
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    jest: true,
    browser: true,
  },
  // We use airbnb as standard form guide (https://github.com/airbnb/javascript)
  // Use prettier to avoid conflicts between eslint & prettier
  // Use prettier/react to avoid conflicts for react rules & prettier e.g. prettier generally formats the file and has no knowledge of JSX formatting
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'import', 'react-hooks', 'prettier'],
  rules: {
    // Override airbnb best practices, allow spaces in comments
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    // Both options are annoying when developing, set to "warn" for now to avoid broken builds
    'no-unused-vars': 'warn',
    'no-lone-blocks': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'table', 'debug'] }],
    // Enforced by Prettier
    // NOTE: Prettier doesn't handle long strings or long comments. Not a big deal right now.
    'max-len': 'off',
    // Override airbnb best practices, allow underscore dangle
    'no-underscore-dangle': 'off',
    // CK - react don't have to be imported since React 17
    'react/react-in-jsx-scope': 'warn',
    // Override airbnb best practices, do not require type attribute for buttons
    'react/button-has-type': 'warn',
    'react/jsx-props-no-spreading': 'off',
    // Override airbnb best practices, allow jsx in .js files
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Override airbnb best practices, be more relaxed with prop types, otherwise it's annoying while developing
    'react/forbid-prop-types': 'warn',
    // Override airbnb best practices, be more relaxed with prop types, otherwise it's annoying while developing
    'react/prop-types': 'warn',
    // Override airbnb best practices, be more relaxed with prop types, otherwise it's annoying while developing
    'react/no-unused-prop-types': 'warn',
    'react/no-unescaped-entities': 'off',
    // Override airbnb best practices, be more relaxed with prop types, otherwise it's annoying while developing
    'react/require-default-props': 'warn',
    'import/no-cycle': 'warn',
    'no-extra-boolean-cast': 'off',
    // Do not require file extension when importing a file, except for svg
    'import/extensions': [
      'off',
      'never',
      {
        svg: 'always',
      },
    ],
    // Forbid import of external modules which are not declared in package.json
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    // Be relaxed with forcing developer to use export default for single exports
    'import/prefer-default-export': 'warn',
    // CK - manage imports automatically
    'import/no-unresolved': 'off',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-named-as-default': 'off',
    'import/export': 'warn',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'prop-types',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    radix: ['error', 'as-needed'],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': [
      0,
      {
        forbid: [],
      },
    ],
    'lines-between-class-members': 0,
    semi: [2, 'never'],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // TypeScript-only configuration
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './node_modules/@zauberware/eslint-config/tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'prettier'],
      rules: {
        semi: ['error', 'never'],
        '@typescript-eslint/semi': 'off',
        'comma-dangle': 'off',
        //matching prettier es5 rules
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
          },
        ],
        'no-unexpected-multiline': 'error',
      },
    },
  ],
}
