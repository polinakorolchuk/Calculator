const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // или 'production' для финальной сборки
  entry: './src/index.js', // главный JS файл
  output: {
    filename: 'bundle.js', // собранный JS
    path: path.resolve(__dirname, 'dist'), // папка для сборки
    clean: true,
  },
  devServer: {
    static: './dist',
    open: true, // откроет браузер автоматически
    hot: true,  // включит HMR (горячую перезагрузку)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // твой исходный HTML
    }),
  ],
};
