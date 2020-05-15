# Shared ESlint/Prettier configuration

## Requirements

Install [Prettier VSCode](https://github.com/prettier/prettier-vscode).

## Prettier

Put this into your package.json

```
"prettier": "@zauberware/eslint-config/.prettierrc.json",
```

## Install

```
npm i @zauberware/eslint-config eslint
```

## React

Create .eslintrc.js

```
module.exports = {
    extends: '@zauberware/eslint-config/react',
};
```

## Node

Create .eslintrc.js

```
module.exports = {
    extends: '@zauberware/eslint-config/node',
};
```

## Troubleshooting

You always have to quit VSCode if you change eslint rules, otherwise they don't apply immediately.
See https://github.com/microsoft/vscode-eslint/issues/477.
