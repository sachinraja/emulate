/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  extends: [path.join(__dirname, '../../eslint.base.js')],
  ignorePatterns: ['dist'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
