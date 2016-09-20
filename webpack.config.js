var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
        contentBase: './build',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    //原文件地址
    entry: './app/index.js', 
    module: {
        loaders: [
        	{
        		test:/\.css$/,
        		loaders:['style','css'],
        		include:/app/
        	},
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    //输出地址
    output: {
        path: 'build',
        filename: 'bundle.min.js'
    },
    
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
