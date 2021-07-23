module.exports = {
  entry: __dirname + '/index.js',
  output: {
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     // loader: 'file-loader',
      //     options: {
      //       esModule: false, // 这里设置为false
      //       name: '[name].[ext]',
      //       limit: 10240
      //     }
      //   }]
      // }

      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         esModule: false,
      //       },
      //     },
      //   ],
      // },

    ]
  }
};
