var pkg = require('./package.json');

module.exports = {
  author: 'zechengdai <daizech@gmail.com>',

  description: 'freelog widget开发文档',
  // Documentation for GitBook is stored under "docs"
  root: './docs',
  title: 'freelog组件开发',

  // Use the "official" theme
  plugins: ['theme-comscore', 'anchor-navigation-ex', 'fontsettings', 'highlight'],

  variables: {
    version: pkg.version
  },

  pluginsConfig: {
    'anchor-navigation-ex': {
      showLevel: false
    },
    "fontsettings": {
      "theme": 'white', // 'sepia', 'night' or 'white',
      "family": 'sans', // 'serif' or 'sans',
      "size": 2         // 1 - 4
    }
  }
};