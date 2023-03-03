module.exports = {
  presets: ['next/babel'],
  plugins: [
    'date-fns',
    [
      'import',
      {
        libraryName: '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/core',
    ],
    [
      'import',
      {
        libraryName: '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      '@material-ui/icons',
    ],
  ],
};
