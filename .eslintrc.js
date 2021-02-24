module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'require-jsdoc': 'off'
  },
  extends: ['eslint:recommended', 'google']
};
