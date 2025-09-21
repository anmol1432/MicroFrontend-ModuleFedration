const {merge} =  require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "production",
    output:{
        filename: '[name].[contentHash].js',
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"dashboard",
            filename: "remoteEntry.js",
            exposes:{
                "./DashboardApp": "./src/bootstrap" // if someone ask /marketing give them src/bootstrap
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}


module.exports = merge(commonConfig, devConfig);