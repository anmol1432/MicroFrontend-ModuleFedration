const {merge} =  require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const commonConfig = require("./webpack.common");
const path = require("path");
const packageJson = require("../package.json");

const devConfig = {
   mode: "development",
   output:{
    publicPath: "http://localhost:8083/"
   },
   devServer : {
        port: 8083,
        historyApiFallback: {
            index: "/index.html"
        },
        headers: {   // ✅ correct
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"dashboard",
            filename: "remoteEntry.js",
            exposes:{
                "./DashboardApp": "./src/bootstrap" // if someone ask /auth give them src/bootstrap
            },
            shared: packageJson.dependencies
        }),
         new HtmlWebpackPlugin({
                    template: "./public/index.html"
        })
    ]
}


module.exports = merge(commonConfig, devConfig);