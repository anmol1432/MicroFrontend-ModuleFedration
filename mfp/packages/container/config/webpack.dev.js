const {merge} =  require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    output:{
      publicPath: "http://localhost:8080/"
   },
    devServer : {
        port:8080,
       historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"container",
            remotes : {
                "marketing": "marketing@http://localhost:8081/remoteEntry.js" ,// the bundled file we want to load 
                "auth": "auth@http://localhost:8082/remoteEntry.js",
                "dashboard": "dashboard@http://localhost:8083/remoteEntry.js"
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}


module.exports = merge(commonConfig, devConfig);