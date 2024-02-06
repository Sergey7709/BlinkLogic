// module.exports = {
// extends: ['mantine'],
// parserOptions: {
// project: './tsconfig.json',
// },
//   rules: {
//   'react/react-in-jsx-scope': 'off',
//   },
// };

module.exports = {
  extends: ['mantine'],
  settings: {
    'import/resolver': {
        typescript: {}
    }
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      'js': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never'
    }],
  },
};
