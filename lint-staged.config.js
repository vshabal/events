const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
const buildTypescriptCommand = () => 'tsc --noEmit';

module.exports = {
  '**/*.ts?(x)': [
    'prettier --write --ignore-unknown',
    buildEslintCommand,
    buildTypescriptCommand
  ],
  '**/*.css': 'stylelint --fix'
}
