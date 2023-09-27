module.exports = {
  trailingComma: 'es5',
  endOfLine: 'lf',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
  ],
};
