const path = require('path');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const devPath = path.join(__dirname, '/src');
const distPath = path.join(__dirname, '/web');
const basicPath = path.join(__dirname, '/');

const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    entry: {
        main: devPath + '/js/main.js'
    },
    output: {
        filename: 'bundle.js',
        path: distPath + '/js'
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://testyiireact.test',
            files: [
                'web/**/*.php',
                'views/**/*.php',
                'config/**/*.php',
                'models/**/*.php',
                'controllers/**/*.php',
                'src/js/**/*.js',
            ]
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(basicPath, 'static-html'),
            routes: ['/', '/about'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};