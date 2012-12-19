require.config({
    baseUrl: './',
    map: {
        '*': {
            'css': 'plugins/css'
        }
    }
});

require(['css!style/style'], function (component) {
    // CSS Builder Object
    console.dir(component);

    // Now we know the Style Sheet is loaded we can insert our widget
    var widget = document.createElement('h1');
        widget.innerHTML = 'test';
    document.body.appendChild(widget);
});