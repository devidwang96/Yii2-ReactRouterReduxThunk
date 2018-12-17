const path = require('path');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const devPath = path.join(__dirname, '/src');
const distPath = path.join(__dirname, '/web');
const basicPath = path.join(__dirname, '/');

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// const PrerenderSPAPlugin = require('prerender-spa-plugin');

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                ],
            },
        },
    ];
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor));
    }
    return loaders;
};

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
            proxy: 'http://blog.test',
            files: [
                'web/**/*.php',
                'views/**/*.php',
                'config/**/*.php',
                'models/**/*.php',
                'controllers/**/*.php',
                'src/js/**/*.js',
            ]
        }),
        // new PrerenderSPAPlugin({
        //     staticDir: path.join(basicPath, 'static-html'),
        //     routes: ['/', '/about'],
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: sassRegex,
                exclude: sassModuleRegex,
                use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
                test: sassModuleRegex,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                        modules: true,
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                    'sass-loader'
                ),
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ]
    }
};