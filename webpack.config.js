const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Todo List',
        }),
      ],
      mode:'development'
      ,
      output:{
          filename:'[name].main.js',
          path: path.resolve(__dirname, 'dist'),
          clean:true,
      },
      devtool: 'inline-source-map',
      devServer:{
          contentBase: './dist',
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader','postcss-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
};