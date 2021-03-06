const { spawn } = require('child_process');
const pkg = require('../package.json');

const dependencies = Object.keys(pkg.dependencies);
const devDependencies = Object.keys(pkg.devDependencies);

const add = (args) => {
  return spawn('yarn', ['add'].concat(args), { stdio: 'inherit' });
};

const addDev = (args) => {
  return add(['--dev'].concat(args));
};

add(dependencies).on('close', () => {
  addDev(devDependencies.concat(
    'react-hot-loader@3.0.0-beta.6',
    'webpack@2.2.1',
    'extract-text-webpack-plugin@beta',
    'webpack-dashboard@0.3.0',
    'webpack-dev-server@2.3.0'
  )).on('close', (code) => process.exit(code));
});
