const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: [
		    'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/js/foundation.js',
		     './public/src/app.js',
		    ],
	output: {
		path: path.resolve(__dirname, 'public/build'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'app')],
		extensions: ['.js', '.jsx', '.css', '.scss']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules | bower_component)/
             }
       ]
	},
	devtool: 'cheap-module-eval-source-map',
	externals: {
		jquery: "jQuery",
	},
	    plugins:[
         new webpack.ProvidePlugin({
             '$' : 'jquery',
             'jQuery' : 'jquery',
             'jquery' : 'jquery'
        }),
    ],
};
