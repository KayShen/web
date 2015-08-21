var path = require('path');
var webpack = require("webpack");

// var pathToSassLoader = path.resolve(__dirname, './index.js');

module.exports = {
  context: __dirname + '/static/scripts/coffee',
  entry: {
    transform:'./transform',
    survey:[ './survey'],
    about:['./main'],
    graph:['./graph']
    // vendor: [ path.resolve(__dirname, 'src/coffee/airtake/airtake.coffee')],
    // vendors:['react']

  },
  output: {
      path: path.resolve(__dirname, 'static/scripts/js'),
      filename: '[name].js',
      publicPath: 'http://localhost:8080/'
      // publicPath: 'static.cn.wgine.com/77/'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee-loader'
    },
    // { test: /\.css$/,
    //   loader: "style-loader!css-loader"
    // },
    {
      test: /\.scss$/,
      loader: 'style!css!resolve-url!sass'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  resolve:{
    extensions: ['', '.js', '.coffee']
  },
  devtool: "#inline-source-map",
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // //   new webpack.optimize.CommonsChunkPlugin("vendors", "react.bundle.js")
  // ]
};