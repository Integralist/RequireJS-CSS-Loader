({
  appDir: 'www',
  dir: 'www-built',
  baseUrl: '.',
  fileExclusionRegExp: /(.git)$/,
  optimize: 'none',
  map: {
    '*': {
      'css': 'plugins/css'
    }
  },
  /*
      If we do the standard build script we'll get all code (including the inline styles) in a single script file.

      The down side of that approach is the overall file size is larger, but only one HTTP request.

      The alternative option is to treat the CSS dependant widget (other modules could be part of the main script still) as a module that should be excluded and thus loaded asynchronously!

      The down side of this approach is the extra HTTP request, but the main script now becomes a smaller bootstrapper library.

      NOTE: if there are lots of extra modules that are concatenated into the single main script then keeping the inline CSS content out of the main script might be redundant, 
      as the bootstrap benefits go out the window!

      Depends on the project.
  */
  modules: [
    /*
    {
      name: 'main'
    }
    */
    {
      name: 'main',
      exclude: ['widget']
    },
    {
      name: 'widget'
    }
  ]
})

// node r.js -o build.js
