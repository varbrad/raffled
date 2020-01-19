const path = require('path')

module.exports = {
  entry: './resources/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        }],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    publicPath: '/dist/',
    compress: true,
    writeToDisk: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunks/[name].js?v=[chunkhash]',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'public', 'dist'),
  }
}
