const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/App.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
            test: /\.js$/,
            include: path.resolve(__dirname + '/src'),
            exclude: /(node_modules|bower_components)/,
            use: [{
                    loader: 'babel-loader',
                    options: {
                        // @remove-on-eject-begin
                        babelrc: false,
                        presets: [require.resolve('babel-preset-react-app')],
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        exclude: /node_modules/
                    }
                }]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery":"jquery",
            PouchDB: ['pouchdb','default']
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port:3000
    }
};