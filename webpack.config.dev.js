var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var APP_FILE = path.resolve(APP_PATH, 'App.jsx');
var BUILD_PATH = path.resolve(ROOT_PATH, '/pxq/dist');