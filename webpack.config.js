const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = (env, options) => {
  const isProd = options.mode === 'production';
  const filename = ext => isProd ? `bundle.[fullhash].${ext}` : `bundle.${ext}`;

  return {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './index.js'],
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core')
      }
    },
    devtool: !isProd ? 'source-map' : false,
    devServer: {
      port: 3000,
      hot: !isProd
    },
    target: isProd ? 'browserslist' : 'web',
    plugins: [
      new CleanWebpackPlugin(),
      new ESLintPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        minify: {
          removeComments: isProd,
          collapseWhitespace: isProd
        }
      }),
      new CopyPlugin({
        patterns: [{
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }]
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')
      })
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  };
};
