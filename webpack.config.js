// webpack.config.js

module.exports = {
  // output: {
  //   filename: "[name].bundle.js",
  // },
  // entry: {
  //   index: './js/index.js',
  //   home: './js/home.js',
  //   "about-our-company": './js/about-our-company.js',
  //   "join-our-team": './js/join-our-team.js',
  //   "contact-us": './js/contact-us.js',
  //   redirect: './js/redirect.js'
  // },
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
