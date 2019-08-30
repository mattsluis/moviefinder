const path = require('path');
const Dotenv = require('dotenv-webpack');
// Handles css files
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// Spits out an index.html file in the build
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Configure webpack
const config = {
  // Entry point will be in the src folder, file will be named index.js
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
        // For .js or .jsx files use babel-loader. Exclude node modules
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',

          // Translates CSS into CommonJS
          { loader: 'css-loader', options: { modules: true, sourceMap: true } },
          // Compiles Sass to CSS
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
