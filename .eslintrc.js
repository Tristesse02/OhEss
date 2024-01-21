module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    project: process.env.ESLINT_PROJECT_PATH || 'd:/ohEss/OhEss/tsconfig.json' //  This absolute path is different from github repo
  },
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'jest',
    'react',
    'import',
    'prettier',
    'jest-dom',
    'react-hooks',
    'testing-library',
    'simple-import-sort',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['next-env.d.ts'],
  rules: {
    endOfLine: 'off',
    'no-extra-semi': 'error',
    'no-unused-vars': 'error',
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/comma-dangle': ['error'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
