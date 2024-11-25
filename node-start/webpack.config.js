const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Входной файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  // resolve: {
  //   extensions: ['.ts', '.js'], // Расширения файлов, которые обрабатывает Webpack
  // },
  module: {
    rules: [
      // {
      //   test: /\.ts$/, // Все файлы .ts
      //   use: 'ts-loader', // Используем ts-loader
      //   exclude: /node_modules/, // Исключаем node_modules
      // },
      {
        test: /\.m?js$/, // Обработка JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/, // Обработка SCSS
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          'css-loader', // Преобразование CSS в CommonJS
          'sass-loader', // Компиляция SCSS в CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
      filename: 'index.html', // Имя выходного HTML файла
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя выходного CSS файла
    }),
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
};


// {
//   "compilerOptions": {
//     "outDir": "./dist",
//     "module": "ESNext",
//     "target": "ES5",
//     "moduleResolution": "node",
//     "strict": true,
//     "esModuleInterop": true
//   },
//   "include": ["src/**/*"]
// }