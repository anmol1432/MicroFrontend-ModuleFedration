const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                cart: "cart@http://localhost:8082/cartEntry.js",
                products: "products@http://localhost:8081/remoteEntry.js"
            }, 
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        })
    ]   
}