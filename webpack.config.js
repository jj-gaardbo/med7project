var ExtractTextPlugin = require('extract-text-webpack-plugin');
// Import open browser plugin
//Import path module
const path = require('path');
const webpack = require('webpack');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: getDevTool(),
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {modules: true}
                }]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
