const merge = require('webpack-merge');
const webpack = require('webpack');

const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('../config/webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const outputpath = "./"
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const envvariables = require('../config/enviromentconstants');
const environment = process.env.NODE_ENV;
const env = envvariables[environment];

var webpackConfig = merge(baseWebpackConfig, {
    output: {
        publicPath: outputpath,
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name].[contenthash:8].js',
        path: path.resolve(env.ROOT_DIR, 'dist')
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin(),new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all',
            minSize: 50000,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true,
                  },
            }
        }
    },
    plugins: [
        new cleanWebpackPlugin(['dist'], {
            root: env.ROOT_DIR,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index_tem.html',
            inject: true,
            hash:true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "assets/css/[name].css"
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
          })
    ],
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../dist/css/assets'
                    },

                },
                'css-loader',
                'sass-loader',
       
            ]
        }]
    }
});
module.exports = webpackConfig;