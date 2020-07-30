const path = require("path");

module.exports = (env) => {
  return {
    devServer: {
      contentBase: path.resolve(__dirname, "./src"),
      historyApiFallback: true,
      port: 3000,
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    output: {
      filename: "bundle.js",
    },
  };
};
