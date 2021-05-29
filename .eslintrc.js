module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'max-len': ['error', { 'code': 100, 'tabWidth': 2 }],
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'require-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always']
  },
  extends: ['eslint:recommended', 'google']
};
