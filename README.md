# hexo-modern-light-gallery

[![npm:](https://img.shields.io/npm/v/hexo-modern-light-gallery.svg)](https://www.npmjs.com/package/hexo-modern-light-gallery) [![npm](https://img.shields.io/npm/l/hexo-modern-light-gallery.svg)]() 

> Generate gallery for Hexo

 ![](http://i.imgur.com/RSJxBIa.jpg)

## Install

```
npm install --save hexo-modern-light-gallery
```

## Usage

This plugin is based on [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js). Once you installed, all posts will add lightgallery feature automatically.

## Config

In your site's `_config.yml`:

```
lightgallery:
    js: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/dist/js/lightgallery.min.js'
    css: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/dist/css/lightgallery.min.css'
    plugins:
        lg-thumbnail.js: 'https://cdn.jsdelivr.net/npm/lg-thumbnail.js@1.2.0/dist/lg-thumbnail.min.js'
        lg-fullscreen.js: 'https://cdn.jsdelivr.net/npm/lg-fullscreen.js@1.2.0/dist/lg-fullscreen.min.js'
        lg-zoom.js: 'https://cdn.jsdelivr.net/npm/lg-zoom.js@1.3.0/dist/lg-zoom.min.js'
        lg-autoplay.js: 'https://cdn.jsdelivr.net/npm/lg-autoplay.js@1.2.0/dist/lg-autoplay.min.js'
        lg-video.js: 'https://cdn.jsdelivr.net/npm/lg-video.js@1.3.0/dist/lg-video.min.js'
        lg-hash.js: 'https://cdn.jsdelivr.net/npm/lg-hash.js@1.0.0/dist/lg-hash.min.js'
        lg-pager.js: 'https://cdn.jsdelivr.net/npm/lg-pager.js@1.0.0/dist/lg-pager.min.js'
  
```

Your config will be merged into default config:

```
{
    js: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/dist/js/lightgallery.min.js',
    css: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/dist/css/lightgallery.min.css',
    plugins: {},
}
```

## Lightgallery.js Plugins
Download the plugin from following source and add url to the `_config.yml` file will automatically enable the plugin.

```js
    plugins:
        lg-thumbnail.js: 'https://cdn.jsdelivr.net/npm/lg-thumbnail.js@1.2.0/dist/lg-thumbnail.min.js'
        lg-fullscreen.js: 'https://cdn.jsdelivr.net/npm/lg-fullscreen.js@1.2.0/dist/lg-fullscreen.min.js'
        lg-zoom.js: 'https://cdn.jsdelivr.net/npm/lg-zoom.js@1.3.0/dist/lg-zoom.min.js'
        lg-autoplay.js: 'https://cdn.jsdelivr.net/npm/lg-autoplay.js@1.2.0/dist/lg-autoplay.min.js'
        lg-video.js: 'https://cdn.jsdelivr.net/npm/lg-video.js@1.3.0/dist/lg-video.min.js'
        lg-hash.js: 'https://cdn.jsdelivr.net/npm/lg-hash.js@1.0.0/dist/lg-hash.min.js'
        lg-pager.js: 'https://cdn.jsdelivr.net/npm/lg-pager.js@1.0.0/dist/lg-pager.min.js'
```
## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/lzane/hexo-modern-light-gallery/issues/new).

