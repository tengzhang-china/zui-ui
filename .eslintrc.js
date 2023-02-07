module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-var": 'off',
    "no-unused-vars": 'off',
    "no-this-alias": 'off',
    "no-undef": 'off',
    "no-const-assign": 'off',
    "no-unused-vars": 'off',
    "no-explicit-any": 'off',
    "no-mixed-spaces-and-tabs": "off",
    "require-prop-type-constructor": "off"
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
