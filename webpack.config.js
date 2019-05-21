


const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

var config = {
  entry: './index.js',
 
  

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },

  devServer: {
    // inline: true,
    historyApiFallback: true,
    port: 3001
  },

  module: {
   
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      
        
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|eot|svg|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      
    ],
  


  },
//   target: 'node',
//   externals:{
//     fs:    "commonjs fs",
//     path:  "commonjs path"
// },
node: {fs: 'empty'},
externals: [
  {'./cptable': 'var cptable'},
  {'./jszip': 'jszip'}
],
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
}

module.exports = config;