const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
const buildTypescriptCommand = () => 'tsc --noEmit';
const prettierCommand = 'prettier --write --ignore-unknown';
module.exports = {
  '**/*.ts?(x)': [
    prettierCommand,
    buildEslintCommand,
    buildTypescriptCommand
  ],
  '**/*.css': 'stylelint --fix',
  '**/*.svg': [
    prettierCommand,
  ],
}
