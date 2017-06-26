requirejs.config({
  baseUrl: 'scripts',
  paths: {
    jquery: 'jquery',
  },
  shim: {
    'jquery': {
      exports: '$'
    }
  }
})

requirejs(['first_script'])