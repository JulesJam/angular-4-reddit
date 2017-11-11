module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    loaders: [
        { test: /.ts$/ }
    ]
  },
  resolve: {
    extensions: ['.js' , '.webpack.js', '.web.js', '.ts']
  }
};