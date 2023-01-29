module.exports = {
  '**/*.ts?(x)': [
    'eslint --fix',
    'prettier --write --ignore-unknown',
    () => 'tsc --noEmit'
  ]
}
