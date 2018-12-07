module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      jsx: true
    },
    plugins: [
      "react"
    ],
    extends: [
     'prettier',
     'plugin:react/recommended'
    ],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never']
    }
}
