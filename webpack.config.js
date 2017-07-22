'use strict';

let webpack = require('webpack');

module.exports = {
	entry: './build/main.js',
	output: {
		filename: 'build.js',
        path: __dirname + '/build',
        library: 'app' 
	},

    devtool: 'inline-source-map',

	watchOptions: {
		aggregateTimeout: 100
	},

    /*Webpack 2 has a very strict configuration--
    that was moved to the plugins section using the webpack.LoaderOptionsPlugin */
    plugins: [
        new webpack.LoaderOptionsPlugin({
        options: {
            emitErrors: true
        }
    })
    ],


/*
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
	],

  */

    module: {
        rules: [
           /* {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }   
}