'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['**/*.js', '**/*.ts'],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true, printWidth: 120, trailingComma: 'all' }],
      },
    },
  ],
};
