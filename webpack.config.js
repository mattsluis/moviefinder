const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  // Send the files to the build folder, create one if it isn't present
  watch:true, //watch for file changes
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
    ]
  },
  plugins: [
    // Take the index.html file as a template and create a new one in the build folder
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    // Name the css file sent to the build folder style.css
    new ExtractTextPlugin({filename: 'style.css'}),
    new Dotenv()
  ]
};

// export the config onbject
module.exports = config;
