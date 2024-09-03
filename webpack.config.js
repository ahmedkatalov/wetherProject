// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".js", ".css"],
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: "asset/resource",
          },]
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), 
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: './dist', // папка с собранными файлами
        open: true,  // автоматический запуск браузера
        hot: true, // горячая перезагрузка
        port: 3000, // порт для сервера
      },
}