// webpack.config.js

module.exports = {
  output: {
    filename: "[name].bundle.js",
  },
  entry: {
    library: './src/js/library/library.js',
    "ui-kit": './src/js/ui-kit/ui-kit.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      },
    ]
  },
  mode: 'production',
};
