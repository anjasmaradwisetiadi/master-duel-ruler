const mix = require('laravel-mix');
const webpack = require('webpack')

// mix.webpackConfig(webpack => {
//     return {
//         plugins: [
//             new webpack.DefinePlugin({
//                 NODE_ENV: JSON.stringify("development"),
//                 __VUE_OPTIONS_API__: true,
//             }),
//         ],
//     }
// })

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')