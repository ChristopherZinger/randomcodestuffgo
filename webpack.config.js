const path = require('path');

module.exports = {
  entry:{
    app: './src/js/theme/app.js',
    gutenberg: './src/js/gutenberg/gutenberg.js'
  },
  output: {
    path: path.join(__dirname, 'assets/js/'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
        {
            test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
            use: ['file-loader?name=/[hash].[ext]']
        },
        {
            test: /\.json$/,
            use: ['json-loader']
        },
        {
            use: ['babel-loader'],
            test: /\.js?$/,
            exclude: path.join(__dirname, 'node_modules')
        }
    ]
},
}
