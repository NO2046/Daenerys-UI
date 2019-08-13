const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'RUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    },{
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    },{
      test: /\.scss$/,
      use:['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}