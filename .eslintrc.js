module.exports = {
  root: true,
  extends: './node_modules/@gsmlg/scripts/eslint.js',
  rules: {
    '@babel/new-cap': 'off',
  },
  ignorePatterns: ['**/*.stories.ts', '**/*.stories.tsx'],
};
