'use strict'

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.styl(us)?$/, loader:'style-loader!css-loader!stylus-loader' },
            { test: /\.svg/, use: [{ loader: 'url-loader', options: { limit: 1024*10 } }] },
        ]
    },
    plugins: [
        
    ],
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".styl" ]
    }
}
