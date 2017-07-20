'use strict';

const webpack = require('webpack');

module.exports = {
	entry: './project/js/main.js',
	output: {
		filename: 'build.js',
		library: 'home'
	},

	watchOptions: {
		aggregateTimeout: 100
	},


/* min
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
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader?optional[]=runtime',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }   

}