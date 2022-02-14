const slsw = require('serverless-webpack');

module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [
    {
      'aws-sdk': 'commonjs aws-sdk',
      saslprep: 'commonjs saslprep',
    },
  ],
  devtool: 'source-map',
  node: false,
  optimization: {
    minimize: false,
  },
};
