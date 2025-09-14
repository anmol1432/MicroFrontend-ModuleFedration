const {merge} =  require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    output:{
      publicPath: "http://localhost:8081/"
   },
    devServer : {
        port:8081,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"marketing",
            filename: "remoteEntry.js",
            exposes:{
                "./MarketingApp": "./src/bootstrap" // if someone ask /marketing give them src/bootstrap
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}


module.exports = merge(commonConfig, devConfig);