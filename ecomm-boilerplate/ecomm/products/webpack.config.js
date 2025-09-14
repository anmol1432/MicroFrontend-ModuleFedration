const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const  ModuleFederationPlugin  = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer:{
        port:8081
    },
    output: {
         publicPath: "auto",
    },
    plugins:[
        new ModuleFederationPlugin({
             name: "products",
             filename: "remoteEntry.js",
             exposes: {
                 './ProductsIndex': './src/index.js',
             },
             shared:["faker"] // shared dependencies or shared node module
            // shared : {
            //     faker : {
            //         singleton:true
            //     }
            // }
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        })
    ]
}