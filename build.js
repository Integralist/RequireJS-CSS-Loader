({
  appDir: 'www',
  dir: 'www-built-uglified',
  baseUrl: '.',
  fileExclusionRegExp: /(.git)$/,
  //separateCSS: true,
  //optimize: 'none',
  map: {
    '*': {
      'css': 'plugins/css'
    }
  },
  modules: [
    {
      name: 'main'
      /*
      name: 'main',
      separateCSS: true,
      create: true
      */
    }
  ]
})

// node r.js -o build.js
