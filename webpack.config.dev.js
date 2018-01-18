import path from 'path';
import webpack from 'webpack';

export default {
  devtool:'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname,'client'),
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] }
};
