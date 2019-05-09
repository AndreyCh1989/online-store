const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        server: path.join(__dirname, 'server.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "backend/[name].js"
    },
    target: 'node',
    node: {
        // только для express
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()], // для express
    module: {
        rules: [
            {
                // компиляция из es6+ в es5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'db',
                to: 'backend/db/[name].[ext]',
                toType: 'template'
            }
        ])
    ]
}
