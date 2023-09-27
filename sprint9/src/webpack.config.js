
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // додаємо .html-файл у папку dist з допомогою плагіна вебпаку

module.exports = {
  mode: 'development',
  entry: './src/index.js', // вказуємо точку входу (index.js)
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'index.js',
    clean: true, // при виконанні команди 'npm run build' будуть зникати непотрібні файли
    environment: {
      arrowFunction: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // так babel-loader підключається до вебпака

        }
      }
    ]
  }
};
