
require.config({
    baseUrl: './',
    map: {
        '*': {
            'css': 'plugins/css'
        }
    }
});

require(['widget']);
define("main", function(){});
