let path = require('path')
let SRC_DIR = path.join(__dirname, '/client/src')
let DIST_DIR = path.join(__dirname, '/client/dist')
// console.log(SRC_DIR)
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },

      {
          test:/\.css$/,
          use:['style-loader','css-loader']
      },
    ]
  }
}
