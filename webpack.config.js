'use strict';

let webpack = require('webpack');

module.exports = {
	entry: './build/main.js',
	output: {
		filename: 'build.js',
        //absolute path
        path: __dirname + '/build',
        //global variable
        library: 'app' 
	},

    /* a source map consists of a whole bunch of information that can
     be used to map the code within a compressed file back to it’s original source */
    devtool: 'inline-source-map',

    watch: false,

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
    }),
        //skip the emitting phase whenever there are errors while compiling
        new webpack.NoEmitOnErrorsPlugin()
    ],



//minification
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
        /*
            {
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
