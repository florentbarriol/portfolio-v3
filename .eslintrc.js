module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'react/no-unescaped-entities': 'off',
  },
  globals: {
    graphql: false,
  },
};
