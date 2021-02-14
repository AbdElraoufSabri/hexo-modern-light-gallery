function ignore(data) {
    var source = data.source;
    var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

function addTag(data) {
    var config = this.config.lightgallery;
    if (!config) {
        return;
    }

    // add js
    data.content += '<script src="' + config.js + '"></script>';

    // add css
    var css = '<link rel="stylesheet" type="text/css" href="' + config.css + '" />';
    data.content = css + data.content;

    // add plugins
    var plugins = Object.keys(config.plugins);
    for (var plugin of plugins) {
        var jsTag = '<script src="' + config.plugins[plugin] + '"></script>';
        data.content += jsTag;
    }
}

function addRunnableTag(data) {
    data.content += '<script>' +
        `if (typeof lightGallery !== 'undefined') {
            var options = {
            thumbnail:true,
            animateThumb: false,
            showThumbByDefault: false,
            selector: '.lightgallery'
        };
        
        lightGallery(document.getElementsByClassName('.gallery')[0], options);
        }` +
        '</script>';
}

function render(data) {
    if (ignore(data)) {
        return;
    }
    addTag.call(this, data);
    addRunnableTag.call(this, data);
};

exports.render = render;