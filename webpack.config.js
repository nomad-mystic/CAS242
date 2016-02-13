/**
 * Created by endof on 2/8/2016.
 */
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        //styles: './css2'
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            //{
            //    test:   /\.css2$/,
            //    loader: "style-loader!css2-loader!postcss-loader"
            //}
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css2-loader")
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};