module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'allow-empty-catch': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
  },
};
