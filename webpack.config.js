module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    loaders: [
        { test: function (modulePath) {
                return modulePath.endsWith('.ts') && !modulePath.endsWith('spec.ts');
                }
          loader: 'ts-loader',
        }
    ]
  },
  resolve: {
    extensions: ['.js' , '.webpack.js', '.web.js', '.ts']
  }
};