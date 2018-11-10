const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
      app: "./src/index.tsx",
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HtmlWebpackPluginConfig,
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', "*", ".jsx", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|JPG)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, 
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    }, 
};