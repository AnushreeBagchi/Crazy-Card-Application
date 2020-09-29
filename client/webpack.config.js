const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/components/App.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        
    },
    
    module: {
        rules: [
            {test: /\.(js)$/, use: "babel-loader"}, 
            {test: /\.jsx?$/, use: "babel-loader"}, 
            {test: /\.css$/, use: ["style-loader", "css-loader"]}

        ]
    },
    mode : "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.html",
            publicPath : '/'
        })
        
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        historyApiFallback: {
          index: 'dist/index.html'
        }
      }
}

