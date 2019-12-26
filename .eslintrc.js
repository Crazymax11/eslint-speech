module.exports = {
  env: {
    es6: true
  },
  plugins: [
    'local'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "local/strict-names": 'error'
  }
};
