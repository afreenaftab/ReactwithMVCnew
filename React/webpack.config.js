/// <binding />
"use strict";
var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        home: "./index.jsx",
        customer: "./customer.jsx",
        product: "./product.jsx",
        Sale: "./Sale.jsx",
        Store: "./Store.jsx"

    },
    output: {
        path: __dirname + "React/dist",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};