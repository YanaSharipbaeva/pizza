const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [];

module.exports = {
    entry: './public/js/app/app.js',
    output: {
        path: path.resolve('public/js/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/app/, /node_modules/],
                use: [
                    { loader: 'ng-annotate-loader' },
                    { loader: 'babel-loader' },
                ]
            },


            { test: /\.js$/,  loader: 'babel-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },

};
