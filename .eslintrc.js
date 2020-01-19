const [IGNORE, WARNING, ERROR] = [0, 1, 2]

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Plain Eslint
    'complexity': [ERROR, 10],
    // TypeScript
    // React rules
    'react/react-in-jsx-scope': IGNORE,
    'react/prop-types': IGNORE,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
